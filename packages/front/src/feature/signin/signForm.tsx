import React from 'react';
import { Link } from 'react-router-dom';
import Styled from '@emotion/styled';

const Form = Styled.form`
`;

interface SignFormProps {}

const SignForm: React.FC<SignFormProps> = () => {
  return (
    <Form>
      <h2>로그인</h2>
      <label>
        ID:
        <input type="text" />
      </label>
      <label>
        PASSWORD:
        <input type="text" />
      </label>
      <button>로그인</button>
    </Form>
  );
};

export default SignForm;
