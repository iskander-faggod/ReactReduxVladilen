import React from 'react';
import classes from './loader.module.css'
const Loader=props=>{
    return(
        <div className={classes.Center}></div>
        <div className={classes.Loader}><div/><div/><div/><div/><div/><div/><div/><div/><div/></div>
    )
}

export default Loader; 