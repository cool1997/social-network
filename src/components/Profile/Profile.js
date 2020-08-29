import React from 'react'
import styles from './Profile.module.scss'
import PagePhoto from '../PagePhoto/PagePhoto-container'
import AboutUser from '../AboutUser/AboutUser-container'
import NewPost from '../NewPost/NewPost-container'
import PostsList from '../PostsList/PostsList-container'
import ProfileStatus from '../ProfileStatus/ProfileStatus-container'
// import LookingForAJob from '../LookingForAJob/LookingForAJob-container'
// import Contacts from '../Contacts/Contacts-container'
import Preloader from '../../common/Preloader/Preloader'


const Profile = ({userProfile, isOwner, ...props}) => {
  if(!userProfile) {
    return <Preloader />
  }
  
  const {aboutMe, photos, lookingForAJob, lookingForAJobDescription, contacts} = userProfile
  return (
    <section className={styles.Profile}>
      <h2 className='visually-hidden'>Profile</h2>
      <section className={styles.info}>
        <PagePhoto photo={photos.large} isOwner={isOwner}/>
        <AboutUser>
          <p>About me: {aboutMe}</p>
          <ProfileStatus />
          {/* <LookingForAJob lookingForAJob={lookingForAJob} lookingForAJobDescription={lookingForAJobDescription}/> */}
          {/* <Contacts contacts={contacts}/> */}
        </AboutUser>
      </section>
      <section className={styles.posts}>
        <h3 className={styles.posts__title}>My posts</h3>
        <NewPost />
        <PostsList />
      </section>
    </section>
  )
}


export default Profile;