import React,{useState} from 'react';
import styled from "styled-components";

export default function InlineStylingApp() {
    const cardStyles = {
        container: {
          display: "flex",
          height: 100,
          width: 400,
          boxShadow: "0 0 3px 2px #cec7c759",
          alignItems: "center",
          padding: 20,
          borderRadius: 20,
        },
        profilePicture: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "orange",
          color: "white",
          height: 20,
          width: 20,
          borderRadius: "50%",
          padding: 10,
          fontWeight: "bold",
        },
        bio: {
          marginLeft: 10,
        },
        userName: {
          fontWeight: "bold",
        },
      };

      const style = {
        color: 'red',
        fontSize: 200
      };

      const completed  =true

      const styles = {
        popup:{
          display:"block",
          opacity:"1"
        }
      };

      const objectStyle = {
        color: "white",
        backgroundColor: "#ac5353",
        padding: "10px"
      };
      const objectStyleValid = {
        color: "Red",
        backgroundColor: "#bc3553",
        padding: "10px"
      };

      const [open,setOpen] = useState(false)
      const [open1,setOpen1] = useState(false)
      const styles1 = {
        popup:{
            display: open ? "flex" : "none",
            opacity: open ? "1" : "0",
        }
      }

      const styles2 = {
        popup:{
            display: open1 ? "flex" : "none",
            opacity: open1 ? "1" : "0",
        }
      }
  return (
    <>
    <div style={cardStyles.container}>
        <span style={cardStyles.profilePicture}>D</span>
        <div style={cardStyles.bio}>
          <p style={cardStyles.userName}>Desmond Nyamador</p>
          <p>I just learned an easy way to style React Components</p>
        </div>
      </div>
      {/* <h2 style={style}> Have a good and productive day!</h2> */}
      <p style={{color:completed ? 'red' : 'green'}}>Color</p>
      <p style={{textDecoration:completed ? 'line-through' : 'none'}}>Text decoration</p>
      <p style={{fontWeight:completed ? 'bold' :'normal'}}>Font Weight</p>
      <button className="open_button">Open!</button>
      <div className="popup" style={styles.popup}>
        <h1>This is a popup!</h1>
        <button className="close_button">Close!</button>
        <h2 style={objectStyle}>Object Style</h2>
        <h3 style={objectStyleValid}>Object style valid</h3>
      </div>
      <button className="open_button" onClick={()=>{setOpen(true)}}>Open!</button>
      <div className="popup" style={styles1.popup}>
        <h1>This is a popup!</h1>
        <button className="close_button" onClick={()=>{setOpen(false)}}>Close!</button>
      </div>
      <hr/>
      <button className="open_button" onClick={()=>{setOpen1(true)}}>Open 2!</button>
      <div className="popup" style={styles2.popup}>
        <h1>This is a popup 2!</h1>
        <button className="close_button" onClick={()=>{setOpen1(false)}}>Close 2!</button>
      </div>
    </>
  )
}
