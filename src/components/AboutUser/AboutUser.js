import React from 'react'
import styles from './AboutUser.module.scss'


const AboutUser = (props) => {
  return (
    <section className={styles.AboutUser}>
      {props.children}
    </section>
  )
}


export default AboutUser;