import React,{useState} from 'react'

export default function HooksApp() {

  const [user,setUser] = useState({
    name:'nitesh',
    city:'mumbai',
    age:34
  })
  console.log(user)

 const handleChange = (e) => {
  setUser({
    ...user,
    [e.target.name]:e.target.value,
  })
 }
  return (
    <div>
      <form>
        <div>
          <input placeholder='Your name' type="text" name="name" value={user.name} onChange={handleChange}/>
        </div>
        <div>
          <input placeholder='Your name' type="text" name="city" value={user.city} onChange={handleChange}/>
        </div>
        <div>
          <input placeholder='Your name' type="text" name="age" value={user.age} onChange={handleChange}/>
        </div>
      </form>      
      {user.name} - {user.city} - {user.age}
    </div>
  )
}
