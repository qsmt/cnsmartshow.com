import React, {Component} from 'react';

import PortfolioItem from './PortfolioItem';

import {portfolioData} from '../portfolio/portfolio-data';

import PageTitle from '../PageTitle';

class Portfolio extends Component {

	constructor(props) {
		super(props);
		this.state = {
			items: portfolioData
		}
	}

	static path = '/portfolio';


	render() {
		return (
			<div className="loading-container">
				<div className="container">
					<PageTitle title={'成功案例'}/>
					{this.state.items &&
					this._renderItems()
					}
				</div>
				{this.state.loading &&
				<div className="loading"/>}
			</div>
		)
	}

	_renderItems() {
		const items = this.state.items.map((item, i) => (
			<PortfolioItem key={i} src={item}/>
		));
		return (
			<div className="row">
				{items}
			</div>
		)
	}

}

export default Portfolio;
