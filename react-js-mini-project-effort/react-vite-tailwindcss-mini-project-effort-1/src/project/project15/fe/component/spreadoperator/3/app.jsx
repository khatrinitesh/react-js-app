import React,{useState} from 'react'

export default function SpreadOperator() {

    const [state,setState] = useState({count:0,msg:''});

    const increment = () => {
        setState(prevState => ({
            ...prevState,
            count:prevState.count+1
        }))
    }

    const updateMsg = (newMsg) => {
        setState(prevState => ({
            ...prevState,
            msg:newMsg
        }))
    }


  return (
    <div>
      <p>Count: {state.count}</p>
      <p>Message: {state.msg}</p>
      <button onClick={increment}>Increment</button>
      <input
        type="text"
        value={state.msg}
        onChange={event => updateMsg(event.target.value)}
      />
    </div>
  )
}
