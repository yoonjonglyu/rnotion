import React from 'react';
import { Link } from 'react-router-dom';

import RegisterForm from './registerForm';

const SignupFeature: React.FC = () => {
  return (
    <article>
      <h2>signup</h2>
      <RegisterForm />
      <Link to="signin">로그인하기</Link>
    </article>
  );
};

export default SignupFeature;
