import React from 'react'
import styles from './NewPost.module.scss'
// import {Field} from 'redux-form'
import {required, maxLengthCreator} from '../../utils/validators'
import {Component, createField} from '../../common/FormsControls/FormsControls'


const maxLength15 = maxLengthCreator(15)


const NewPost = ({onSubmit, handleSubmit, alert, ...props}) => {
  return (
    <form className={styles.NewPost} onSubmit={handleSubmit(onSubmit)}>
      {/* <Field validate={[required, maxLength15]} component={Component.textarea} name='newPostText' className={styles.text}/> */}
      {createField(`new post`, `newPostText`, [required, maxLength15], `textarea`, {className: styles.text})}
      {alert && <p>{alert}</p>}
      <button className={styles.btn}>
        <span className={styles.btn__text}>Add post</span>
      </button>
    </form>
  )
}


export default NewPost;