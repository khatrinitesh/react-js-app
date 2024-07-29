import React, { useEffect, useState } from 'react'

const RespondigEvents = () => {
  return (
    <>
     <CustomEventExample/> 
    </>
  )
}

export default RespondigEvents

const CustomEventExample  =() => {
    const handleCustomEvents = (event) => {
        console.log('custom data events',event.detail);
    }

    const tiggerCustomEvents = () => {
        const event = new CustomEvent('mycustomevent',{
            detail:{
                message:'hello world'
            }
        });
        window.dispatchEvent(event);
    };

  useEffect(() => {
    window.addEventListener('mycustomevent',handleCustomEvents)
    return () => {
        window.removeEventListener('mycustomevent',handleCustomEvents)
    }
  })
    return(
        <>
        <button onClick={tiggerCustomEvents}>Trigger Custom Event</button>
        </>
    )
}


const MouseEventExample = () => {

    const handleMouseEnter = (e) => {
        console.log('mouse enter')
    }
    const handleMouseLeave = (e) => {
        console.log('mouse leave')
    }
    return(
        <>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{width:'100px',height:'100px',background:'red'}}>
        hover over me
        </div>
        </>
    )
}

const HandlingKeyboardEvents = () => {
    const handleKeyDown = (e) => {
        console.log(`key pressed: ${e.key}`);
    }
    return(
        <>
        <input type="text" onKeyDown={handleKeyDown} placeholder='Type something...' />
        </>
    )
}

const HandlingFormEvents = () => {
    const [inputVal,setInputVal] = useState('');

    const handleChange = (e) => {
        setInputVal(e.target.value)
    }

    const handleSubmitValue = () => {
        event.preventDefault();
        console.log(`submitted: ${inputVal}`)
    }
    return(
        <>
        <form onSubmit={handleSubmitValue}>
         <input type="text" value={inputVal} onChange={handleChange} />
         <br/>
         {inputVal}
         <button type='submit'>Submit</button>
         </form>
        </>
    )
}


const HandlingButtonClicks = () => {
    const [count,setCount] = useState(0);

    const handleClick = () => {
        setCount(count +1 )
    }
    return(
        <>
        <button onClick={handleClick}>Click</button>
        <br/>
        {count}
        </>
    )
}