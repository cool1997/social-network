import React from 'react'
import styles from './PostsList.module.scss'
import Post from '../Post/Post-container'


const PostsList = (props) => {
  const {postsData} = props

  const postItems = [...postsData]
    .reverse()
    .map((post) => (
      <Post id={post.id} text={post.text} likesCount={post.likesCount} key={`${post.id}`}/>
    ))

  return (
    <section className={styles.PostsList}>
      {postItems}
      {props.children}
    </section>
  )
}


export default PostsList;