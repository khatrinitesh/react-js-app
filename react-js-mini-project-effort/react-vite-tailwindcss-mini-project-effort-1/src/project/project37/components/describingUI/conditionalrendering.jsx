import React from 'react';
import getImageUrl from './utils';
import {people} from '../constants';

export default function ConditionalRendering() {
  return (
    <>
        <PackingList/>
        <hr/>
        <List/>
    </>
  )
}

function List(){
    const listItems = people.map((person) => {
        return(
            <li key={person.id}>
                <img src={getImageUrl(person)} alt={person.name}/>
                <p>
                    <b>{person.name}:</b>
                    {' ' + person.profession + ' '}
                    known for {person.accomplishment}
                </p>
            </li>
        )
    })
    return(
        <article>
            <h1>List Item</h1>
            <ul>{listItems}</ul>
        </article>
    )
}

function PackingList(){
    return(
        <>
         <section>
            <h1>Packing List</h1>
            <ul>
                <li>
                    <Item isPacked={true} name="Nitesh khatri"/>
                </li>
                <li>
                    <Item isPacked={false} name="Sameet khatri"/>
                </li>
                <li>
                    <Item isPacked={true} name="Arvind khatri"/>
                </li>
            </ul>
         </section>
        </>
    )
}

function Item({name,isPacked}){
    return(
        <>
         <li className='item'>
            {name} {isPacked && '✓'}
         </li>
        </>
    )
}



