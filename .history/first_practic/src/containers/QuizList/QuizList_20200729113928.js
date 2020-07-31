import React, { Component } from 'react';
import classes from './QuizList.module.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
export default class QuizList extends Component{
    state={
        quizes:[]
    }
    renderQuizes(){
        return this.state.quizes.map((quiz,index)=>{
            return (
                <li key={quiz.id}>
                    <NavLink to={'/quiz/' + quiz} >
                        Тест {quiz}
                    </NavLink>
                </li>
            )
        })
    }

    async componentDidMount(){
        try{
            const response=await axios.get('https://react-quiz-10a2a.firebaseio.com/quiz.json')
            const quizes=[]

            Object.keys(response.data).forEach((key,index)=>{
                quizes.push({
                    id:key,
                    name:`Test #${index+1} `
                })
            })
        } catch (e){
            console.log(e)
        }
       
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