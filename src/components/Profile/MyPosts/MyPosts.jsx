import React from 'react'
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
        <div className={classes.postsBlock}>
          <h3>My posts</h3>
          <div>
            <div>
              <textarea></textarea>
            </div>
            <div>
              <button>Add post</button>
            </div>
          </div>
          <div className={classes.posts}>
            <Post message='Hi, how are you?' likesCount='3' />
            <Post message='My first post' likesCount='15' />
            <Post />
          </div>
        </div>

  )
}

export default MyPosts