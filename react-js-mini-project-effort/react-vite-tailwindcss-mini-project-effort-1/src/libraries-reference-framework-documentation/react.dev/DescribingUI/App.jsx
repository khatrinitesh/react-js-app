import React from 'react'

const CustomApp = () => {
    // const data = [
    //     { id: 1, name: 'sachin', guest: 1 },
    //     { id: 2, name: 'sourav', guest: 2 },
    //     { id: 3, name: 'rahul', guest: 3 }
    // ]

    // const data = [
    //     { name: 'test1', isPacked: true },
    //     { name: 'test2', isPacked: false },
    //     { name: 'test3', isPacked: false },
    // ]

    const people = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
        accomplishment: 'spaceflight calculations',
        imageId: 'MK3eW3A'
    }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
        accomplishment: 'discovery of Arctic ozone hole',
        imageId: 'mynHUSa'
    }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
        accomplishment: 'electromagnetism theory',
        imageId: 'bE7W1ji'
    }, {
        id: 3,
        name: 'Percy Lavon Julian',
        profession: 'chemist',
        accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
        imageId: 'IOjWm71'
    }, {
        id: 4,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
        accomplishment: 'white dwarf star mass calculations',
        imageId: 'lrWQx8l'
    }];
    const chemists = people.filter(val => val.profession === 'chemist')

    const everyoneElse = people.filter(val => val.profession !== 'chemist')
    return (
        <>
            {/* {data.map((val, index) => {
                return (
                    <Guest key={index}>
                        <h3>{val.name}</h3>
                        <p>{val.guest}</p>
                    </Guest>
                )
            })} */}
            {/* <Avatar imageId='1bX5QH6' size={100} name="Lin Lanying" /> */}
            {/* <Card>
                <h3>Head title</h3>
                <p>Ea est commodo culpa id voluptate Lorem culpa ea laborum reprehenderit. Occaecat excepteur irure ea nulla et in excepteur do nulla qui minim. Tempor veniam voluptate id commodo elit nostrud et ullamco eiusmod. Nulla est aliquip laborum est cillum veniam incididunt. Sunt duis do reprehenderit anim velit sint ullamco ut exercitation pariatur labore do.

                    Aliquip est officia sunt enim incididunt labore esse enim id mollit. Incididunt id fugiat ut eiusmod veniam culpa. Amet sunt aliquip aliquip cillum consequat amet nostrud labore. Reprehenderit do in duis ipsum et cupidatat tempor. Tempor amet amet consectetur ut incididunt anim fugiat amet laborum eu est in.</p>
            </Card> */}
            {/* {data.map((val, index) => {
                const { name, isPacked } = val
                return (
                    <Item key={index} name={name} isPacked={isPacked} />
                )
            })} */}
            {/* <Item name='nitesh' isPacked={true} /> */}
            {/* <List /> */}
            Data map
            {chemists.map(val => <div>{val.name}</div>)}
            <hr />
            {everyoneElse.map(val => <div>{val.name}</div>)}
            <br />
            {/* <Recipe drinks={2} /> */}
            <Cup guest={1} />
            <Cup guest={2} />
            <Cup guest={3} />
            <Cup guest={4} />


        </>
    )
}

function Cup({ guest }) {
    return (
        <>
            <br />
            Tea #{guest}
        </>
    )
}

// function Recipe({ drinks }) {
//     return (
//         <>
//             <h3>headTitle - {drinks}</h3>
//             <h3>calculator - {5 + 5 * drinks}</h3>
//         </>
//     )
// }

// const people = [{
//     id: 0,
//     name: 'Creola Katherine Johnson',
//     profession: 'mathematician',
//     accomplishment: 'spaceflight calculations',
//     imageId: 'MK3eW3A'
// }, {
//     id: 1,
//     name: 'Mario José Molina-Pasquel Henríquez',
//     profession: 'chemist',
//     accomplishment: 'discovery of Arctic ozone hole',
//     imageId: 'mynHUSa'
// }, {
//     id: 2,
//     name: 'Mohammad Abdus Salam',
//     profession: 'physicist',
//     accomplishment: 'electromagnetism theory',
//     imageId: 'bE7W1ji'
// }, {
//     id: 3,
//     name: 'Percy Lavon Julian',
//     profession: 'chemist',
//     accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
//     imageId: 'IOjWm71'
// }, {
//     id: 4,
//     name: 'Subrahmanyan Chandrasekhar',
//     profession: 'astrophysicist',
//     accomplishment: 'white dwarf star mass calculations',
//     imageId: 'lrWQx8l'
// }];


