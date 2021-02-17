import React, { useState } from 'react';

import './checkbox.scss';

const Checkbox = () => {
  const [check, setCheck] = useState(false)

  const checkboxHandle = () => {
    setCheck(!check)
  }

  return (
    <div className='checkbox_grey' onClick={checkboxHandle}>
      {check && 
        <>
        <div className="rec-1"></div>
        <div className="rec-2"></div>
        </>
      }

    </div>
  )
}

export default Checkbox
