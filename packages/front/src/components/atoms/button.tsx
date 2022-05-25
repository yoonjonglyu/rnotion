import React from 'react';
import Styled from '@emotion/styled';

const Btn = Styled.button`
  min-width: 40px;
  padding: 6px 8px;
  font-size: 1rem;
  color: #fffffff2;
  border: 0.5px solid #E8F9FD;
  border-radius: 6px;
  background: ${props => props.color || '#0AA1DD'};
  &:hover {
    border: 0.5px solid #2155CD;
  }
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
