import React from 'react';

interface RegisterFormProps {}

const RegisterForm: React.FC<RegisterFormProps> = () => {
  return (
    <form>
      <label>
        이메일:
        <input />
      </label>
      <label>
        비밀번호:
        <input />
      </label>
    </form>
  );
};

export default RegisterForm;
