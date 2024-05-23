import React, { useState, useEffect } from 'react'

const RestApiCall = () => {
    return (
        <>
            <Fetch />
        </>
    )
}

export default RestApiCall

const Fetch = () => {
    const [photos, setPhotos] = useState([]);

    const baseurl = 'https://jsonplaceholder.typicode.com/photos'

    useEffect(() => {
        fetch(baseurl)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setPhotos(data)
            })
    }, [])

    return (
        <>
            {photos.map((val) => {
                const { title, url, id } = val
                return (
                    <>
                        <img key={id} src={url} alt={title} width={100} />
                    </>
                )
            })}
        </>
    )

}
