import React, { useEffect } from 'react';
import Banner from './../components/Banner';
import UserList from '../components/UserList';
import { useUserStore } from '../store/userStore';

const Home = () => {

  const {users,loading,error,fetchUsers} = useUserStore();

  useEffect(() => {
    fetchUsers(1); // Load users for the first page
  },[fetchUsers])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='content'>
      <Banner title="Home" desc="Eiusmod exercitation ex qui adipisicing pariatur ullamco nisi quis magna quis nisi."/>
      <UserList users={users} />
    </div>
  );
}

export default Home;
