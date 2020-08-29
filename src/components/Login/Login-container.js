import React from 'react'
import Login from './Login'
import {connect} from 'react-redux'
import { compose } from 'redux';
import {thunkCreator} from '../../redux/authReducer'
import { Redirect } from 'react-router-dom';


const {login} = thunkCreator


const LoginContainer = ({login, isAuth, ...props}) => {  
  return (
    !isAuth
      ? <Login {...props}/>
      : <Redirect to='/profile' />
  )
}
  
  
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})


export default compose(
  connect(mapStateToProps, {login}),
)(LoginContainer)

