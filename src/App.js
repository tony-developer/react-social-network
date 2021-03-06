import React, {Component} from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from './components/Dialogs/Dialogs'
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Misic/Misic";


const App = (props) => {
  return (
      <BrowserRouter>
        <div className="app-wrapper">

          <Header/>
          <Navbar/>
          <div className="app-wrapper-content">
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/dialogs' component={Dialogs} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
          </div>

        </div>
      </BrowserRouter>

  )
}

export default App;
