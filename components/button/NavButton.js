import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';

const NavbarButton = styled(Button)`
  margin: 0px 10px;
  background: ${props => props.background || 'white'} !important;
  color: ${props => props.color || 'black'} !important;
  border: 0px;
  &:hover {
    background: ${props => props.background || 'white'} !important;
    color: ${props => props.color || 'black'} !important;
  }
`;
const NavButton = props => {
  return <NavbarButton {...props} />;
};

export default NavButton;
