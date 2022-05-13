import { useRecoilState } from 'recoil';

import { AuthState } from '../../store/auth';
import AuthApi from '../apis/auth';

export const checkAuth = () => {
  const [isAuth, setIsAuth] = useRecoilState(AuthState);

  return {
    isAuth,
    setIsAuth,
  };
};

export const signin = async (info: {
  id: string;
  password: string;
}): Promise<boolean> => {
  const api = new AuthApi();
  const result = await api.signin(info);
  if (typeof result === 'object') {
    console.error(result.msg);
    return result.flag;
  }
  return true;
};
