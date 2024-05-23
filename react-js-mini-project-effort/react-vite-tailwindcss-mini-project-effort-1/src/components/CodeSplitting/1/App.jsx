import React, { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import './style.css';

const Loading = lazy(() => import("./Loading")); // loading
const Home = lazy(() => import("./Home")); // home
const About = lazy(() => import("./About")); // about
const Service = lazy(() => import("./Service")); // service
const ServiceList = lazy(() => import("./ServiceList")); // service list
const Contact = lazy(() => import("./Contact")); // contact

const CustomApp = () => {
    

  const [loading, setLoading] = useState(true);
  const [data,setData] = useState([]);

  useEffect(() => {
    // Simulating a delay with setTimeout
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2000 milliseconds (2 seconds)

    // cleanup the timeout on component unmount
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const examples = import.meta.env.VITE_API_COMMENTS
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(examples)
                const result = await response.json()
                setData(result)
                console.log(result)
            }
            catch(error){
                console.log(`Error,${error}`)
            }
        }
        fetchData()
    },[])

    const handleDel = (id) => {
        // Perform deletion logic, for now, let's filter out the example to be deleted
        const updatedData = data.filter((service) => service.id !== id)
        setData(updatedData)
    }
  return (
    // using suspense to handle the loading state
    <Suspense fallback={<Loading />}>
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<ServiceList services={data} onDelete={handleDel} />} />
          <Route path="/servicelist/:serviceId" element={<Service services={data} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
    </Suspense>
  );
};

export default CustomApp;
