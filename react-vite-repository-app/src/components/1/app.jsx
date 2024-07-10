import React from "react";
import {Link} from 'react-router-dom';

const CustomApp = () => {
  const users = [
    {
      name: "John Doe",
      email: "john@example.com",
      age: 30,
    },
    {
      name: "Jane Doe",
      email: "jane@example.com",
      age: 25,
    },
    {
      name: "Bob Smith",
      email: "bob@example.com",
      age: 40,
    },
  ];

  return (
    <>
    <div className="container mx-auto">
        <h1 className="font-bold text-[30px] mb-3">User Details</h1>
        {users.map((user, index) => (
          <UserCard key={index} {...user} />
        ))}
      </div>
    </>
  );
};

export default CustomApp;

const UserCard = ({ name, email, age }) => {
  return (
    <>
      <div className="user-card card shadow p-5 mb-5 rounded-[10px]">
        <h2 className="font-bold text-[20px]">{name}</h2>
        <p>
          <strong>Email:</strong> <Link to={`mailto:${email}`}>{email}</Link>
        </p>
        <p>
          <strong>Age:</strong> {age}
        </p>
      </div>
    </>
  );
};
