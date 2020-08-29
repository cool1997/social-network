import React, {useState} from 'react'
import Post from './Post'
import {connect} from 'react-redux'
import { compose } from 'redux';


const mapStateToProps = (state) => {
  return {

  }
}

const PostContainer = (props) => {
  const [isCount, setIsCount] = useState(false); 

  const countToggle = () => {
    if(isCount) {
      return 'var(--accent_color)'
    } else {
      return 'var(--light_color)'
    }
  }

  const onCount = () => {
    if(isCount) {
      styleCount = {
        background: 'var(--light_color)'
      } 
      setIsCount(false)
    } else {
      styleCount = {
        background: 'var(--accent_color)'
      } 
      setIsCount(true)
    }
  }

  let styleCount = {
    background: countToggle()
  }

  return (
    <Post onCount={onCount} styleCount={styleCount} {...props}/>
  )
}



export default compose(
  connect(mapStateToProps, {}),
)(PostContainer)

