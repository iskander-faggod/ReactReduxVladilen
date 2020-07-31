import React from 'react';
import classes from './MenuToggle.module.css'

const MenuToggle=(props)=>{
    const cls=[
        classes.MenuToggle,
        'fa',
    ]
    if(props.isOpen){
        cls.push('fa-times')
    }
    return(
        <i 
        className={cls.join(' ')}
        onClick={props.onToggle}
        />
    )
}