import AuthApi from '../apis/auth';

export const signup = async (info: {
  id: string;
  password: string;
}): Promise<boolean> => {
  const api = new AuthApi();
  const duplicateUserIDResult = await api.checkDuplicateUserId(info.id);
  /**
   * 아이디 유효성 및 비밀번호 검증 로직을 세분화 하는게 ux적으로 좋다.
   * 기존 모놀리스식 웹의 경우 form전송을 통해서 페이지 전환이 일어나므로 아이디의 경우 중복검사를
   * 따로 스텝에 넣었는데. form에 입력한 양식이 날아가는 문제 때문이였음.
   * spa로 넘어오면서 그럴 필요가 없긴하지만 사용자 편의를 위해서 id 중복 검사를 여러 방식으로 지원해주는 경우가 보임
   * 사실 유효성 검증은 라이브러리를 쓰는게 합리적이다.
   */
  if (duplicateUserIDResult) {
    console.error('이미 존재하는 아이디입니다.');
    return false;
  }
  if (info.password.length < 8) {
    console.error(
      '비밀번호가 너무 짧습니다. 보안을 위해서 8자리이상으로 설정해주십시오.'
    );
    return false;
  }

  return await api.registerUser(info);
};
