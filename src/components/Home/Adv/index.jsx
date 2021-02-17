import React from 'react';

import './index.scss';
import video from '../../../imgs/vidimg.png'

const Adv = ({t}) => {
  return (
    <div className='adv'>
      <div className="adv__wrapper">
        <div className="adv__column">
          <div className="adv__title">{t('Next Generation')}</div>
          <div className="adv__subtitle">{t('Crypto Arbitage')}</div>
          <div className="adv__text">{t('adv-text')}</div>
          <div className="adv__row">
            <div className="adv__signup"><span>{t('Sign Up')}</span></div>
            <div className="adv__presentation"><svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.3857 1L11.3857 9.75" stroke="#0BA1DC" stroke-width="2" stroke-linecap="round" />
              <path d="M14.4629 7.5625L11.386 10.2548L8.30904 7.5625" stroke="#0BA1DC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M1.38477 8.65625V14.125H21.3848V8.65625" stroke="#0BA1DC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

              <span>{t("presentation")}</span></div>
          </div>
        </div>
        <div className="adv__video">
          <img src={video} alt="" srcset="" />
          <svg className='play' width="75" height="77" viewBox="0 0 75 77" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 71.1049V5.11167C0 1.38958 3.92148 -1.02762 7.24666 0.644849L71.3247 32.8741C74.957 34.7011 75.0059 39.869 71.4088 41.7644L7.33083 75.5284C4.00118 77.2829 0 74.8685 0 71.1049Z" fill="white" fill-opacity="0.8" />
          </svg>

        </div>
      </div>
    </div>
  )
}

export default Adv
