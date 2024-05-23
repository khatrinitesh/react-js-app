import React, { useState, useEffect } from 'react';
import Banner from '../components/banner';

export default function Service() {
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState('');

  const fetchData = async () => {
    try{
      const response = await fetch('http://localhost:3000/jsondata')
      const result = await response.json();
      setUser(result)
      setLoading(false);
    }
    catch(error){
      setError('Error fetching data. Please try again.')
      setLoading(false);
    }
  }
  useEffect(() =>{
    fetchData()
  },[]);

  const btnDel = (id) => {
    const newData = user.filter((val) => val.id !== id)
    setUser(newData)
  }

  // Previous code...
const handleSearch = (e) => {
  setSearchTerm(e.target.value)
};

if(loading){
  return(
    <div>loading...</div>
  )
}
if(error){
  return(
    <div>{error}</div>
  )
}
  return (
    <div className='content'>
      <Banner bannertitle="Service" bannerdesc="Lorem Ipsum"/> 
      <div className='row'>
        <div className='searchbar_block'>
          {/* Search input */}
          <div className='mb-3'>
            <input className='form-control'
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <div className='row'>
         {user.filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.first_name
                .toLocaleLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            ) {
              return val;
            }
          }).map((val, key) => {
            return (
              <div className='col-3 col-md-6 col-lg-4 col-xl-4 mb-4'>
                <div className="p-3 card" key={key}>
                  <h3>firstname - {val.first_name}</h3>
                  <h3>lastname - {val.last_name}</h3>
                  <p>email - {val.email}</p>
                  <p>gender - {val.gender}</p>
                  <p>ip address - {val.ip_address}</p>
                  <button className='btn btn-primary' onClick={() => btnDel(val.id)}>&times;</button>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  )
}
