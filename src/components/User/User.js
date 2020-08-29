import React from 'react'
import styles from './User.module.scss'
import { NavLink } from 'react-router-dom'


const User = (props) => {
  const {followingInProgress, name, status, photos, followed, id, deleteUser, postUser} = props

  return (
    <section className={`${styles.User} ${props.className}`}>
      <NavLink to={`/profile/${id}`} className={styles.photo}>
        <img src={photos} alt='user image'/>
      </NavLink>

      {followed
          ? <button disabled={followingInProgress.some(userId => userId === id)} className={styles.btn} onClick={() => {deleteUser(id)}}>unfollow</button>

          : <button disabled={followingInProgress.some(userId => userId === id)} className={styles.btn} onClick={() => {postUser(id)}}>follow</button>
      }
      
      <section className={styles.aboutUser}>
        <p className={styles.name}>{name}</p>
        <p className={styles.status}>{status}</p>
      </section>
    </section>
  )
}


export default User;