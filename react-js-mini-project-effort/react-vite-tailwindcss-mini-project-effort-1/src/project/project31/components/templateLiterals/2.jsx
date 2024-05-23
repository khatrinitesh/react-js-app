import React,{useState} from 'react';

export default function TemplateLiterals() {
    const [name, setName] = useState('John');
    const [age, setAge] = useState(30);
  return (
    <>
    <p>Hello, my name is {name} and I am {age} years old.</p>
    <p>{`I was born in ${new Date().getFullYear() - age}.`}</p>
    </>
  )
}
