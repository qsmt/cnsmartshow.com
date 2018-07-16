import React from "react";
import {Grid} from 'react-bootstrap';

import {PageTitle} from '../components'

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Grid>
      <PageTitle title={post.frontmatter.title} />
      {/*<div dangerouslySetInnerHTML={{ __html: post.html }} />*/}
    </Grid>
  );
};

export const query = graphql`
  query SolutionDetailQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;