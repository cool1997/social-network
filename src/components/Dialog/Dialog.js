import React from 'react'
import styles from './Dialog.module.scss'
import { NavLink } from 'react-router-dom'


const Dialog = (props) => {
  return (
    <NavLink to={`/dialogs/${props.id}`} className={styles.Dialog} activeClassName={styles.active}>
      <span className={styles.text}>{props.userName}</span>
    </NavLink>
  )
}


export default Dialog;