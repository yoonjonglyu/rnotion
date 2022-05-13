class AuthApi {
  apiUri: string;
  constructor() {
    this.apiUri = 'rnotion-user';
    this.useLocalstorage();
  }
  async checkDuplicateUserId(id: string) {
    const database = JSON.parse(localStorage.getItem(this.apiUri) || '{}');
    if (database[id] !== undefined) {
      return true;
    }
    return false;
  }
  async registerUser(info: { id: string; password: string }) {
    const database = JSON.parse(localStorage.getItem(this.apiUri) || '{}');
    database[info.id] = info.password;

    if (database[info.id] !== undefined) {
      localStorage.setItem(this.apiUri, JSON.stringify(database));
      return true;
    }

    return false;
  }
  async signin(info: { id: string; password: string }) {
    const database = JSON.parse(localStorage.getItem(this.apiUri) || '{}');
    if (database[info.id] === undefined) {
      return {
        msg: '잘못된 아이디입니다.',
        flag: false,
      };
    }
    if (
      database[info.id] !== undefined &&
      database[info.id] !== info.password
    ) {
      return {
        msg: '잘못된 비밀번호입니다.',
        flag: false,
      };
    }
    return true;
  }
  useLocalstorage() {
    if (localStorage.getItem(this.apiUri) === null) {
      localStorage.setItem(this.apiUri, JSON.stringify({}));
    }
  }
}

export default AuthApi;
