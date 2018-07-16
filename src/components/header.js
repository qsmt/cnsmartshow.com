import React from 'react'
import Link from 'gatsby-link'

import {
  Navbar,
  Nav,
  NavItem,
} from 'react-bootstrap';

import {LinkContainer} from 'react-router-bootstrap';

export default () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand style={{color: '#0f0'}}>
        <Link to='/'>
          <span><img style={{height: '100%'}} src={require('../../static/logo.png')} alt={''}/></span>
          青色麦田
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <LinkContainer to="/" exact={true}><NavItem eventKey={1}>首页</NavItem></LinkContainer>
        <LinkContainer to={'/about'}><NavItem eventKey={2} href="#">关于我们</NavItem></LinkContainer>
        <LinkContainer to={'/portfolio'}><NavItem eventKey={3} href="#">成功案例</NavItem></LinkContainer>
        <LinkContainer to={'/solutions'}><NavItem eventKey={4} href="#">解决方案</NavItem></LinkContainer>
        <LinkContainer to={'/partners'}><NavItem eventKey={5} href="#">伙伴计划</NavItem></LinkContainer>
        <LinkContainer to={'/career'}><NavItem eventKey={6} href="#">加入我们</NavItem></LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)