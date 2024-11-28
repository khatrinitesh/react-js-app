import React from 'react';
import { useUserStore } from '../store/userStore';

const UserList = ({users}) => {

  const {deleteUser} = useUserStore();

  const handleDelete = (userId) => {
    deleteUser(userId)
  }
  return (
    <>
      <h2 className='font-bold text-[32px]'>User list</h2>
      <ul className='py-[20px]'>
      {users.map((user) => (
        <li key={user.id} className='border-b pb-10'>
            <p>{user.first_name} - {user.last_name}</p>
            <p>{user.email}</p>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
        </li>
      ))}
      </ul>
    </>
  );
}

export default UserList;
