import React from 'react';

import BasicLayout from '../../components/layouts/basicLayout';
import RegisterForm from './registerForm';
import ALink from '../../components/atoms/aLink';

const SignupFeature: React.FC = () => {
  return (
    <BasicLayout>
      <h2>signup</h2>
      <RegisterForm />
      <ALink to="/signin">로그인하기</ALink>
    </BasicLayout>
  );
};

export default SignupFeature;
