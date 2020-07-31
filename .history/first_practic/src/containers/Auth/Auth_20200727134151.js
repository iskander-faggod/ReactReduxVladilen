import React, { Component } from 'react';
import classes from './Auth.module.css';
import Button from '../../components/UI/button/button.js'
import Input from '../../components/UI/input/input';
export default class Auth extends Component {
    state={
        formControls:{
            email:{
                value:'',
                type:'email',
                label:'email',
                errorMessage:'Введите корректный адресс',
                valid:false,
                touched:false,
                validation:{
                    required:true,
                    email:true
                }
            },
            password:{
                value:'',
                type:'passwrod',
                label:'Пароль',
                errorMessage:'Введите корректный пароль',
                valid:false,
                touched:false,
                validation:{
                    required:true,
                    minLength:6
                }
            },
        }
    }
    loginHander=()=>{

    }
    registerHandler=()=>{

    }
    submitHandler=(event)=>{
        event.preventDeafult()
    }
    renderInputs(){
        return Object.keys(this.state.formControls).map((controlName,index)=>{
            const control=this.state.formControls[controlName]
            return (
                <Input />
            )
        })
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>

                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>

                        {this.renderInputs()}
                        
                        <Button
                            type='primary'
                            onClick={this.loginHander}>
                            Войти
                            </Button>
                        <Button
                            type='primary'
                            onClick={this.registerHandler}>
                            Зарагестрироваться
                            </Button>


                    </form>
                </div>

            </div>
        )
    }
}