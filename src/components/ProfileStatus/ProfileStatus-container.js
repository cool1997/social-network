import React, {useState, useEffect} from 'react'
import ProfileStatus from './ProfileStatus'
import {connect} from 'react-redux'
import { compose } from 'redux'
import {Operation} from '../../redux/profileReducer'


const {putStatus} = Operation


const ProfileStatusContainer = ({status, putStatus, ...props}) => {  
  const [editMode, setEditMode] = useState(false)
  const [statusLocal, setStatusLocal] = useState(status)
  
  
  const onStatusChange = (evt) => {
    setStatusLocal(evt.target.value)
  }
  
  const onEditModeToggle = () => {
    setEditMode(!editMode)
  }
  
  const onStatusSave = () => {
    putStatus(statusLocal)
  }
  
  
  useEffect(() => {
    setStatusLocal(status)
  }, [status])
  

  return (
    <ProfileStatus status={status} onStatusSave={onStatusSave} statusLocal={statusLocal} editMode={editMode} onStatusChange={onStatusChange} onEditModeToggle={onEditModeToggle}/>
  )
}
  
  
const mapStateToProps = (state) => {
  return {
    status: state.profile.status,
  }
}


export default compose(
  connect(mapStateToProps, {putStatus}),
)(ProfileStatusContainer)

