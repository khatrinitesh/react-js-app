import React,{useState,useEffect} from 'react';

export default function CustomApp() {

    const [formdaa,setForm] = useState({
        fName:'',
        lName:'',
        email:'',
        pwd:'',
        address:'',
        zipcodes:'',
    });
    console.log(formdaa)

    const handleChange = e => {
        setForm({
            ...formdaa,
            [e.target.name]:e.target.value
        })
    }
  return (
    <div>
        <form >
            <div>
                <input type="text" name='fName' placeholder='first name' value={formdaa.fName} onChange={handleChange}/>
            </div>
            <div>
                <input type="text" name='lName' placeholder='last name' value={formdaa.lName} onChange={handleChange}/>
            </div>
            <div>
                <input type="text" name='email' placeholder='email' value={formdaa.email} onChange={handleChange}/>
            </div>
            <div>
                <input type="text" name='pwd' placeholder='password' value={formdaa.pwd} onChange={handleChange}/>
            </div>
            <div>
                <input type="text" name='address' placeholder='address' value={formdaa.address} onChange={handleChange}/>
            </div>
            <div>
                <input type="text" name='zipcodes' placeholder='zipcodes' value={formdaa.zipcodes} onChange={handleChange}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
