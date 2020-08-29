import React, {useEffect} from 'react'
import App from './App'
import {connect} from 'react-redux'
import { compose } from 'redux'
import { thunkCreator } from '../../redux/appReducer'
import Preloader from '../../common/Preloader/Preloader'


const {initializeApp} = thunkCreator


const AppContainer = (props) => {
  const {initializeApp, initialized} = props

  useEffect(() => {
    initializeApp()
  }, [])

  return (
    !initialized 
      ? <Preloader />
      : <App {...props}/>
  )
}


const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


export default compose(
  connect(mapStateToProps, {initializeApp}),
)(AppContainer);
