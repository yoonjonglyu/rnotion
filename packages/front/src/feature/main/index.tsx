import React from 'react';

import BasicLayout from '../../components/layouts/basicLayout';
import Loading from '../../components/atoms/loading';
import Intro from './intro';

import { checkAuth } from '../../lib/hooks/auth';

const MainFeature: React.FC = () => {
  const { isAuth, setIsAuth } = checkAuth();

  return <BasicLayout>{isAuth ? <Loading /> : <Intro />}</BasicLayout>;
};

export default MainFeature;
