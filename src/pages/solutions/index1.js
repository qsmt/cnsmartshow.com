import React from 'react';
import Link from "gatsby-link";

import {Solutions} from '../../components';

// export default Solutions;
export default ({ data }) => {
  console.log(data);
  // return <Solutions />;
  return (
    <div>
      <h1 display={"inline-block"} style={{borderBottom: 1, borderBottomStyle: 'solid'}}>
        Amazing Pandas Eating Things
      </h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            css={{ textDecoration: `none`, color: `inherit` }}
          >
          <h3>
            {node.frontmatter.title}{" "}
            <span color="#BBB">— {node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
          <p>{node.html}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
          html
        }
      }
    }
  }
`;