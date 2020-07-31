import React, { Component } from 'react';
import classes from './Auth.module.css';
import Button from '../../components/UI/button/button.js'
export default class Auth extends Component{
    render(){
        return(
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>

                    <form>
                        <input type='text'/>
                        <input type='text'/>
                        <Button></Button>
                    </form>
                </div>
                
            </div>
        )
    }
}