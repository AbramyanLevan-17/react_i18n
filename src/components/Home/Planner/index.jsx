import React from 'react';

import './index.scss';

const Planner = ({name}) => {
  return (
    <div className='planner__item'>
      {name}
    </div>
  )
}

export default Planner
