import React, { useState } from 'react';

const CustomApp = () => {
    // declare a state variable named 'count' with an initial value of 0 
    const [count, setCount] = useState(0)

    const btnClick = () => {
        setCount(c => c + 1)
    }


    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={btnClick}>Click count</button>

            <hr />
            <Example />
        </div>
    )
}

export default CustomApp

// function Example() {
//     // declare a variable using let
//     let myVariable = 'mutuable variable'
//     return (
//         <>
//             <p>{myVariable}</p>
//         </>
//     )
// }


class Example extends Component() {
    constructor(props) {
        super(props);
        // declare state variable within the constructor
        this.state = {
            myVariable: 'nitesh khatri'
        }
    }
    render() {
        return (
            <>{this.state.myVariable}</>
        )
    }
}
