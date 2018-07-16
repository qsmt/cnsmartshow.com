import React, { Component } from 'react';
import {Pagination} from 'react-bootstrap';

import SolutionItem from './SolutionItem';
import PageTitle from '../PageTitle';

const categoryId = 4;
const pageSize = 10;

class Solutions extends Component{


	static path = '/solutions';

    render(){
        return(
			<div className="loading-container">
				<div className="container">
					<PageTitle title={'解决方案'} />
				</div>
			</div>
        )
    }

	_renderItems() {
		const items = this.state.items.map(item => (
			<SolutionItem key={item.id} {...item} />
		));
		return (
			<div className="row">
				{items}
			</div>
		)
	}
}

export default Solutions;
