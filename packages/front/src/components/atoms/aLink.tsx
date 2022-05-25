import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import Styled from '@emotion/styled';

const A = Styled(Link)`
  min-width: 40px;
  padding: 4px 10px;
  font-size: 1rem;
  color: #fffffff2;
  text-decoration: none;
  border: 0.5px solid #E8F9FD;
  border-radius: 6px;
  background: ${props => props.color || '#0AA1DD'};
  &:hover {
    border: 0.5px solid #2155CD;
  }
`;

interface ALinkProps extends LinkProps {
  color?: string;
}

const ALink: React.FC<ALinkProps> = props => {
  return <A {...props}></A>;
};

export default ALink;
