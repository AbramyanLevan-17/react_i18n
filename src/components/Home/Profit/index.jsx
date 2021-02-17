import React, { useState } from 'react';
import Planner from '../Planner';

import Slider from '../Slider'
import Calc from './Calc';
import './index.scss';

const Profit = ({ t }) => {

  const planner = [
    {
      id: 1,
      name: t('Week'),
    },
    {
      id: 2,
      name: t('Month'),
    },
    {
      id: 3,
      name: t('One Year'),
    },
    {
      id: 4,
      name: t('Three Year'),
    }
  ]



  return (
    <div className='profit'>
      <div className="profit__wrapper">
        <div className="profit__title">{t('Profit Simulation')}</div>
        <div className="profit__slider">
          <div className="slider__wrapper">
            <Calc />
            <div className="profit__row">
              <div className="profit__text">{t("amount")}</div>
              <Slider />
            </div>
            <div className="profit__row-2">
              <div className="profit__text">{t("earn")}</div>
              <div className="profit__planner planner">
                {planner.map(item => {
                  return (
                    <Planner
                      key={item.id}
                      name={item.name}

                    />
                  )
                })}
              </div>
            </div>
            <div className="profit__estimate">
              <div className="profit__border">
                <div className="profit__lable">{t('Estimated earnings')}</div>
                <div className="profit__amount">$150.00</div>
              </div>
            </div>
          </div>
        </div>
        <div className="profit__start"><span>{t("Get Started")}</span></div>
      </div>

    </div>
  )
}

export default Profit
