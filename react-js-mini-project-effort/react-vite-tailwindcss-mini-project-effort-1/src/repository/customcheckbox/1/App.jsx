import React,{useState} from 'react'

const CheckboxApp = () => {

    const [isChecked,setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked)
        console.log(isChecked)
    }
  return (
    <>
      <input type="checkbox" checked={isChecked} onChange={handleChange}/>
    </>
  )
}

export default CheckboxApp


