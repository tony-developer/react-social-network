import React from 'react'
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
      <nav className={classes.nav}>
        <div className={classes.item}>
          <NavLink to='/profile' activeClassName={classes.activeLink}>Profile </NavLink>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
          <NavLink to='/dialogs' activeClassName={classes.activeLink}>Messages</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/news'>News</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/music'>Music</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/settings'>Settings</NavLink>
        </div>
      </nav>
  )
}

export default Navbar