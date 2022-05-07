import React from 'react';

import Loading from '../../components/atoms/loading';
import Intro from './intro';

import { checkAuth } from '../../lib/hooks/auth';

const MainFeature: React.FC = () => {
  const { isAuth, setIsAuth } = checkAuth();

  return <main>{isAuth ? <Loading /> : <Intro />}</main>;
};

export default MainFeature;
