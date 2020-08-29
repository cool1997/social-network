import React, {memo} from 'react'
import NewPost from './NewPost'
import {connect} from 'react-redux'
import { compose } from 'redux'
import {reduxForm} from 'redux-form'
import {Action, Operation} from '../../redux/profileReducer';


const {addPost} = Action
const {getAlert} = Operation


const NewPostContainer = ({addPost, getAlert, ...props}) => {
  const onSubmit = ({newPostText}) => {
    if(!newPostText.trim()) {
      getAlert('message can\'t be empty')
    } else {
      addPost(newPostText)
    }
    newPostText = ''
  }

  return (
    <NewPost onSubmit={onSubmit} {...props}/>
  )
}


const mapStateToProps = (state) => ({
  initialValues: state.profile,
  alert: state.profile.alert,
})



export default compose(
  connect(mapStateToProps, {addPost, getAlert}),
  reduxForm({form: 'newPost', enableReinitialize : true}),
  memo,
)(NewPostContainer)