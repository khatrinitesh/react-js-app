import React from 'react'

const CustomExample = () => {
    const user = {
        avatarUrl: 'https://wallpapers.com/images/featured/pattern-4u7ed6koskqhcez1.jpg'
    }
    const name = 'nitesh'
    const age = 34
    const greeting = <p>Hello, {name}! You are {age} years old.</p>;

    const element1 = <img src={user.avatarUrl} />;
    const element2 = <button className="btn">Click me</button>;

    const userresult =
    {
        name: 'Alice',
        age: 28,
        isAdmin: true,
        hobbies: ['Reading', 'Coding', 'Hiking'],
    }

    return (
        <div>
            {element1}
            <br />
            {element2}
            <br />
            {greeting}
            <p>{2 + 2}</p>
            <p>{age > 18 ? 'you are an adult' : 'you are a minor'}</p>
            <hr />
            <h2>User Information</h2>
            {userresult.hobbies.map((hobby, index) => {
                return (
                    <li key={index}>{hobby}</li>

                )
            })}

            {userresult.hobbies.length}

            <hr />

            {/* jsx means javascript in html expressions {2+2*1} */}

            {userresult.hobbies.filter((val) => val !== 'Hiking')}

            {userresult.age > 50 ? (<p>achievement</p>) : (<p>not achievement</p>)}


        </div>
    )
}

export default CustomExample
