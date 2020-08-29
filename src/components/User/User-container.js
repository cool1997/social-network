import React from 'react'
import User from './User'
import {connect} from 'react-redux'
import { compose } from 'redux'
import {thunkCreator} from '../../redux/usersReducer'


const {deleteUser, postUser} = thunkCreator


const UserContainer = (props) => {
  return (
    <User {...props} />
  )
}


const mapStateToProps = (state) => {
  return {
    followingInProgress: state.users.followingInProgress,
  }
}


export default compose(
  connect(mapStateToProps, {deleteUser, postUser}),
)(UserContainer)

