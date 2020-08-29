import React from 'react'
import styles from './Logo.module.scss'


const Logo = ({onChangeTheme}) => {
  return (
    <section className={styles.logo__wrap}>
      <div className={styles.logo}>
        <span className={`${styles.logo__square_front} ${styles.logo__square}`}></span>
        <span className={`${styles.logo__square_back} ${styles.logo__square}`}></span>
      </div>
      <form>
        <input className={styles.input} onClick ={onChangeTheme} type="radio" name="theme" value="theme_white" id="theme_white"></input>
        <label htmlFor="theme_white" className={styles.logo__paper + ' ' + styles.theme_white}></label>
        <input className={styles.input} onClick ={onChangeTheme} type="radio" name="theme" value="theme_grey" id="theme_grey" ></input>
        <label htmlFor="theme_grey" className={styles.logo__paper + ' ' + styles.theme_grey}></label>
        <input className={styles.input} onClick ={onChangeTheme} type="radio" name="theme" value="theme_black" id="theme_black"></input>
        <label htmlFor="theme_black" className={styles.logo__paper + ' ' + styles.theme_black}></label>
      </form>
    </section>
  )
}


export default Logo;