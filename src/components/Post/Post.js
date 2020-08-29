import React from 'react'
import styles from './Post.module.scss'


const Post = (props) => {
  return (
    <article className={styles.Post} >
      <p className={styles.text}>{props.text}</p>
      <span className={styles.count} style={props.styleCount} onClick={props.onCount}>{props.likesCount}</span>
    </article>
  )
}


export default Post;