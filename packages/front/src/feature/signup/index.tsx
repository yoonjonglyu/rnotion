import React from 'react';

import RegisterForm from './registerForm';
import ALink from '../../components/atoms/aLink';

const SignupFeature: React.FC = () => {
  return (
    <article>
      <h2>signup</h2>
      <RegisterForm />
      <ALink to="/signin">로그인하기</ALink>
    </article>
  );
};

export default SignupFeature;
