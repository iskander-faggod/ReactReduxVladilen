import React, { Component } from 'react';
import classes from './Auth.module.css';
import Button from '../../components/UI/button/button.js'
import Input from '../../components/UI/input/input';
export default class Auth extends Component {

    loginHander=()=>{

    }
    registerHandler=()=>{

    }
    submitHandler=(event)=>{
        event.preventDeafult()
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>

                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                        <Input label='Email'/>
                        <Input label='Password'/>
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