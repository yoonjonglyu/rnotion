import { atom } from 'recoil';

export const AuthState = atom({
  key: 'isAuth',
  default: false,
});
