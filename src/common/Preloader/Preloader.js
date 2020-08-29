import React from 'react';
import preloader from '../../assets/img/preloader.svg';
import styles from './Preloader.module.css';


const Preloader = () => {
  return (
    <section className={styles.preloader}>
        <img src={preloader} alt='loading'/>
    </section>
  )
}

export default Preloader;