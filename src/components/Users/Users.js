import React from 'react'
import styles from './Users.module.scss'
import User from '../User/User-container'
import Pagination from '../Pagination/Pagination-container'


const Users = (props) => {
  const {users} = props


  return (
    <section className={styles.Users}>
      <Pagination className={styles.pagination} />
      <section className={styles.list}>
        {users.map((user) => 
          <User className={styles.item} id={user.id} followed={user.followed} photos={user.photos.small != null ? user.photos.small : 'https://via.placeholder.com/100'} status={user.status} name={user.name} key={user.id}/>
        )}
      </section>
    </section>
  )
}


export default Users;