import React,{useState,useEffect} from 'react';

const CustomApp = () => {
    const style = {
        height:'100px',
        backgroundColor:'red',
        color:'#fff',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }
    const user = {
        name: 'Jane Doe',
        age: 20,
        isLoggedIn: true,
    };
    
    const status = {
        message: 'You have new notifications.',
        isAdmin: true,
    };
    
  return (
    <>
      <UserDashboard user={user} status={status}/>
      <h2 style={style}>head</h2>
    </>
  )
}

export default CustomApp

function UserDashboard({user,status}){
    // destructing user and status from props 
    const {name,age,isLogged} = user 
    const {message,isAdmin} = status; 

    if(!isLogged){
        return <ErrorMsg/>
    }

    return(
        <>
         <WelcomeMessage name={name}/>
         {message && <StatusMessage message={message}/>}
         {age > 18 && isAdmin && <AdminPanel/>}
         {age < 18 && <p>Underage users cannot access the admin panel.</p>}
        </>
    )
}

// mock components for demonstration 
const WelcomeMessage = ({name})  => {
    return(
        <>
         <h1>Welcome, {name}</h1>
        </>
    )
}

const AdminPanel = () => {
    return(
        <>
         <div>Admin Panel</div>
        </>
    )
}

const StatusMessage = ({message}) => {
    <> 
    <p>Status: {message}</p>
    </>
}

const ErrorMsg = () => {
    return(
        <>
        <p>Access Denied. Please log in.</p>
        </>
    )
}