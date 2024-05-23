import React from 'react';


const name = 'John';
const age = 30;

export default function TemplateLiterals() {
  return (
    <>
    <p>Hello, my name is {name} and I am {age} years old.</p>
    <p>{`I was born in ${new Date().getFullYear() - age}.`}</p>

    </>
  )
}
