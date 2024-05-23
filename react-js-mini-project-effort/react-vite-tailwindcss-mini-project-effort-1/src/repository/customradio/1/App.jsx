import React,{useState} from 'react'

const CustomRadioApp = () => {
    const [selectedOption, setSelectedOption] = useState('option1');

    const handleRadioButtonChange = (e) => {
        setSelectedOption(e.target.value);
      };
  return (
    <>
      <CustomRadioBtn value="option1" label="option1" checked={selectedOption === 'option1'} onChange={handleRadioButtonChange}/>
      <CustomRadioBtn value="option2" label="option2" checked={selectedOption === 'option2'} onChange={handleRadioButtonChange}/>
    </>
  )
}

export default CustomRadioApp

const CustomRadioBtn = ({value,label,checked,onChange}) => {
    return(
        <>
        <label>
            <input type="radio" value={value} checked={checked} onChange={onChange}/>
            {label}
        </label>
        </>
    )
}
