import React, {Component} from 'react';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

import map from './map.jpg';
import {PageTitle} from "../../components";

class IndexCareer extends Component {
	render() {
		return (
				<Grid>
					<PageTitle
						title={'加入我们'}
						description={'创新的策划理念 专业的实施团队 丰富的项目经验'}
					/>
					<Row>
						<Col xs={12}>
							<img src={map} style={{width: '100%', paddingTop: 20}} alt={''} />
						</Col>
					</Row>
				</Grid>
		);
	}
}


export default IndexCareer;
