import { Row, Col, Button } from 'antd';
import React from 'react';
import styled from 'styled-components';
import Container from '../layout/Container';
import Link from "next/link";
import {useRouter} from "next/router";
import { BiSun, BiMoon } from 'react-icons/bi';
import NavButton from '../button/NavButton';

const NavbarWrapper = styled.section`
  height: 80px;
  padding: 30px 0px;
  color: white;
`;
const NavbarBrand = styled.img`
  height: 30px;
  width: 35px;
`;
const NavLink = styled.a`
  color: white !important;
  padding: 0px 20px;
  &:hover {
    color: white !important;
  }
`;
const CircularButton = styled(Button)`
  background: transparent;
  color: white;
  padding: 1px;
  margin: 0px 3px;
`;
const Navbar = () => {
  const router = useRouter();
  return (
    <NavbarWrapper>
      <Container>
        <Row justify="space-between" align="middle">
          <Col>
            <Row>
              <NavbarBrand src="/assets/logo.svg" alt="logo" />
              <Row>
                <NavLink to="">Home</NavLink>
                <NavLink to="">Portfolio</NavLink>
                <NavLink to="">Browse</NavLink>
                <NavLink to="">Artist</NavLink>
                <NavLink to="">About</NavLink>
              </Row>
            </Row>
          </Col>
          <Col>
            <Row justify="space-around">
              <Col>
                <CircularButton icon={<BiSun />} type="link" />/
                <CircularButton icon={<BiMoon />} type="link" />
              </Col>
              <NavButton
                background="transparent"
                color="white"
                onClick={() => router.push('/login')}
                type="default"
              >
                Login
              </NavButton>
              <NavButton background="#EA685B" color="white" type="default">
                Sign Up
              </NavButton>
            </Row>
          </Col>
        </Row>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
