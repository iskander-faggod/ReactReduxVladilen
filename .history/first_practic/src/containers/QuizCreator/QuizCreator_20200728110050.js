import React, { Component } from 'react';
import classes from './QuizCreator.module.css'


export default class QuizCreator extends Component{
    submitHandler=(event)=>{
        event.preventDefault();
    }
    render(){
        return(
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Создание теста</h1>

                    <form onSubmit={this.submitHandler}/>
                </div>
            </div>
        )
    }
}