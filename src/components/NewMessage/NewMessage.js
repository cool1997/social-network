import React from 'react'
import styles from './NewMessage.module.scss'
import {Field} from 'redux-form'
import {required, maxLengthCreator} from '../../utils/validators'
import {Component} from '../../common/FormsControls/FormsControls'


const maxLength50 = maxLengthCreator(50)


const NewMessage = (props) => {
  const {} = props

  return (
    <form className={styles.NewMessage} onSubmit={props.handleSubmit}>
      <Field validate={[required, maxLength50]} name='newMessageText' component={Component.textarea} placeholder='Enter your massage' className={styles.text}/>
      <button className={styles.btn}>Send</button>
    </form>
  )
}


export default NewMessage;