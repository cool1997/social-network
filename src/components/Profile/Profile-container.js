import React, {useEffect} from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import { compose } from 'redux';
import {Operation} from '../../redux/profileReducer'
import {actionCreator as authActionCreator} from '../../redux/authReducer'
import { Redirect, withRouter } from 'react-router-dom'


const {getProfile, getStatus} = Operation

const {setProfileId} = authActionCreator


const ProfileContainer = ({match, getProfile, getStatus, authorizedUserId, ...props}) => {
  const userId = match.params.userId || authorizedUserId

  useEffect(() => {
    // let userId = match.params.userId || authorizedUserId || props.history.push('login');

    getProfile(userId)
    getStatus(userId)
  }, [userId])
  
  
  return (
    userId
      ? <Profile isOwner={!match.params.userId} {...props} />
      : <Redirect to={'/login'} />
  )
}


const mapStateToProps = (state) => ({
  userProfile: state.profile.userProfile,
  authorizedUserId: state.auth.id,
  isHaveProfileId: state.auth.isHaveProfileId,
  isAuth: state.auth.isAuth,
})


export default compose(
  withRouter,
  connect(mapStateToProps, {getProfile, getStatus, setProfileId}),
)(ProfileContainer)