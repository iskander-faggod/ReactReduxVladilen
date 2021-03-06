import React, { Component } from 'react';
import classes from './Auth.module.css';
import Button from '../../components/UI/button/button.js'
import Input from '../../components/UI/input/input';
import is from 'is_js'
export default class Auth extends Component {
    state={
        isFormValid:false,
        formControls:{
            email:{
                value:'',
                type:'email',
                label:'Email',
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
                type:'password',
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

    validateControl=(value,validation)=>{
        if (!validation){
            return true
        }

        let isValid=true

        if(validation.required){
            isValid= value.trim() !=='' && isValid
        }

        if(validation.email){
            isValid=is.email(value) && isValid
        }

        if(validation.minLength){
            isValid=value.trim.length>=validation.minLength && isValid
        }
        return isValid
    }
    onChangeHandler=(event,controlName)=>{
        console.log(event.target.value, controlName)
        const formControls={...this.state.formControls}
        const control={...formControls[controlName]}

        control.value=event.target.value
        control.touched=true
        control.valid=this.validateControl(control.value,control.validation)
        formControls[controlName]=control

        let isFormValid=true
        Object.keys(formControls).forEach(name=>{
            isFormValid=formControls[name].valid && isFormValid
        })
        this.setState({
            formControls,isFormValid
        })
    }

    renderInputs(){
        return Object.keys(this.state.formControls).map((controlName,index)=>{
            const control=this.state.formControls[controlName]
            return (
                <Input
                key={controlName+index}
                type={control.type}
                value={control.value}
                valid={control.valid}
                touched={control.touched}
                label={control.label}
                errorMessage={control.errorMessage}
                shouldValidate={!!control.validation}
                onChange={event=>this.onChangeHandler(event,controlName)}/>
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
                            onClick={this.loginHander}
                            disabled={!this.state.isFormValid}>
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