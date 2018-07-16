import React from 'react'
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

import AboutNav from './AboutNav';

export default ({children}) => (
  <div>
    <img src={require('./about.jpg')} style={{width: '100%', height: '20vw'}} alt={''}/>
    <Grid>
      <Row>
        <Col xs={12} sm={2}>
          <AboutNav />
        </Col>
        <Col xs={12} sm={10}>
          {children}
        </Col>
      </Row>
    </Grid>
  </div>
)