import React from 'react'
import PagePhoto from './PagePhoto'
import {connect} from 'react-redux'
import { compose } from 'redux'
import {Operation} from '../../redux/profileReducer'


const {savePhoto} = Operation


const PagePhotoContainer = ({savePhoto, ...props}) => {
  const Handler = {
    mainPhotoSelected: (evt) => {
      const photo = evt.target.files[0]
      photo && savePhoto(photo)
    }
  }

  return (
    <PagePhoto Handler={Handler} {...props}/>
  )
}


const mapStateToProps = (state) => {
  return {

  }
}


export default compose(
  connect(mapStateToProps, {savePhoto}),
)(PagePhotoContainer)

