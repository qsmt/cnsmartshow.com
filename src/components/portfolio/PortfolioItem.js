import React from 'react';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

import defaultImage from '../../images/no-image-box.png';
import './portfolio.css'

class PortfolioItem extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			url:defaultImage
		};
	}


	render() {
		return (
			<Col md={4} sm={6} xs={12} className="portfolio-item">
				<div className="title">

				</div>
				<div className="img">
					<img src={this.props.src || defaultImage}  alt={''}/>
				</div>
			</Col>
		);
	}
}

export default PortfolioItem;
