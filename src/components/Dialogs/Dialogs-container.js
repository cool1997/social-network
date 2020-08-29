import React from 'react'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'
import { compose } from 'redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {actionCreator} from '../../redux/dialogsReducer'


const {addMessage} = actionCreator


const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})


const DialogsContainer = (props) => {
  const {addMessage} = props

  const onSubmit = (formData) => {
    addMessage(formData.newMessageText)
    formData.newMessageText = ''
  }

  return (
    <Dialogs onSubmit={onSubmit} {...props}/>
  )
}


export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {addMessage}),
)(DialogsContainer)

