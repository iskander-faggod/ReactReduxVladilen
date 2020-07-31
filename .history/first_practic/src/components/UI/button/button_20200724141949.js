import React from 'react';
import classes from './button.module.css'

const Button=(props)=>{
    return(
        <button>
            {props.childer}
        </button>
    )
}

export default Button