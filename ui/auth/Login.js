import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';

const Login = () => {
  return (
    <Row justify="center">
      <Col md={14} style={{ height: '100vh' }}>
        <div
          style={{
            background:
              'url("https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=1000") center no-repeat',
            height: '100%'
          }}
        />
      </Col>
      <Col
        md={10}
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: 30
        }}
      >
        <h1>Welcome to Vuze</h1>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          //   onFinish={onFinish}
          //   onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
