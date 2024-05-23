import React, { useEffect, useState } from 'react'

const OnlineOfflineDetectionApp = () => {
  return (
    <>
      <OnlineStatus/>
    </>
  )
}

export default OnlineOfflineDetectionApp


const OnlineStatus = () => {
    const [isOnline,setIsOnline] = useState(navigator.onLine)

    useEffect(() => {
        const handleOnlineStatusChange = () => {
            setIsOnline(navigator.onLine)
        }

        window.addEventListener('online',handleOnlineStatusChange)
        window.addEventListener('offline',handleOnlineStatusChange)

        return () =>{
            window.addEventListener('online',handleOnlineStatusChange)
            window.addEventListener('offline',handleOnlineStatusChange)
        }
    },[])
    return(
        <>
        <h1>Online status detection</h1>
        <p>{isOnline ? 'online' : 'offline'}</p>
        </>
    )
}