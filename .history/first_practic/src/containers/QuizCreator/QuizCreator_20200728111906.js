import React, { Component } from 'react';
import classes from './QuizCreator.module.css'
import Button from '../../components/UI/button/button.js'
import {createControl} from '../../components/form/form.js';
function createOptionControl(nubmer){
    return createControl ({
        label:`Вариант ${nubmer}`,
        errorMessage:'Значение не может быть пустым'
    },{required:true})
}
export default class QuizCreator extends Component {
    state={
        quiz:[],
        formControls:{
            question:createControl({
               label:'Введите вопрос',
               errorMessage:"Вопрос не может быть пустым"
            },{required:true}),
            option1:createControl,
            option2:'',
            option3:'',
            option4:''
        }
    }
    submitHandler = (event) => {
        event.preventDefault();
    }
    addQuestionHandle=()=>{

    }

    createQuestionHandler=()=>{

    }

    render() {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Создание теста</h1>

                    <form onSubmit={this.submitHandler}>
                    <input type='text'/>
                    <hr/>
                    <input type='text'/>
                    <input type='text'/>
                    <input type='text'/>
                    <input type='text'/>


                        <select></select>
                        <Button
                            type='primary'
                            onClick={this.addQuestionHandler}>
                            Добавить вопрос
                         </Button>

                         <Button
                            type='primary'
                            onClick={this.createQuestionHandler}>
                            Cоздать тест
                         </Button>
                    </form>
                </div>
            </div>
        )
    }
}