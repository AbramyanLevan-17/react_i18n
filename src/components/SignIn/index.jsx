import React from 'react';
import { Link } from 'react-router-dom'
import Input from '../SignUp/Input';

import './index.scss';

const SignIn = () => {
  return (
    <div className='signin'>
      <div className="signin__wrapper">
        <div className="signin__title">Sign In</div>
        <Input
          type='email'
          input='email'
        />
        <Input
          type='password'
          input='password'
        />
        <div className="signin__forget"><Link to='/forget-pass'>Forgot your password?</Link></div>
        <div className="signin__button"><span>Sign in</span></div>
        <div className="signin__signup">Not registered?<Link to='/sign-up'> Sign up</Link></div>
      </div>
    </div>
  )
}

export default SignIn
