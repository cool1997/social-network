import React, {memo} from 'react'
import AboutUser from './AboutUser'
import {connect} from 'react-redux'
import { compose } from 'redux';


const AboutUserContainer = ({...props}) => {
  return (
    <AboutUser {...props}/>
  )
}


const mapStateToProps = (state) => {
  return {

  }
}


export default compose(
  connect(mapStateToProps, {}),
  memo,
)(AboutUserContainer)

