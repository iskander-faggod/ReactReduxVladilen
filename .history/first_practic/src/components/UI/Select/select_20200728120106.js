import React from 'react';
import classes from './select.module.css';
const Select=props=>{
    const htmlFor=`${props.label}=${Math.random}`
    return(
        <div>
            <label htmlFor=''></label>
            <select 
            id={htmlFor}></select>
        </div>
    )
}