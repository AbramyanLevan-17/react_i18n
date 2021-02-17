import React from 'react';

import './index.scss';
import inc1 from '../../../imgs/inc1.png';
import inc2 from '../../../imgs/inc2.png';
import inc3 from '../../../imgs/inc3.png';

const Inc = () => {
  return (
    <div className='inc'>
      <div className="inc__wrapper">
        <img src={inc2} alt="" className="inc__item"/>
        <img src={inc1} alt="" className="inc__item"/>
        <img src={inc3} alt="" className="inc__item"/>
      </div>
    </div>
  )
}

export default Inc
