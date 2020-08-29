import React from 'react'
import styles from './Login.module.scss'
import LoginForm from '../LoginForm/LoginForm-container'


const Login = ({...props}) => {
  return (
    <section className={styles.Login}>
      <h2>Login</h2>
      <LoginForm />
    </section>
  )
}


export default Login;