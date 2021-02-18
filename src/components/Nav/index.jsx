import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import En from './En';
import De from './De'

const Nav = ({ changeLanguage, t, flag }) => {

  const curFlag = flag === 'en' ? (<En></En>) : (<De></De>);

  return (
    <nav className="menu">
      <div className="menu__wrapper">
        <Link to='/'><div className="menu__logo">{t('Logo')}</div></Link>
        <div className="menu__right-side">
          <div className="menu__lang">
            {curFlag}
            <select name="lang" id="lang" onChange={changeLanguage}>
              <option value="en">EN</option>
              <option value="de">DE</option>
            </select>
          </div >
          <Link to='/sign-in'><div className="menu__signin">{t('Sign In')}</div></Link>
          <Link to='/sign-up'><div className="menu__signup"><span>{t('Sign Up')}</span></div></Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
