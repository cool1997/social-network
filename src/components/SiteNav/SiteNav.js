import React from 'react'
import styles from './SiteNav.module.scss'
import {NavLink} from 'react-router-dom'


const SiteNav = () => {
  return (
    <ul className={styles.SiteNav}>
      <li className={styles.item}>
        <NavLink className={styles.link} activeClassName={styles.active} to='/profile'>
          <span className={styles.linkText}>profile</span>
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink className={styles.link} activeClassName={styles.active} to='/dialogs'>
          <span className={styles.linkText}>messages</span>
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink className={styles.link} activeClassName={styles.active} to='/users'>
          <span className={styles.linkText}>users</span>
        </NavLink>
      </li>
    </ul>
  )
}


export default SiteNav;