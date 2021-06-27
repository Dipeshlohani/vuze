import { Card } from 'antd';
import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledCard = styled(Card)`
  height: ${props => props.height}px;
  border: 0px;
  width: 100%;
  background: url('${props => props.background}') no-repeat;
  background-size: cover;

  .ant-card-body {
    padding: 0px;
  }
`;

const BannerCard = props => {
  const { children } = props;
  return <StyledCard {...props}>{children}</StyledCard>;
};
BannerCard.propTypes = {
  children: propTypes.node.isRequired
};

export default BannerCard;
