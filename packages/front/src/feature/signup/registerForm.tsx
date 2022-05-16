import React, { useState } from 'react';

import useRouter from '../../lib/hooks/router';
import { signup } from '../../lib/hooks/register';

import Button from '../../components/atoms/button';

interface RegisterFormProps {}

const RegisterForm: React.FC<RegisterFormProps> = () => {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (await signup({ id: userId, password: userPassword })) {
      router.push('/signin');
    }
  };
  const handleUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };
  const handleUserPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>회원가입</h2>
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
      <Button>회원가입하기</Button>
    </form>
  );
};

export default RegisterForm;
