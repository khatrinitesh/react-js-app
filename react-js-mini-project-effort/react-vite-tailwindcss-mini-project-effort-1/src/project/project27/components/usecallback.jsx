import React, { useCallback, useState } from 'react'

export default function UseCallbackApp() {

    const [count,setCount] = useState(0);

    const btnInc = useCallback(() => {
        setCount(c => c + 1)
    },[count])
  return (
    <div>
        <h3>UseCallback</h3>
        <div>
            {count}
            <button onClick={btnInc}>+</button>
        </div>
    </div>
  )
}
