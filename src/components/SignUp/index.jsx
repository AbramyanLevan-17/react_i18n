import React from 'react';
import { Link } from 'react-router-dom'

import Checkbox from './Checkbox';

import './index.scss'
import Input from './Input';

const SignUp = () => {
  return (
      <div className='signup'>
        <div className="signup__wrapper">
          <div className="signup__form">
            <div className="signup__title">Sign Up</div>
            <div className="signup__subtitle">Already have an account?<Link to='/sign-in'> Sign In</Link></div>
            <Input
              type='text'
              input='sponsor'
            />
            <Input
              type='text'
              input='username' />
            <Input
              type='email'
              input='email' />
            <Input
              type='text'
              input='phone number' />
            <Input
              type='password'
              input='password' />
            <Input
              type='password'
              input='re-type password' />
              <div className="signup__agreement"><Checkbox/><span>I accept the terms and conditions <a>of the user agreement</a></span></div>
              <div class="g-recaptcha brochure__form__captcha" data-sitekey="YOUR SITE KEY"></div>
              <div className="signup__button"><span>SIGN UP</span></div>
          </div>
        </div>
      </div>
  )
}

export default SignUp
