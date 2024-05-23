import React from 'react';
import {useParams} from 'react-router-dom';

export default function UserProfile() {
    // Use the useParams hook to access URL parameters.
  const { id } = useParams();
  return (
    <div>
        <h1>User Profile</h1>
        <p>User ID: {id}</p>
    </div>
  )
}
