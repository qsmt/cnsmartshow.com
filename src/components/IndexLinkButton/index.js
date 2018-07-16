import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

import styles from './index.module.css';

export default ({ to, text }) => (
  <Row>
    <Col xs={12} className={'text-center ' + styles.button}>
      <LinkContainer to={to}>
        <a className="btn btn-default btn-lg">{text}</a>
      </LinkContainer>
    </Col>
  </Row>
)