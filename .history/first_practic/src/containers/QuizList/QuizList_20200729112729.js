import React, { Component } from 'react';
import classes from './QuizList.module.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
export default class QuizList extends Component{
    renderQuizes(){
        return [1,2,3].map((quiz,index)=>{
            return (
                <li key={index}>
                    <NavLink to={'/quiz/' + quiz} >
                        Тест {quiz}
                    </NavLink>
                </li>
            )
        })
    }

    async componentDidMount(){
        axios.get('https://react-quiz-10a2a.firebaseio.com/quiz.json')
    }


    render(){
        return(
            <div className={classes.QuizList}>
                <div>
                    <h1>Список тестов</h1>
                    <ul>
                        {this.renderQuizes()}
                    </ul>
                </div>
            </div>
        )
    }
}