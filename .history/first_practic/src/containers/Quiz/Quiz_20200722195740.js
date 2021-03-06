import React, { Component } from 'react';
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
export default class Quiz extends Component {
    state = {
        activeQuestion:0,
        quiz: [
            {   
                question:'Какого цвета у тебя глаза?',
                rightAnswerId:1,
                id:1,
                answers: [
                    { text: 'Карие', id:1 },
                    { text: 'Зеленые',id:2 },
                    { text: 'Синие',id:3 },
                    { text: 'Голубые',id:4 }
                ]
            },
            {   
                question:'В каком году основали Питер?',
                rightAnswerId:3,
                id:2,
                answers: [
                    { text: '1700', id:1 },
                    { text: '1705',id:2 },
                    { text: '1703',id:3 },
                    { text: '1803',id:4 }
                ]
            }
        ]
    }
    onAnswerClickHandler=(answerId)=>{
        console.log('answer id',answerId)
    }
    render() {
        return (
            <div className={classes.Quiz}>


                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на вопросы:</h1>
                    <ActiveQuiz 
                    answers={this.state.quiz[0].answers}
                    question={this.state.quiz[0].question}
                    onAnswerClick={this.onAnswerClickHandler}
                    quizLength={this.state.quiz.length}
                    answerNumber={this.state.activeQuestion+1}/>
                </div>
            </div>
        )
    }
}