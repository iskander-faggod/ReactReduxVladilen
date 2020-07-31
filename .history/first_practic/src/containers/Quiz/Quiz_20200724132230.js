import React, { Component } from 'react';
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
export default class Quiz extends Component {
    state = {
        activeQuestion: 0,//{[id]:'success'/'error}
        results:{}, 
        isFinished: true,
        answerState: null, //{[id]:'success'/'error}
        quiz: [
            {
                question: 'Какого цвета у тебя глаза?',
                rightAnswerId: 1,
                id: 1,
                answers: [
                    { text: 'Карие', id: 1 },
                    { text: 'Зеленые', id: 2 },
                    { text: 'Синие', id: 3 },
                    { text: 'Голубые', id: 4 }
                ]
            },
            {
                question: 'В каком году основали Питер?',
                rightAnswerId: 3,
                id: 2,
                answers: [
                    { text: '1700', id: 1 },
                    { text: '1705', id: 2 },
                    { text: '1703', id: 3 },
                    { text: '1803', id: 4 }
                ]
            }
        ]
    }
    onAnswerClickHandler = (answerId) => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }
        const question = this.state.quiz[this.state.activeQuestion]
        const results=this.state.results;
        if (question.rightAnswerId === answerId) {
            if (!results[answerId]){
                results[answerId]='success'
            }
            this.setState({
                answerState: {
                    answerState: { [answerId]: 'success' },
                    results
                }
            })
            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({ isFinished: true })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 500)
        } else {
            results[answerId]='error'
            this.setState({
                answerState: { [answerId]: 'error' },
                results
            })
        }
 

    }






    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }
    render() {
        return (
            <div className={classes.Quiz}>


                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на вопросы:</h1>
                    {
                        this.state.isFinished
                            ?
                            <FinishedQuiz
                            results={this.state.results}
                            quiz={this.state.quiz}/>
                            :
                            <ActiveQuiz
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState} />
                            
                    }
                </div>
            </div>
        )

    }
}