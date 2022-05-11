import React, { useState } from 'react';
import Styled from '@emotion/styled';

import useRouter from '../../lib/hooks/router';
import { signin } from '../../lib/hooks/auth';

const Form = Styled.form`
`;

interface SignFormProps {}

const SignForm: React.FC<SignFormProps> = () => {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const router = useRouter();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    /**
     * validation이 필요한 부분 사실 이런 부분은 사람이 일일이 찾아서 막기 귀찮으므로 따로 lib 같은걸 쓰는게 합리적이라 생각된다.
     * 유의미하게 ux적인 측면에서 막는다고하면 글자수 제한, value 정합성(특수문자등) 정도 생각난다.
     */
    if (signin({ id: userId, password: userPassword })) {
      router.push('/workspace');
    }
  };
  const handleUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };
  const handleUserPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(e.target.value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <h2>로그인</h2>
      <label>
        ID:
        <input type="text" value={userId} onChange={handleUserId} />
      </label>
      <label>
        PASSWORD:
        <input
          type="password"
          value={userPassword}
          onChange={handleUserPassword}
        />
      </label>
      <button>로그인</button>
    </Form>
  );
};

export default SignForm;
