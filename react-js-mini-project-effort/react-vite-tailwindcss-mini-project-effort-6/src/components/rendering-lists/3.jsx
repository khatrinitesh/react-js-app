import React,{useState,useEffect} from 'react'

const RenderingLists = () => {
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            setUsers(data);
            setLoading(false)
        })
        .catch(error => {
            console.error('error fetching data',error)
            setLoading(false)
        })
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
                <li key={user.id} className='border-b pb-2 mb-2'>
                    <strong>{user.title}</strong>
                    
                    <br/> {user.body} body.
                </li>
            ))}
         </ul>
        </>
    )
}