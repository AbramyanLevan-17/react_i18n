import React from 'react';

import './input.scss';

const Input = ({type, input}) => {
  return (
    <input type={type} className='input' placeholder={input} name={input}/>
  )
}

export default Input
