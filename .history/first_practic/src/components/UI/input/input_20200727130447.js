import React from 'react';
import classes from './input.module.css';

const Input=(props)=>{
    const inputType=props.type || 'text'
    return(
        <div>
            <label htmlFor=''></label>
            <input type=''/>
        </div>
    )
}

export default Input;