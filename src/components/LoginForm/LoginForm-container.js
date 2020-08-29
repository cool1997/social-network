import React from 'react'
import LoginForm from './LoginForm'
import {connect} from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'
import thunkCreator from '../../redux/authReducer'


const {login} = thunkCreator


const LoginFormContainer = ({login, ...props}) => {
  const onSubmit = ({email, password, rememberMe}) => {
    login(email, password, rememberMe)
  }

  return (
    <LoginForm onSubmit={onSubmit}/>
  )
}


const mapStateToProps = (state) => {
  return {

  }
}


export default compose(
  reduxForm({form: 'login'}),
  connect(mapStateToProps, {login}),
)(LoginFormContainer)

