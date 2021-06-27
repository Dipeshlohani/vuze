import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  margin-top: 20px;
`;

const Section = ({ children }) => {
  return <SectionWrapper>{children}</SectionWrapper>;
};
Section.propTypes = {
  children: propTypes.node.isRequired
};
export default Section;
