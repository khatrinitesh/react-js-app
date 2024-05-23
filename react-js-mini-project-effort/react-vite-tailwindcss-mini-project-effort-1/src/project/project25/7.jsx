import React, { useState, useEffect } from 'react';

export default function CustomApp() {
    let [dogImg,setDogImg] = useState(null);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random/3')
        .then((res) => res.json())
        .then((data) => setDogImg(data.message));
    },[])
  return (
    <div>
        {dogImg && dogImg.map((dog) => <img width={'200px'} height={'200px'} src={dog}/>)}
    </div>
  )
}
