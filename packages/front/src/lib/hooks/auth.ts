import { useRecoilState } from 'recoil';

import { AuthState } from '../../store/auth';

export const checkAuth = () => {
  const [isAuth, setIsAuth] = useRecoilState(AuthState);

  return {
    isAuth,
    setIsAuth,
  };
};
