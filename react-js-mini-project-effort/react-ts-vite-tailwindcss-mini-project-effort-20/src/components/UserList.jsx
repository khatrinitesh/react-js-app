import React, { useEffect } from 'react';
import { useUserStore } from '../store/userStore';
import { fetchUsers } from '../api/userService';

const UserList = () => {
  const {users,setUsers,isLoading,setLoading,error,setError} = useUserStore((state) => ({
    users:state.users,
    setUsers:state.setUsers,
    isLoading:state.isLoading,
    setLoading:state.setLoading,
    error:state.error,
    setError:state.setError
  }))

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true)
        const data = await fetchUsers(1);
        setUsers(data)
      } catch (error) {
        setError('failed to fetch users')
      }
      finally{
        setLoading(false)
      }
    }

    getUsers()
  },[setUsers,setLoading,setError])

  if(isLoading){
    return (
      <div>Loading...</div>
    )
  }
  if(error){
    return (
      <div>{error}</div>
    )
  }
  return (
    <>
      
    </>
  );
}

export default UserList;
