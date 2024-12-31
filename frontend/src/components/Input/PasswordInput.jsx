import React, { useState } from 'react'
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa6';

const PassswordInput = ({value, onChange, placeholder}) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };
  return (
    <div>
        <input type={showPassword ? "text" : "password"} value={value} onChange={onChange} placeholder={placeholder || "password"} className='password-input' />
        {showPassword ? (
            <FaRegEye size={22} onClick={() => {togglePassword}} />
        ) : (
            <FaRegEyeSlash size={22} onClick={() => {togglePassword}} />
        )}
    </div>
  )
}

export default PassswordInput