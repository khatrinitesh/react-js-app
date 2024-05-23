import React, { useState } from 'react';
import { FaEyeSlash,FaEye } from "react-icons/fa";

export default function CustomApp() {
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }

    const togglePassword = () => {
        if(passwordType === 'password'){
            setPasswordType('text')
            return;
        }
        setPasswordType('password')
    }

  return (
    <div>
        <div className="col-sm-3">
            <div className="input-group my-4 mx-4">
                <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" class="form-control" placeholder="Password" />
                <div className="input-group-btn">
                    <button className="btn btn-outline-primary" onClick={togglePassword}>
                    { passwordType==="password"? <FaEye /> :<FaEyeSlash/> }
                    </button>
                </div>
            </div>
            
        </div>
    </div>
  )
}
