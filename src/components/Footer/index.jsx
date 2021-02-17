import React from 'react';

import "./index.scss"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__left">
          <div className="left__wrapper">
            <div className="left__logo">LOGO</div>
            <div className="left__info">
              <span>Copyright © 2020, <b>Project name</b></span>
              <div className="left__text">All trademarks and copyrights belong to their respective owners.</div>
            </div>
          </div>
        </div>
        <div className="footer__right">
          <div className="right__wrapper">
            <div className="right__column-1">
              <div className="column__title">QUICKLINKS</div>
              <div className="column__text">Terms of Use</div>
              <div className="column__text">Privacy Policy</div>
              <div className="column__text">AML Policy</div>
              <div className="column__text">Refund Policy</div>
              <div className="column__text">Risks</div>
            </div>
            <div className="right__column-2">
              <div className="column__title">CONTACT</div>
              <div className="column__text"><a href="mailto:support@projectname.com">support@projectname.com</a></div>
              <div className="column__text">Project name LTD, registered in Hong Kong</div>
              <div className="right__socials">
                <svg className="right__item" width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.37929 0C0.61712 0 0 0.626039 0 1.39922V23.9621C0 24.7351 0.617021 25.3613 1.37929 25.3613H13.3533V15.5422H10.0946V11.7135H13.3533V8.89046C13.3533 5.61479 15.3261 3.83172 18.2066 3.83172C19.5864 3.83172 20.7712 3.93577 21.1168 3.98241V7.40513H19.1191C17.5526 7.40513 17.2487 8.16055 17.2487 9.26871V11.7135H20.9864L20.4983 15.5422H17.2487V25.3613H23.6207C24.3826 25.3613 25 24.7352 25 23.9621V1.39922C25 0.626039 24.3827 0 23.6207 0H1.37929Z" fill="#C4C6C8" />
                </svg>
                <svg className="right__item" width="36" height="26" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.933 0C10.8986 0 3.86443 0.5446 2.31866 1.63428C-0.772887 3.81363 -0.772887 21.4698 2.31866 23.6492C5.41018 25.8285 30.4564 25.8285 33.5479 23.6492C36.6395 21.4698 36.6395 3.81363 33.5479 1.63428C32.0022 0.5446 24.9675 0 17.933 0ZM14.3656 7.35586L23.418 12.642L14.3656 17.9276V7.35586Z" fill="#C4C6C8" />
                </svg>
                <svg className="right__item" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.25365 0C3.2532 0 0 3.29194 0 7.33779V17.9477C0 21.9936 3.2532 25.2837 7.25365 25.2837H17.8074C21.8078 25.2837 25.061 21.9936 25.061 17.9477V7.33779C25.061 3.29194 21.8078 0 17.8074 0H7.25365ZM7.25365 2.17357H17.8074C20.6545 2.17357 22.9137 4.45833 22.9137 7.33779V17.9477C22.9137 20.8272 20.6545 23.1101 17.8074 23.1101H7.25365C4.40647 23.1101 2.14915 20.8272 2.14915 17.9477V7.33779C2.14915 4.45833 4.40647 2.17357 7.25365 2.17357ZM19.2563 4.34712C18.4261 4.34712 17.7535 5.02736 17.7535 5.86696C17.7535 6.70659 18.4261 7.38682 19.2563 7.38682C20.0865 7.38682 20.7591 6.70659 20.7591 5.86696C20.7591 5.02736 20.0865 4.34712 19.2563 4.34712ZM12.5305 6.13207C8.98812 6.13207 6.0938 9.05925 6.0938 12.6418C6.0938 16.2244 8.98812 19.1516 12.5305 19.1516C16.0729 19.1516 18.969 16.2244 18.969 12.6418C18.969 9.05925 16.0729 6.13207 12.5305 6.13207ZM12.5305 8.30564C14.9116 8.30564 16.8199 10.2337 16.8199 12.6418C16.8199 15.05 14.9116 16.9781 12.5305 16.9781C10.1494 16.9781 8.24295 15.05 8.24295 12.6418C8.24295 10.2337 10.1494 8.30564 12.5305 8.30564Z" fill="#C4C6C8" />
                </svg>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bot"></div>
    </>
  )
}

export default Footer
