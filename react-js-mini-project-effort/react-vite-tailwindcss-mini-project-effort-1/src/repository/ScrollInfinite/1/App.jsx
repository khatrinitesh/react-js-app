import React, { useState, useRef, useEffect } from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <>
      <InfiniteScroll/>
    </>
  )
}

export default CustomApp

const InfiniteScroll = () => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const loaderRef = useRef(null);
  
    useEffect(() => {
      // Simulate fetching data from an API
      const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`);
        const newItems = await response.json();
        setItems((prevItems) => [...prevItems, ...newItems]);
      };
  
      fetchData();
    }, [page]);
  
    useEffect(() => {
      const observer = new IntersectionObserver(handleObserver, { threshold: 1 });
      if (loaderRef.current) {
        observer.observe(loaderRef.current);
      }
  
      return () => {
        observer.disconnect();
      };
    }, []);
  
    const handleObserver = (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    };
  
    return (
      <div>
        <div className="grid grid-cols-3 gap-4">
          {items.map((item) => (
            <div key={item.id} className="item">
              <img src={item.thumbnailUrl} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <div ref={loaderRef} className="loader"></div>
      </div>
    );
  };
