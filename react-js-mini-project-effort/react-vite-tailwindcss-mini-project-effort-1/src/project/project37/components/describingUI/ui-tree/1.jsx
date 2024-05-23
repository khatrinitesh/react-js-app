import React, { useState } from 'react';
import { inspirations } from '../../constants';

export default function TreeApp() {
  return (
    <>
        <FancyText title text="Get Inspired App"/>
        <Inspiration>
            <Copyright year={2023}/>
        </Inspiration>
        <Toolbar onPlayMovie={() => alert('PlayMovie')}  onUploadImg={() => alert('onUploadImg')}/>
    </>
  )
}

function Toolbar({onPlayMovie,onUploadImg}){
    return(
        <>
         <Button onClick={onPlayMovie}>Play Movie</Button>
         <Button onClick={onUploadImg}>Upload Image</Button>
        </>
    )
}

function Button({children,onClick}){
    return(
        <>
         <button onClick={onClick}>{children}</button>
        </>
    )
}

function Inspiration({children}){
    const [index,setIndex] = useState(0);
    const inspiration = inspirations[index];
    const next = () => setIndex((index + 1) % inspirations.length)

    return(
        <>
        <p>Your inspirational {inspiration.type} is:</p>
        {inspiration.type === 'quote' ? <FancyText text={inspiration.value} /> : <Color value={inspiration.value} />}
        <button onClick={next}>Inspire me again</button>
        {children}
        </>
    )
}

function Color({value}){
    return(
        <>
         <div className="colorBox" style={{backgroundColor:value}}></div>
        </>
    )
}

function Copyright({year}){
    return(
        <>
         <p className='small'>©️ {year}</p>
        </>
    )
}

function FancyText({title,text}){
    return  title ? <h1 className='fancy title'>{text}</h1> : <h3 className='fancy cursive'>{text}</h3>
}


