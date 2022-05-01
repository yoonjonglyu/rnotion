import React from 'react';
import { Link } from 'react-router-dom';
import Styled from '@emotion/styled';

const Container = Styled.article`
  width: 800px;
  margin: 0 auto;
`;
const LoginBox = Styled.section`
  margin: 0 auto;
`;
const HeadLines = Styled.hgroup`
  margin: 0 auto;
`;

const LoginTitle = Styled.h2`
  text-align: center;
`;

interface IntroProps {}

const Intro: React.FC<IntroProps> = () => {
  return (
    <Container>
      <HeadLines>
        <h1>RNotion.</h1>
        <h2>가입하신 아이디로 로그인 해주세요.</h2>
        <h5>* 아이디가 없으시다면 회원가입을 해주세요.</h5>
      </HeadLines>
      <LoginBox>
        <Link to="signin">로그인하기</Link><br/>
        <Link to="signup">회원가입하기</Link>
      </LoginBox>
    </Container>
  );
};

export default Intro;
