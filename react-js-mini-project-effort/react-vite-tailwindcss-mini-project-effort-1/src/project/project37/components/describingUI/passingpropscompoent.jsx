import React,{useState} from 'react';
import getImageUrl from './utils';

export default function PassingPropsCompoent() {
  return (
    <>
        <Card>
             <Avatar size={100} person={{name:'nitesh khatri',imageId:'YfeOqp2'}}/>
        </Card>
    </>
  )
}

function Avatar({person,size}){
    return(
        <>
            <img className='avatar' src={getImageUrl(person)} alt={person.name} width={size} height={size}/>
        </> 
    )
}


function Card({children}){
    return(
        <>
         <div className='card'>
            {children}
         </div>
        </>
    )
}