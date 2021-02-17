import React from 'react';

import './index.scss';
import mask from '../../../imgs/mask.png';
import checked from '../../../imgs/checked.png';
import sign from '../../../imgs/sign.png'
import Socials from './Socials';
import LeaderSvg from './LeaderSvg';

const Leadership = ({ t }) => {
  return (
    <div className='leadership'>
      <LeaderSvg />
      <div className="leadership__wrapper">
        <div className="leadership__title">{t("Leadership")}</div>
        <div className="leadership__row">
          <div className="leadership__avatar">
            <img src={mask} alt="" srcset="" className='mask' />
            <img src={checked} alt="" className='checked' />
          </div>
          <div className="leadership__ceo">
            <div className="leadership__info info">
              <span className="info__blue">Kevin Zhang</span>
              <span className="info__black"> | CEO</span>
            </div>
            <div className="leadership__text">
              {t('ceo')}
            </div>
            <div className="leadership__subrow">
              <img src={sign} alt="" className="leadership__sign" />
              <div className="leadership__socials socials">
                <div className="socials__text">{t("Get in touch")}</div>
                <Socials />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leadership
