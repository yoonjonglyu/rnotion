import React, { useState } from 'react';

import Loading from '../../components/atoms/loading';
import Intro from './intro';

const MainFeature: React.FC = () => {
  const [isAuth, setIsAuth] = useState(false);

  return <main>{isAuth ? <Loading /> : <Intro />}</main>;
};

export default MainFeature;
