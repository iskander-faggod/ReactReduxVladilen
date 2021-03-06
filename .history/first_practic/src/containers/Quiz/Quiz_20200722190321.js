import React, { Component } from 'react';
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
export default class Quiz extends Component {
    state = {
        quiz: [
            {   
                question:'Какого цвета у тебя глаза?',
                answers: [
                    { text: 'Карие' },
                    { text: 'Зеленые' },
                    { text: 'Вопрос 3' },
                    { text: 'Вопрос 4' }
                ]
            }
        ]
    }
    render() {
        return (
            <div className={classes.Quiz}>


                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на вопросы:</h1>
                    <ActiveQuiz answers={this.state.quiz[0].answers} />
                </div>
            </div>
        )
    }
}