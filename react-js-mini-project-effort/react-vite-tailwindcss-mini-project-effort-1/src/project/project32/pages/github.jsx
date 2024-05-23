import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Github() {

    const [data,setData] = useState([]);

    useEffect(() => {
        axios.get('https://api.github.com/users/khatrinitesh')
        .then((res) => {
            console.log("RESPONSE",res.data);
            setData(res.data)
        })
    },[])
  return (
    <div>Github Followers: <Link to="{data.followers_url}">{data.following}</Link></div>
  )
}
