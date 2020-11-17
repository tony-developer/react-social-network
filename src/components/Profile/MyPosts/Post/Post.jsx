import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
  // console.log(props.message)
  // debugger
  return (
            <div className={classes.item}>
              <img src="https://cstor.nn2.ru/users/users/foto/1215030-2017-06-26-photo.jpg.jpg" alt="аватарка"/>
              {props.message}
              <div>
                <span>Like</span> {props.likesCount}
              </div>
            </div>
  )
}

export default Post