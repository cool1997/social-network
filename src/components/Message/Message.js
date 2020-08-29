import React from 'react'
import styles from './Message.module.scss'


const Message = (props) => {
  return (
    <section className={`${styles.Message} ${props.myMessage ? styles.myMessage : styles.friendMessage}`}>
      <p id={props.id}>{props.text}</p>
    </section>
  )
}


export default Message;