import React,{useState} from 'react'

export default function HooksApp() {
    const [user,setUser] = useState({
        name:'nitesh',
        city:'mumbai',
        age:34
    });
    console.log(user)

    const handleChange  =(e) => {
        e.preventDefault();
        setUser({
            ...user,
            name:e.target.value
        })
    }


  return (
    <div>
        <form>
            <input type="text" onChange={handleChange} value={user.name} placeholder='Your name'/>
            {user.name}
        </form>
    </div>
  )
}
