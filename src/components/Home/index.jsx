import React from 'react';

import Adv from './Adv'
import GetStarted from './GetStarted';
import Inc from './Inc';
import "./index.scss";
import Leadership from './Leader';
import Profit from './Profit';
import SupFooter from './SupFooter';

const Home = ({t}) => {
  return (
    <>
      <Adv t={t}/>
      <Profit t={t}/>
      <Leadership t={t}/>
      <Inc/>
      <GetStarted t={t}/>
      <SupFooter t={t}/>
    </>
  )
}

export default Home
