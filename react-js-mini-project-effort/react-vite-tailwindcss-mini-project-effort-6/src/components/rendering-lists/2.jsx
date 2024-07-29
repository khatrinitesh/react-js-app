import React,{useState,useEffect} from 'react'

const RenderingLists = () => {
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            const fetchedUsers = [
                {id:1,name:'nitesh',age:34},
                {id:2,name:'sameet',age:42},
                {id:3,name:'manisha',age:44},
                {id:4,name:'urvashi',age:66},
                {id:5,name:'arvind',age:68},
            ];
            setUsers(fetchedUsers)
            setLoading(false);
        },2000);
    },[]);
  return (
    <div>
      {loading ? (<><p>Loading...</p></>) : (<><UserList users={users}/></>)}
    </div>
  )
}

export default RenderingLists

const UserList = ({users})  => {
    return(
        <>
         <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} is {user.age} years old.
                </li>
            ))}
         </ul>
        </>
    )
}