function List() {
    const people = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
        accomplishment: 'spaceflight calculations',
        imageId: 'MK3eW3A'
    }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
        accomplishment: 'discovery of Arctic ozone hole',
        imageId: 'mynHUSa'
    }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
        accomplishment: 'electromagnetism theory',
        imageId: 'bE7W1ji'
    }, {
        id: 3,
        name: 'Percy Lavon Julian',
        profession: 'chemist',
        accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
        imageId: 'IOjWm71'
    }, {
        id: 4,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
        accomplishment: 'white dwarf star mass calculations',
        imageId: 'lrWQx8l'
    }];

    const chemistadsadad = people.filter((person) => person.profession === 'chemist')

    const resultMap = chemistadsadad.map(person =>
        <li>
            <div>{person.name}</div>
        </li>
    );
    return <ul>{resultMap}</ul>
}


export default CustomApp

function Item({ name, isPacked }) {
    if (isPacked) {
        return (
            <li>{name} ***</li>
        )
    }
    else {
        return (
            <li>{name}</li>
        )
    }
}

// function Item({ name, isPacked }) {
//     return (
//         <li>
//             {name} {isPacked && '---'}

//         </li>
//     )
// }

// function Card({ children }) {
//     return (
//         <div className='card'>
//             {children}
//         </div>
//     )
// }

// const person = {
//     name: 'Gregorio Y. Zara',
//     theme: {
//         backgroundColor: 'black',
//         color: 'pink'
//     }
// };

// function Avatar({ name, imageId, size }) {
//     return (
//         <>
//             <img src="https://i.imgur.com/1bX5QH6.jpg" alt={name} width={size} height={size} id={imageId} />
//         </>
//     )
// }

// function ToDoList() {
//     return (
//         <div style={person.theme}>
//             <h3>{person.name}</h3>
//         </div>
//     )
// }

// function ToDoList() {

//     const listStyle = {
//         background: 'red',
//         color: 'white'
//     }
//     return (
//         <ul style={listStyle}>
//             <li>Excepteur exercitation et amet do dolore anim laborum nostrud nulla incididunt in quis officia. Nulla qui velit qui ex. Adipisicing eu eiusmod consequat laborum adipisicing proident anim et laboris excepteur occaecat exercitation incididunt. Aliquip labore Lorem incididunt nostrud laborum adipisicing aliquip Lorem nostrud quis sunt magna cillum. Duis ut est irure adipisicing ipsum anim eu in dolor dolore ullamco. Do laborum qui anim ullamco irure eu officia.

//                 Ad ea mollit commodo laborum ea nostrud nostrud voluptate eu ut magna veniam. Exercitation sunt consequat occaecat adipisicing dolore aliquip aliquip enim aute cupidatat minim. Reprehenderit minim qui eiusmod officia deserunt anim velit aliqua aliqua. Tempor minim in exercitation laboris occaecat occaecat ut nulla exercitation excepteur cillum sunt.</li>
//             <li>Excepteur exercitation et amet do dolore anim laborum nostrud nulla incididunt in quis officia. Nulla qui velit qui ex. Adipisicing eu eiusmod consequat laborum adipisicing proident anim et laboris excepteur occaecat exercitation incididunt. Aliquip labore Lorem incididunt nostrud laborum adipisicing aliquip Lorem nostrud quis sunt magna cillum. Duis ut est irure adipisicing ipsum anim eu in dolor dolore ullamco. Do laborum qui anim ullamco irure eu officia.

//                 Ad ea mollit commodo laborum ea nostrud nostrud voluptate eu ut magna veniam. Exercitation sunt consequat occaecat adipisicing dolore aliquip aliquip enim aute cupidatat minim. Reprehenderit minim qui eiusmod officia deserunt anim velit aliqua aliqua. Tempor minim in exercitation laboris occaecat occaecat ut nulla exercitation excepteur cillum sunt.</li>
//             <li>Excepteur exercitation et amet do dolore anim laborum nostrud nulla incididunt in quis officia. Nulla qui velit qui ex. Adipisicing eu eiusmod consequat laborum adipisicing proident anim et laboris excepteur occaecat exercitation incididunt. Aliquip labore Lorem incididunt nostrud laborum adipisicing aliquip Lorem nostrud quis sunt magna cillum. Duis ut est irure adipisicing ipsum anim eu in dolor dolore ullamco. Do laborum qui anim ullamco irure eu officia.

