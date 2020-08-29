import React, {useState} from 'react'
import Test from './Test'
import {connect} from 'react-redux'
import { compose } from 'redux';




const TestContainer = (props) => {



  return (
      <Test {...props}/>
  )
}


const mapStateToProps = (state) => {
  return {

  }
}


export default compose(
  connect(mapStateToProps, {}),
)(TestContainer)  












