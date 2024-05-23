import React,{useCallback,useMemo, useState} from 'react';

const CustomApp = () => {
    // state a manage to the counter 
    const [o1,setO1] = useState(0);
    const [o2,setO2] = useState(0);

    const handleInputChange = useCallback((e,setO) => {
        const val = parseFloat(e.target.value)
        setO(isNaN(val) ? 0 : val)
    });

    const result = useMemo(() => {
        console.log('Calculating result...')
        return o1 + o2 
    },[o1,o2]) // Recalculate when either operand changes


    // rendering the component
  return (
    <div>
       <h2>Calculator</h2>
       <div>
            <label>Operand 1:</label>
            <input type="text" value={o1} onChange={(e) => handleInputChange(e,setO1)} />
       </div>
       <div>
            <label>Operand 2:</label>
            <input type="text" value={o2} onChange={(e) => handleInputChange(e,setO2)} />
       </div>
       {result}
    </div>
  )
}

export default CustomApp
