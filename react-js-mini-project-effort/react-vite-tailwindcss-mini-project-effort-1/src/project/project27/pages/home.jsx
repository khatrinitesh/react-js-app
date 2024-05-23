import React from 'react';
import {Link} from 'react-router-dom';
import UseCallbackApp from '../components/usecallback';

export default function Home() {
  return (
    <div>
      <h3>Home</h3>
      <UseCallbackApp/>
      <Link to="/user/homeprofile">View User Profile</Link>
    </div>
  )
}
