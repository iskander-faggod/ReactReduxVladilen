import React from 'react';
import classes from './button.module.css'

const Button=(props)=>{
    return(
        <button
        onClick={props.onClick}
        className={}
        disabled={props.disabled}>
            {props.childer}
        </button>
    )
}

export default Button