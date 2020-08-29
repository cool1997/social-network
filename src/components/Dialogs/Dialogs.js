import React from 'react'
import styles from './Dialogs.module.scss'
import DialogsList from '../DialogsList/DialogsList-container'
import NewMessage from '../NewMessage/NewMessage-container'
import MessageList from '../MessageList/MessageList-container'


const Dialogs = (props) => {
  const {onSubmit} = props

  return (
    <section className={styles.Dialogs}>
      <h2 className='visually-hidden'>Messages</h2>
      <DialogsList />
      <section className={styles.messages}>
        <MessageList />
        <NewMessage onSubmit={onSubmit}/>
      </section>
    </section>
  )
}


export default Dialogs;