import React from 'react'
import styles from './MessageList.module.scss'
import Message from '../Message/Message-container'


const MessageList = (props) => {
  const {messagesData} = props

  const messagesItems = messagesData.map((message) => {
    return (
      <Message id={message.id} text={message.text} myMessage={message.myMessage} key={message.id}/>
    )
  })

  return (
    <section className={styles.MessageList}>
      {messagesItems}
      {props.children}
    </section>
  )
}


export default MessageList;