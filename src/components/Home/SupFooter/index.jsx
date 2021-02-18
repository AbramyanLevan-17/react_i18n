import React from 'react';

import './index.scss';

const SupFooter = ({ t }) => {
  return (
    <div className='supfooter'>
      <div className="supfooter__left">
        <svg className="supfooter__svg" width="186" height="302" viewBox="0 0 186 302" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M186 121.499L93 0L0 121.499H58.5493V295.112C58.5493 298.916 58.5493 302 58.5493 302H127.613C127.613 302 127.613 302 127.613 295.112V121.499H186Z" fill="white" fill-opacity="0.2" />
        </svg>
        <div className="supfooter__wrapper">
          <div className="supfooter__lable">{t("Don't miss out...")}</div>
          <div className="supfooter__title">{t("Get Started Today!")}</div>
          <div className="supfooter__button"><span>{t("Sign Up")}</span></div>
        </div>
      </div>
      <div className="supfooter__right">
        <svg className="supfooter__svg" width="191" height="298" viewBox="0 0 191 298" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M65.5794 196.344C65.5794 184.32 69.1316 172.843 76.236 161.912C83.6137 150.981 91.5379 142.237 100.009 135.678C108.479 128.846 116.267 120.922 123.371 111.904C130.749 102.886 134.438 93.868 134.438 84.8501C134.438 75.2856 131.159 67.9074 124.601 62.7153C118.043 57.5231 108.889 54.9271 97.1395 54.9271C74.1867 54.9271 57.9285 67.0876 48.3648 91.4085L0 63.5351C8.19743 43.3132 21.1767 27.7368 38.9378 16.806C56.9721 5.60201 77.0558 0 99.1888 0C124.054 0 145.504 7.24163 163.539 21.7249C181.846 35.9349 191 55.6103 191 80.751C191 92.2283 188.541 102.886 183.622 112.724C178.977 122.561 173.239 131.033 166.408 138.138C159.85 144.969 153.155 151.528 146.324 157.813C139.766 163.825 134.028 170.11 129.109 176.668C124.464 183.227 122.142 189.785 122.142 196.344H65.5794ZM118.453 287.752C111.622 294.584 103.424 298 93.8605 298C84.2969 298 76.0994 294.584 69.2682 287.752C62.4371 280.921 59.0215 272.723 59.0215 263.158C59.0215 253.594 62.4371 245.396 69.2682 238.564C76.0994 231.732 84.2969 228.316 93.8605 228.316C103.424 228.316 111.622 231.732 118.453 238.564C125.284 245.396 128.7 253.594 128.7 263.158C128.7 272.723 125.284 280.921 118.453 287.752Z" fill="white" />
        </svg>
        <div className="supfooter__wrapper">
          <div className="supfooter__lable">{t("Our support team is available 24/7")}</div>
          <div className="supfooter__title">{t("Any Questions?")}</div>
          <div className="supfooter__button"><span>{t("Support")}</span></div>
        </div>
      </div>
    </div>
  )
}

export default SupFooter
