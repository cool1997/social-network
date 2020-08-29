import React from 'react'
import styles from './LoginForm.module.scss'
import { Field } from 'redux-form'
import {Component} from '../../common/FormsControls/FormsControls'
import {required, maxLengthCreator} from '../../utils/validators'


const maxLength20 = maxLengthCreator(20)


const LoginForm = ({onSubmit, error, ...props}) => {
  return (
    <form className={styles.LoginForm} onSubmit={props.handleSubmit(onSubmit)}>
      <Field validate={[required, maxLength20]} name='email' component={Component.input} type='text' placeholder='login'/>
      <Field validate={[required, maxLength20]} name='password' component={Component.input} type='password' placeholder='password'/>
      {error && <span className={styles.error}>{error}</span>}
      <Field name='rememberMe' component={Component.input} type='checkbox' placeholder='remember me'/>
      <button>login</button>
    </form>
  )
}


export default LoginForm;