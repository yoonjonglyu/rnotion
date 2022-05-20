import React from 'react';
import Styled from '@emotion/styled';

const Header = Styled.header`
`;
const Main = Styled.main`
`;
const Footer = Styled.footer`
`;

interface BasicLayoutProps {
  header?: React.ReactNode;
  children?: React.ReactNode;
}

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  const { header, children } = props;
  return (
    <>
      <Header>{header}</Header>
      <Main role="main">{children}</Main>
      <Footer>
        <small>&copy; 류윤종</small>
      </Footer>
    </>
  );
};

export default BasicLayout;