//                 Ad ea mollit commodo laborum ea nostrud nostrud voluptate eu ut magna veniam. Exercitation sunt consequat occaecat adipisicing dolore aliquip aliquip enim aute cupidatat minim. Reprehenderit minim qui eiusmod officia deserunt anim velit aliqua aliqua. Tempor minim in exercitation laboris occaecat occaecat ut nulla exercitation excepteur cillum sunt.</li>
//         </ul>
//     )
// }

// function Avatar() {
//     const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
//     const description = 'dsadadsadd'
//     return (
//         <>
//             <img src={avatar} alt={description} />
//         </>
//     )
// }

// function Guest({ guest, name, children }) {
//     return (
//         <div className='border-b-[1px] border-solid border-black'>
//             {children}
//             <h1>{name}</h1>
//             <h2>Tea cup for guest #{guest}</h2>
//         </div>
//     )
// }

// let guest = 0;
// function Cup() {
//     guest = guest + 1
//     return (
//         <>
//             <h2>Tea cup for guest #{guest}</h2>
//         </>
//     )
// }

// const ListItems = () => {
//     return (
//         <>
//             {people.map((val, index) => {
//                 return (
//                     <li key={index}>
//                         <h3>{val.name}</h3>
//                         <p>{val.profession}</p>
//                         <p>{val.accomplishment}</p>
//                         <p>{val.imageId}</p>
//                     </li>
//                 )
//             })}
//         </>
//     )
// }

// export const people = [
//     {
//         id: 0,
//         name: 'Creola Katherine Johnson',
//         profession: 'mathematician',
//         accomplishment: 'spaceflight calculations',
//         imageId: 'MK3eW3A'
//     }, {
//         id: 1,
//         name: 'Mario José Molina-Pasquel Henríquez',
//         profession: 'chemist',
//         accomplishment: 'discovery of Arctic ozone hole',
//         imageId: 'mynHUSa'
//     }, {
//         id: 2,
//         name: 'Mohammad Abdus Salam',
//         profession: 'physicist',
//         accomplishment: 'electromagnetism theory',
//         imageId: 'bE7W1ji'
//     }, {
//         id: 3,
//         name: 'Percy Lavon Julian',
//         profession: 'chemist',
//         accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
//         imageId: 'IOjWm71'
//     }, {
//         id: 4,
//         name: 'Subrahmanyan Chandrasekhar',
//         profession: 'astrophysicist',
//         accomplishment: 'white dwarf star mass calculations',
//         imageId: 'lrWQx8l'
//     }
// ]

// function Item({ name, isPacked }) {
//     return (
//         <li className='item'>
//             {name} {isPacked && 'true'}
//         </li>
//     )
// }

// function PackingList() {
//     return (
//         <>
//             <ul>
//                 <Item isPacked={true} name="nitesh" />
//                 <Item isPacked={false} name="sameet" />
//                 <Item isPacked={false} name="mom" />
//                 <Item isPacked={true} name="daddy" />
//                 <Item isPacked={false} name="bhabhi" />
//             </ul>
//         </>
//     )
// }

// const person = {
//     name: 'Gregorio Y. Zara',
//     theme: {
//         backgroundColor: 'black',
//         color: 'pink'
//     }
// };

// function ToDoList() {
//     return (
//         <div style={person.theme}>
//             <h2>{person.name}</h2>
//             <img
//                 className="avatar"
//                 src="https://i.imgur.com/7vQD0fPs.jpg"
//                 alt="Gregorio Y. Zara"
//             />
//             <ul>
//                 <li>Improve the videophone</li>
//                 <li>Prepare aeronautics lectures</li>
//                 <li>Work on the alcohol-fuelled engine</li>
//             </ul>
//         </div>
//     )
// }



// function ToDoList() {
//     return (
//         <>
//             <h1 className='font-bold bg-black text-white text-[30px]'>Hedy Lamarr's Todos</h1>
//             <img
//                 src="https://i.imgur.com/yXOvdOSs.jpg"
//                 alt="Hedy Lamarr"
//                 className="photo"
//             />
//             <ul>
//                 <li>Invent new traffic lights</li>
//                 <li>Rehearse a movie scene</li>
//                 <li>Improve spectrum technology</li>
//             </ul>
//         </>
//     )
// }

// function Profile() {
//     return (
//         <>
//             <img
//                 src="https://i.imgur.com/MK3eW3As.jpg"
//                 alt="Katherine Johnson"
//             />
//         </>
//     )
// }
