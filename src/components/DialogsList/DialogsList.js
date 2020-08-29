import React from 'react'
import styles from './DialogsList.module.scss'
import Dialog from '../Dialog/Dialog-container'


const DialogsList = (props) => {
  const {usersData} = props
  
  const dialogItems = usersData.map((user) => {
    return(
      <Dialog userName={user.name} id={user.id} key={`${user.name}${user.id}`}/>
    )
  })

  return (
    <section className={styles.DialogsList}>
      {dialogItems}
      {props.children}
    </section>
  )
}


export default DialogsList;