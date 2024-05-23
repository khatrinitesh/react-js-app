import React,{useState} from 'react'

const CustomSelectBox = () => {
    const [selectedOption, setSelectedOption] = useState('option1');

    const handleSelectChange = (value) => {
        setSelectedOption(value);
      };

      const selectOptions = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ];

  return (
    <>
      <CustomSelect options={selectOptions} value={selectedOption} onChange={handleSelectChange}/>
    </>
  )
}

export default CustomSelectBox

const CustomSelect = ({options,value,onChange}) => {
    const handleSelectChange = (e) => {
        onChange(e.target.value);
      };
    return(
        <>
         <select value={value} onChange={handleSelectChange}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                {option.label}
                </option>
            ))}
        </select>
        </>
    )
}
