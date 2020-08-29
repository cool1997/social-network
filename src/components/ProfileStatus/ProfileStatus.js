import React from 'react'
import styles from './ProfileStatus.module.scss'


const ProfileStatus = (props) => {
  const {status, onStatusSave, statusLocal, editMode, onStatusChange, onEditModeToggle} = props


  return (
    <section className={styles.ProfileStatus}>
      {!editMode 
        ? <p onClick={onEditModeToggle}>{status || 'no status'}</p>
        : <section tabIndex='1' onBlur={onEditModeToggle}>
            <input onChange={onStatusChange} value={statusLocal} autoFocus/>
            <button onMouseDown={onStatusSave}>save</button>
          </section>
      }      
    </section>  
  )
}


export default ProfileStatus;