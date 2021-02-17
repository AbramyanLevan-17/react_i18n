import React from 'react';
import img1 from '../../../imgs/img1.png';
import img2 from '../../../imgs/img2.png';
import img3 from '../../../imgs/img3.png';
import img4 from '../../../imgs/img4.png';

import './index.scss';
import './map.scss';
import Map from './Map';


const GetStarted = ({ t }) => {
  return (
    <div className='start'>
      <div className="start__wrapper">
        <div className="start__title">{t("Getting Started Is Easy")}</div>
        <div className="start__sub-title">{t('start__sub-title')}</div>
        <div className="start__button"><span>{t('Get Started')}</span></div>
        <div className="start__card card">
          <div className="card__info">
            <div className="card__num">01</div>
            <div className="card__title">Arbitrage System Is Active</div>
            <div className="card__text">Our proprietary arbitrage system is active and ready to perform trades on your behalf.</div>
          </div>
          <div className="card__img"><img src={img1} alt="" srcset="" /></div>
        </div>
        <div className="start__card_reverse">
          <div className="card__img"><img src={img2} alt="" srcset="" /></div>
          <div className="card__info">
            <div className="card__num">02</div>
            <div className="card__title">Create Your Account</div>
            <div className="card__text">Create your account to gain access to our arbitrage and career earning opportunities.</div>
          </div>
        </div>
        <div className="start__card card">
          <div className="card__info">
            <div className="card__num">03</div>
            <div className="card__title">Deposit Funds</div>
            <div className="card__text">Make a deposit of $100 or more to activate your account and begin trading. </div>
          </div>
          <div className="card__img"><img src={img3} alt="" srcset="" /></div>
        </div>
        <div className="start__card_reverse">
          <div className="card__img"><img src={img4} alt="" srcset="" /></div>
          <div className="card__info">
            <div className="card__num">04</div>
            <div className="card__title">Receive Your Earnings</div>
            <div className="card__text" style={{ marginBottom: '40px' }}>Keep an eye on your results and watch your profits grow via our fast and secure back office software.</div>

          </div>
        </div>
        <div className="card__button"><span>get started</span></div>
        <div className="map">
          <Map />
          <div className="map__title">Join Our Community</div>
          <div className="map__subtitle">Join the project name telegram channel for the latest information, news, and updates.</div>
          <div className="map__teleg"><svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.3848 70C56.9533 70 70.3848 56.5685 70.3848 40C70.3848 23.4315 56.9533 10 40.3848 10C23.8162 10 10.3848 23.4315 10.3848 40C10.3848 56.5685 23.8162 70 40.3848 70Z" fill="#31C6F1" />
            <path d="M40.3848 75C59.7147 75 75.3848 59.33 75.3848 40C75.3848 20.67 59.7147 5 40.3848 5C21.0548 5 5.38477 20.67 5.38477 40C5.38477 59.33 21.0548 75 40.3848 75Z" stroke="#31C6F1" stroke-opacity="0.25" stroke-width="10" />
            <path d="M24.1119 39.35L53.0369 28.1975C54.3794 27.7125 55.5519 28.525 55.1169 30.555L55.1194 30.5525L50.1944 53.755C49.8294 55.4 48.8519 55.8 47.4844 55.025L39.9844 49.4975C38.9106 48.5862 38.0675 47.9912 37.3005 47.4633C36.2834 46.7633 36.2201 45.3348 37.1363 44.5071L49.2869 33.53C49.8919 32.9975 49.1519 32.6975 48.3544 33.2275L31.1769 44.0425L23.7719 41.7325C22.1644 41.2225 22.1294 40.125 24.1119 39.35Z" fill="white" />
          </svg>
          </div>
        </div>

      </div>
    </div>
  )
}

export default GetStarted
