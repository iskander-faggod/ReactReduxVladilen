import React, { Component } from 'react';
import classes from './QuizCreator.module.css'
import Button from '../../components/UI/button/button.js'
import {createControl} from '../../components/form/form.js';
import Input from '../../components/UI/input/input';
import Select from '../../components/UI/Select/select';


function createOptionControl(nubmer){
    return createControl ({
        label:`Вариант ${nubmer}`,
        errorMessage:'Значение не может быть пустым'
    },{required:true})
}


function createFormControls(){
    return {
        rightAnswerId:1,
        question:createControl({
           label:'Введите вопрос',
           errorMessage:"Вопрос не может быть пустым"
        },{required:true}),
        option1:createOptionControl(1),
        option2:createOptionControl(2),
        option3:createOptionControl(3),
        option4:createOptionControl(4)
    }
}


export default class QuizCreator extends Component {
    state={
        quiz:[],
        formControls:createFormControls()
    }
    submitHandler = (event) => {
        event.preventDefault();
    }
    addQuestionHandle=()=>{

    }

    createQuestionHandler=()=>{

    }
    changeHandler=(value,controlName)=>{

    }
    renderControls=()=>{
        return Object.keys(this.state.formControls).map((controlName,index)=>{
            const control=this.state.formControls[controlName]

            return (
                <div key={controlName+index}>
                <Input
                    label={control.label}
                    value={control.value}
                    valid={control.valid}
                    shouldValidate={!!control.validation}
                    touched={control.touched}
                    errorMessage={control.errorMessage}
                    onChange={event=>this.changeHandler(event.target.value,controlName)}
                    />
                    {index===0?<hr/>:null}
                </div>
            )
        })
    }
    selectChangeHandler=event=>{
        event.preventDefault()
    }
    render() {
        const select=<Select
            label='Выберите правильный ответ'
            value={this.state.rightAnswerId}
            onChange={this.selectChangeHandler}
        />
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Создание теста</h1>

                    <form onSubmit={this.submitHandler}>
                    {this.renderControls()}


                        
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