import React from 'react'
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
  const path = "/dialogs/" + props.id

  return (
      <div className={classes.dialog + ' ' + classes.active}>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
  )
}

const Message = (props) => {
  return (
      <div className={classes.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  return (
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
          <DialogItem name="Anton" id="1"/>
          <DialogItem name="Sasha" id="2"/>
          <DialogItem name="Victor" id="3"/>
          <DialogItem name="Andrey" id="4"/>
          <DialogItem name="Anna" id="5"/>
          <DialogItem name="Maria" id="6"/>
        </div>
        <div className={classes.messages}>
          <Message message='Hi!'/>
          <Message message='How are you?'/>
          <Message message='Good '/>

        </div>
      </div>
  )
}

export default Dialogs