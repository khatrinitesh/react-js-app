import React,{ useState } from 'react'

export default function Example() {

    const [hasActiveSub,setHasActiveSub] = useState(true)
  return (
    <div>
        {hasActiveSub && <>
            <button>upgrade</button>
        <button>cancel plan</button>
        </>}
        
    </div>
  )
}
