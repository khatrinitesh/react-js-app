import React from 'react';
import { Link } from 'react-router-dom';

const ExampleList = ({examples,onDelete}) => { 
  return (
    <div>
    <h2 className='text-[red] text-[30px]'>Product List</h2>
      <ul>
        {examples.map((example) => {
            return(
                <li key={example.id}>
                    <Link to={`/example/${example.id}`}>{example.name}</Link>
                    <br />
                    <button onClick={() => onDelete(example.id)}>Delete</button>
                </li>
            )
        })}
      </ul>
    </div>
  )
}

export default ExampleList
