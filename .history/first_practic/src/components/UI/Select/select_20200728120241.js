import React from 'react';
import classes from './select.module.css';
const Select=props=>{
    const htmlFor=`${props.label}=${Math.random}`
    return(
        <div>
            <label htmlFor={htmlFor}></label>
            <select 
            id={htmlFor}
            value={props.value}
            onChange={props.onChange}
            >
                {props.options.map((option,index)=>{
                    return (
                        <option
                        value={option.value}
                        key={option.value + index}>{option.text}</option>
                    )
                })}
            </select>
        </div>
    )
}