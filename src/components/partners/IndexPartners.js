import React, {Component} from 'react';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

import pinpai from './pinpai.jpg';
import {PageTitle} from "../../components";

class IndexPartners extends Component {
	render() {
		return (
				<Grid>
					<PageTitle
						title={'伙伴计划'}
					/>
					<Row>
						<Col xs={12}>
							<img src={pinpai} style={{width: '100%', paddingTop: 20}} alt={''} />
						</Col>
					</Row>
				</Grid>
		);
	}
}


export default IndexPartners;
