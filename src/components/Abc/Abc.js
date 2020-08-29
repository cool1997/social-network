import React from 'react'
import styles from './Abc.module.scss'


const Abc = (props) => {
  const {children} = props

  return (
    <section className={styles.Abc}>
      {children}
    </section>
  )
}


export default Abc;