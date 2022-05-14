import React from 'react';
import Styled from '@emotion/styled';

const Btn = Styled.button`
  min-width: 40px;
  padding: 4px;
  border: none;
  background: ${props => props.color || 'lightblue'};
`;

interface ButtonProps {
  color?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = props => {
  const { color, children } = props;
  return <Btn color={color}>{children}</Btn>;
};

export default Button;
