import React from 'react'
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  return (
      <div>
        <div>
          <img src="https://s3.eu-central-1.amazonaws.com/river-talks/uploads/photos/2020/09/sngine_a641f76c498eb2aa4fb97be4aaf0fa6a.jpg"/>
        </div>
        <div className={classes.descriptionBlock}>
          ava + description
        </div>
      </div>
  )
}

export default ProfileInfo

