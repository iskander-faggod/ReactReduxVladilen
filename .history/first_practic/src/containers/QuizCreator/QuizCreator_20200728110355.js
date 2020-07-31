import React, { Component } from 'react';
import classes from './QuizCreator.module.css'
import Button from '../../components/UI/button/button.js'


export default class QuizCreator extends Component {
    submitHandler = (event) => {
        event.preventDefault();
    }
    addQuestionHandle=()=>{

    }
    render() {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Создание теста</h1>

                    <form onSubmit={this.submitHandler}>


                        <select></select>
                        <Button
                            type='primary'
                            onClick={this.addQuestionHandler}>
                            Добавить вопрос
                         </Button>

                         <Button
                            type='primary'
                            onClick={this.addQuestionHandler}>
                            Завершить вопрос
                         </Button>
                    </form>
                </div>
            </div>
        )
    }
}