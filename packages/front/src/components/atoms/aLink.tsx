import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import Styled from '@emotion/styled';

const A = Styled(Link)`
  min-width: 40px;
  padding: 4px;
  border: none;
  color: inherit;
  text-decoration: none;
  background: ${props => props.color || 'lightblue'};
  &:hover {
    color: red;
  }
`;

interface ALinkProps extends LinkProps {
  color?: string;
}

const ALink: React.FC<ALinkProps> = props => {
  return <A {...props}></A>;
};

export default ALink;
