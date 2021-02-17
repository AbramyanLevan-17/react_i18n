import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Nav = ({changeLanguage, t}) => {
  return (
    <nav className="menu">
      <div className="menu__wrapper">
        <Link to='/'><div className="menu__logo">{t('Logo')}</div></Link>
        <div className="menu__right-side">
          <div className="menu__lang"><svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 0H0V8.07692H9.5V0Z" fill="#30539B" />
            <path d="M19 13.8462H0V15H19V13.8462Z" fill="#C23C40" />
            <path d="M19 11.5381H0V12.6919H19V11.5381Z" fill="#C23C40" />
            <path d="M19 9.23047H0V10.3843H19V9.23047Z" fill="#C23C40" />
            <path d="M19 6.92285H9.5V8.0767H19V6.92285Z" fill="#C23C40" />
            <path d="M19 4.61523H9.5V5.76908H19V4.61523Z" fill="#C23C40" />
            <path d="M19 2.30762H9.5V3.46146H19V2.30762Z" fill="#C23C40" />
            <path d="M19 0H9.5V1.15385H19V0Z" fill="#C23C40" />
          </svg>
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
