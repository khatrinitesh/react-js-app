import React, { useId, useState } from 'react';

const UseIdComp = () => {

    const id = useId();

    const [user, setUser] = useState({
      name: "",
      surname: "",
      address: ""
    });
  
    const handleInputChange = (field) => {
      return (e) => {
        setUser((prev) => ({
          ...prev,
          [field]: e.target.value
        }));
      };
    };
  return (
    <>
    <form>
        <label htmlFor={`${id}-name1`}>Name:</label>
        <input type="text" value={`${id}-name1`} />
        <label htmlFor={`${id}-name2`}>Name:</label>
        <input type="text" value={`${id}-name2`} />
        <label htmlFor={`${id}-name3`}>Name:</label>
        <input type="text" value={`${id}-name3`} />
    </form> 
    <hr/>
    <input value={user.name} onChange={handleInputChange("name")} />
      <input value={user.surname} onChange={handleInputChange("surname")} />
      <input value={user.address} onChange={handleInputChange("address")} />

      {JSON.stringify(user)}
    </>
  );
}

export default UseIdComp;
