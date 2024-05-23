import React,{useState, useEffect} from "react";

export default function CallingRestAPIExample() {
    const [imgURL, setImgURL] = useState(false);

    useEffect(() => {
        fetch('https://source.unsplash.com/random/600x800')
        .then(res => setImgURL(res.url))
        .then
    }, [])

  return (
    <>
         <h1>React API Call</h1>
        {imgURL && <img src={imgURL}/>}
    </>
  )
}
