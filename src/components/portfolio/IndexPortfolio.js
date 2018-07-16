import React, {Component} from 'react';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

import {PortfolioItem, Portfolio} from './index';
import {PageTitle,IndexLinkButton} from "../../components";

import {portfolioData} from './portfolio-data';

class IndexPortfolio extends Component {

	constructor(props) {
		super(props);
		this.state = {
			items: portfolioData
		};
	}


	render() {
		return (
				<Grid>
					<PageTitle
						title={'成功案例'}
						description={'实施精细化运营 10年行业经验保障'}
					/>
					{
						this._renderItems()
					}
          <IndexLinkButton to={Portfolio.path} text='查看更多案例' />
				</Grid>
		);
	}

	_renderItems() {
		const items = this.state.items.map((item, i) => (
			<PortfolioItem key={i} src={item}/>
		));
		return (
			<Row>
				{items}
			</Row>
		)
	}

}


export default IndexPortfolio;
