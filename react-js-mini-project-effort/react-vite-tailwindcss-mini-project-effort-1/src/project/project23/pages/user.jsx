import React from 'react';
import {useParams} from 'react-router-dom';

export default function User(props) {

    const {id,name} = useParams();
  return (
    <div>
      <h1>user no. {id}</h1>
      <h1>user name {name}</h1>
    </div>
  )
}