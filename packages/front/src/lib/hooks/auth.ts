import { useRecoilState } from 'recoil';

import { AuthState } from '../../store/auth';

export const checkAuth = () => {
  const [isAuth, setIsAuth] = useRecoilState(AuthState);

  return {
    isAuth,
    setIsAuth,
  };
};

export const signin = (info: { id: string; password: string }): boolean => {
  const tmpInfo: typeof info = {
    id: 'user',
    password: '1234',
  };
  if (info.id !== tmpInfo.id) {
    console.error('잘못된 아이디입니다.');
    return false;
  }
  if (info.password !== tmpInfo.password) {
    console.error('잘못된 비밀번호입니다.');
    return false;
  }
  return true;
};
