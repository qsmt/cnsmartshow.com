import React, {Component} from 'react';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

import Solutions from './Solutions';
import {PageTitle, IndexLinkButton} from "../../components";
import styles from './IndexSolutions.module.css';

class IndexSolutions extends Component {
	render() {
		return (
				<Grid>
					<PageTitle
						title={'解决方案'}
					/>
					<Row>
						<Col xs={12}>
								<ul className={styles.list}>
									<li>甘肃科技馆展陈布展设计</li>
									<li>朔州科技馆概念设计方案第一名</li>
									<li>咸阳科技馆策划设计</li>
									<li>福建科技馆新馆 方案设计征集第一名</li>
									<li>黑龙江科技馆 总体策划第一名</li>
									<li>唐山科技馆 率先提出招投标流程</li>
								</ul>
						</Col>
					</Row>
          <IndexLinkButton to={Solutions.path} text='查看更多解决方案' />
				</Grid>
		);
	}
}


export default IndexSolutions;
