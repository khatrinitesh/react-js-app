import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div>
      <h3>Contact</h3>
      <Link to="/user/contactprofile">View User Profile</Link>
    </div>
  )
}
