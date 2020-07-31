import React from 'react';
import classes from './ActiveQuiz.module.css';

const ActiveQuiz=(props)=>{
    return(
        <div className={classes.ActiveQuiz}>
            <p>
                <span>
                    <strong>2.</strong>
                    Как дела?
                </span>
            </p>
        </div>
    )
}
export default ActiveQuiz;