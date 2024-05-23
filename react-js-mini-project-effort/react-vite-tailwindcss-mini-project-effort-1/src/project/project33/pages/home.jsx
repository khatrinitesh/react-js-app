import React,{useEffect,useState,useRef  } from 'react';
import Banner from '../components/banner';
import {data} from '../data/data';

export default function Home() {

    const [title, setTitle] = useState("default title");
    const [darkMode, setDarkMode] = useState(false);
    const titleRef = useRef();

    useEffect(() => {  
        console.log("You will see this log twice for dev mode, once after state change - double effect call.");
        console.log("useEffect");
        document.title = title;
        }, []);
        

    const handleClick = () => setTitle(titleRef.current.value);
    console.log("render");

    const handleCheckboxChange = () => setDarkMode((prev) => !prev);

    const { users } = data;
    let index = 0;

    const [user, setUser] = useState(users[index]);

    useEffect(() => {
        const timer = setInterval(() => {
        setUser(updateUser);
        }, 2000);
        return () => {
        clearInterval(timer);
        };}, []);

        function updateUser() {
            index = index + 1;
            if (index > users.length - 1) {
            index = 0;
        }
        return users[index];
        }
  return (
    <div className='content'>
        <Banner title="Home" desc="Reprehenderit excepteur in laborum reprehenderit magna."/>
        <input ref={titleRef} />
        <button onClick={handleClick}>change title</button>

        <div className={darkMode ? "dark-mode" : ""}>
            <label htmlFor="darkMode">dark mode</label>
            <input
                name="darkMode"
                type="checkbox"
                checked={darkMode}
                onChange={handleCheckboxChange}
            />
            <input ref={titleRef} />
            <button onClick={handleClick}>change title</button>
        </div>

        <div className='card p-2'>
            <p>First Name: {user.nameFirst}</p>
            <p>Last Name: {user.nameLast}</p>
            <p>Age: {user.age}</p>
        </div>
    </div>
  )
}
