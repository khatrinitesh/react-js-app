import React from 'react';
import Banner from '../components/banner';

const nestedData = [
    {
      id: 1,
      name: 'Parent 1',
      children: [
        { id: 101, name: 'Child 1.1' },
        { id: 102, name: 'Child 1.2' },
      ],
    },
    {
      id: 2,
      name: 'Parent 2',
      children: [
        { id: 201, name: 'Child 2.1' },
        { id: 202, name: 'Child 2.2' },
      ],
    },
    // Add more parents and children as needed
  ];

export default function Home() {
  return (
    <div className='content'>
      <Banner title="Home" desc="Lorem Ipsum"/>
      {nestedData.map((parent) => (
        <div key={parent.id}>
          <h2>{parent.name}</h2>
          <ul>
            {parent.children.map((child) => (
              <li key={child.id}>{child.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
