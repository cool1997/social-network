import React from 'react'
import styles from './UserNav.module.scss'
import { NavLink } from 'react-router-dom'


const UserNav = (props) => {
  const {isAuth, login, logout} = props

  return (
    <section className={`${styles.UserNav} ${props.className}`}>
      {isAuth 
        ? <div className={styles.wrapper}>
            <button className={styles.logout} onClick={logout}>log&nbsp;out</button>
            <NavLink to={'/profile'} className={styles.link}><span className={styles.text}>{login}</span></NavLink> 
          </div>
        : <NavLink to={'/login'} activeClassName={styles.active} className={styles.link}><span className={styles.text}>login</span></NavLink>}
    </section>
  )
}


export default UserNav;