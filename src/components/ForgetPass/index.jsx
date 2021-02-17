import React from 'react';
import Input from '../SignUp/Input';

import './index.scss'
const ForgetPass = () => {
  return (
    <div className='forget'>
      <div className="forget__wrapper">
        <div className="forget__title">Forgot Password?</div>
        <Input
        type="email"
        input="email"
        />
        <div className="forget__button"><span>Reset Password</span></div>
      </div>
    </div>
  )
}

export default ForgetPass
