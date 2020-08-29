import React from 'react'
import styles from './PagePhoto.module.scss'
import { findAllByLabelText } from '@testing-library/react';


const PagePhoto = ({photo, isOwner, Handler, ...props}) => {
  return (
    <section className={`${styles.PagePhoto} ${props.className}`}>
      <img src={photo || `https://via.placeholder.com/200x300`} alt='profile image' className={styles.mainPhoto}/>
      {isOwner &&
      <label htmlFor={`selectBtn`} className={styles.selectBtnLabel}>select file</label>}
      <input type={`file`} onChange={(evt) => Handler.mainPhotoSelected(evt)} id={`selectBtn`} className={styles.selectBtn}/>
    </section>
  )
}


export default PagePhoto;