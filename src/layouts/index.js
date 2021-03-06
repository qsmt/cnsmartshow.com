import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {Grid} from 'react-bootstrap';

import Header from '../components/header'
import {Footer} from '../components';
// import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import './qsmt.css'


const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
      {children()}
    <Footer/>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
