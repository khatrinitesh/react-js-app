import React, { useState, useMemo } from "react";
import { UserLoginFormConfig } from "./config";

export default function Example() {
    const [state, setState] = useState({
        name: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('date submitted',state);
    }

    const handleOnChange = (e) => {
        setState((prevState) => ({
            ...prevState,
            [name]:e.target.value
        }));
    };

  return (
    <>
    <form onSubmit={handleSubmit}>
        {UserLoginFormConfig.map(obj => {
        return <CustomElementRenderer obj={obj} onChangeFunc={handleOnChange}/>
    })}
    </form>
    <span><h3>Data submitted: </h3>{JSON.stringify(formData)}</span>
    </>
  )
}
