import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const ServiceList = ({services,onDelete}) => {

  
  return (
    <div>
      {services.map((val) => {
        const {name,email,username,id} = val
        return(
            <div key={id}>
                <h3 className='text-[red]'><strong>Name:</strong> {name}</h3>
                <h3 className='text-[blue]'><strong>Email:</strong> {email}</h3>
                <h3 className='text-[orange]'><strong>Username:</strong> {username}</h3>
                <Link to={`/servicelist/${id}`}>{name}</Link>
                <br />
                <button onClick={() => onDelete(id)}>Delete</button>
            </div>
        )
      })}
    </div>
  )
}

export default ServiceList
