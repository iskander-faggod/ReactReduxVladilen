import React from 'react';
import classes from './input.module.css';

const Input=(props)=>{
    const inputType=props.type || 'text'
    const cls=[classes.Input]
    const htmlFor=`${inputType}-${Math.random()}`

    if(true){
        cls.push(classes.invalid)
    }
    return(
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input 
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}/>

            <span>
                {props.errorMessage}
            </span>
        </div>
    )
}

export default Input;