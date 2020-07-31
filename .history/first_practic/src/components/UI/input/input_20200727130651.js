import React from 'react';
import classes from './input.module.css';

const Input=(props)=>{
    const inputType=props.type || 'text'
    const cls=[classes.Input]
    const htmlFor=`${inputType}-${Math.random()}`
    return(
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input type={inputType}/>
        </div>
    )
}

export default Input;