import React, {Component} from 'react';
import ImagePage from '../ImagePage';

import image1 from './1.jpg';
import image2 from './2.jpg';

const data = [
    {
        title: '伙伴计划',
        image: image1,
    },
    {
        title: '合作品牌',
        image: image2
    },
];

class Partners extends Component {
    static path = '/partners';


    render() {
        return (
            <ImagePage data={data}/>
        );
    }

}

export default Partners;
