import React, { useState } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import i18n from './i18n';
import { withNamespaces } from "react-i18next";

import Home from './components/Home';
import SignUp from './components/SignUp';
import Nav from './components/Nav'
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import ForgetPass from './components/ForgetPass';

function App({ t }) {
  const [flag, setFlag] = useState('en');
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
    setFlag(event.target.value)
  }
  return (
    <div className='app'>

      <Router>
        <Nav 
        t={t}
        flag={flag}
        changeLanguage={changeLanguage}/>
        <Switch>
          <Route exact path='/'>
            <Home  t={t}/>
          </Route>
          <Route path='/sign-up'>
            <SignUp />
          </Route>
          <Route path='/sign-in'>
            <SignIn />
          </Route>
          <Route path='/forget-pass'>
            <ForgetPass />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default withNamespaces()(App);
