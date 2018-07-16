import React, {Component} from 'react';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

import aboutImage from './about.jpg';
import {PageTitle} from "../../components";
import styles from './IndexAbout.module.css';

const descriptions = [
	'青色麦田品牌创始于1999年，旗下拥有北京世纪和有科技有限公司、和有建筑装饰(北京)有限公司两个公司，业务涉及互动科技和创意展示两大板块。针对各类新建、改造的科博场馆，青色麦田整合美、欧、日等国内外先进设计资源，提供从概念策划到设计、施工管理的一体化服务解决方案。',
	'青色麦田管理体系健全，拥有中国展览馆协会展示工程企业一级资质、中国会展经济研究会展陈工程企业一级资质、ISO9001质量管理体系认证、北京市高新技术企业等多项认证资质，拥有数十项自有品牌软件著作权和国家专利证书。',
	'青色麦田有着良好的业界知名度和合作精神。17年来，青色麦田已经为近四百家政府、企业、公益机构提供了包括概念策划、展陈设计、展项研发、工程实施等各类场馆创意展示服务。2008年，承接了国家电网奥运展示馆、海尔奥运展厅、联想品牌体验中心、李宁博物馆等大型项目。2010年，成功实施并管理上海世博会航空馆、石油馆、万科企业馆等大型场馆的多媒体展示集成项目。'
];

class IndexAbout extends Component {
	render() {
		return (
			<div>
				<img src={aboutImage} style={{width: '100%', height: '20vw', minHeight: 150}} alt={'about'} />
				<Grid>
					<PageTitle
						title={'青色麦田'}
					/>
					<Row>
						<Col xs={12}>
							<ul className={styles.list}>
								{descriptions.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}


export default IndexAbout;
