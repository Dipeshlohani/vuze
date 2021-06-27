import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h1`
  color: white;
  font-size: 26px;
  text-transform: uppercase;
  font-weight: 300;
  &:before {
    display: inline-block;
    content: '';
    border-left: 0.4rem solid #ef9f62;
    height: 35px;
    margin-right: 5px;
    margin-bottom: -6px;
  }
`;
const SectionHeading = props => {
  return <StyledHeading {...props} />;
};

export default SectionHeading;
