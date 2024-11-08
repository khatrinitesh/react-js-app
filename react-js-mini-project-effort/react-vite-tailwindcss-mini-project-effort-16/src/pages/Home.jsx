import React, { useEffect, useState } from 'react';
import useStore from './../store/UseStore';
import { fetchUserData } from '../api/apiService';

const Home = () => {
    const [error, setError] = useState(null);
    const {user,setUser,loading,setLoading} = useStore();


    useEffect(() => {
        const getUser = async () => {
            setLoading(true)
            try {
                const data = await fetchUserData(1); // fetch data for user with ID 1
                setUser(data);
            } catch (err) {
                setError(err.message);
            }
            finally{
                setLoading(false);
            }
        }

        getUser();
    },[[setUser, setLoading]])

    if(loading){
        return(
            <div>Loading...</div>
        )
    }

    if(error){
        return(
            <div>Error: {error}</div>
        )
    }
  return (
    <div>
      {user?.title}
      {user?.body}
    </div>
  );
}

export default Home;
