import React from 'react';
import classes from './FinishedQuiz.module.css';
const FinishedQuiz=props=>{
    return(
        <div className={classes.FinishedQuiz}>
            <ul>
                {props.quiz.map((question,index)=>{

                })}
                {/* <li>
                    <strong>1. How are you</strong>
                    <i className={'fa fa-times ' + classes.error}></i>
                </li>
                <li>
                    <strong>2. How are you</strong>
                    <i className={'fa fa-check ' + classes.success}></i>
                </li> */}
            </ul>
            <p>Правильно 4 из 10</p>
            <div>
                <button>Повторить</button>
            </div>
        </div>
    )
}
export default FinishedQuiz;