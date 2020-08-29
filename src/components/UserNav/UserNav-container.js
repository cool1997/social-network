import React, {useEffect} from 'react'
import UserNav from './UserNav'
import {connect} from 'react-redux'
import { compose } from 'redux';
import { thunkCreator } from '../../redux/authReducer';


const {logout} = thunkCreator


const UserNavContainer = (props) => {
  return (
    <UserNav {...props}/>
  )
}


const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})


export default compose(
  connect(mapStateToProps, {logout}),
)(UserNavContainer)

