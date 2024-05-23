import React, { useRef,useState, useEffect } from 'react';
import Banner from '../components/banner';
import styled from 'styled-components';

export default function About() {
  const [timeLeft, setTimeLeft] = useState(3);
  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    },1000);
    return () => clearInterval(interval.current);
  },[]);

  useEffect(() => {
    if(timeLeft === 0){
      clearInterval(interval.current);
      window.open('https://codingbeautydev.com',"_blank")
    }
  },[timeLeft])
  const styles = {
    container: {
      backgroundColor:'lightblue',
      padding:'20px',
      borderRadius:'5px',
    },
    title:{
      fontSize:'25px',
      fontWeight:'bold',
      color:'darkblue'
    }
  }

  return (
    <>
    <div className='content'>
      <Banner title="About" desc="Lorem Ipsum"/>
      <div>
        The link will open in <b>{timeLeft}</b> second(s)
      </div>
      <div style={styles.container}>
        <div style={styles.title}>Hello, React!</div>
      </div>
      <Button text="Click Btn"/>
    </div>
    </>
  )
}

const Button = ({text}) => {
  const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`
const openInNewTab = (url) => {
  window.open(url,"_blank")
}
  return(
    <>
     <StyledButton onClick={() => openInNewTab('https://www.google.com/')}>{text}</StyledButton>
    </>
  )
}
