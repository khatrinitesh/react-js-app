import React from 'react'

const SpreadOperatorApp = () => {
    const originalArray = [1, 2, 3];
    const copiedArray = [...originalArray];

    const obj1 = { name: 'John' };
    const obj2 = { age: 25 };
    const mergeObj = { ...obj1, ...obj2 }
    console.log(mergeObj)
    return (
        <>
            <ParentComp />
        </>
    )
}

export default SpreadOperatorApp

const ParentComp = () => {
    const props = { name: 'nitesh', age: 34 }
    return (
        <>
            <ChildComp {...props} />
        </>
    )
}
const ChildComp = ({ name, age }) => {
    return (
        <>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </>
    )
}
