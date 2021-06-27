import React from 'react';
import propTypes from 'prop-types';
import { Col, Row } from 'antd';

const Container = ({ children }) => {
  return (
    <Row justify="center">
      <Col md={22}>{children}</Col>
    </Row>
  );
};
Container.propTypes = {
  children: propTypes.node.isRequired
};
export default Container;
