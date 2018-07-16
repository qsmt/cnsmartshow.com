import React from 'react'
import {
  Grid,
  Row,
  Col,
  Nav,
  NavItem,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


export default () => (
  <Nav bsStyle="pills" className={'qsmt-sub-nav'}>
    <LinkContainer to={'/about'} exact={true}>
      <NavItem eventKey={1}>
        公司简介
      </NavItem>
    </LinkContainer>
    <LinkContainer to={'/about/honor'}>
      <NavItem eventKey={2} title="Item">
        资质荣誉
      </NavItem>
    </LinkContainer>
    <LinkContainer to={'/about/scopes'}>
      <NavItem eventKey={3}>
        专注领域
      </NavItem>
    </LinkContainer>
    <LinkContainer to={'/about/worth'}>
      <NavItem eventKey={4}>
        优势价值
      </NavItem>
    </LinkContainer>
  </Nav>
)