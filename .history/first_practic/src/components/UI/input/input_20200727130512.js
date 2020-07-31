import React from 'react';
import classes from './input.module.css';

const Input=(props)=>{
    const inputType=props.type || 'text'
    const cls=[classes.input]
    return(
        <div>
            <label htmlFor=''></label>
            <input type={inputType}/>
        </div>
    )
}

export default Input;