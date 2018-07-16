import React, { Component } from "react";
import Link from "gatsby-link";
import {LinkContainer} from 'react-router-bootstrap';
import {
  Grid,
  Pager,
  Row,
  Col,
} from 'react-bootstrap';
import { PageTitle } from '../components'

const NavLink = props => {
  if (!props.test) {
    // return <Link to={props.url}>{props.text}</Link>;
    return <LinkContainer to={props.url}><Pager.Item>{props.text}</Pager.Item></LinkContainer>
  } else {
    return <Pager.Item disabled>{props.text}</Pager.Item>;
  }
};

const IndexPage = ({ data, pathContext }) => {console.log(pathContext)
  const { group, index, first, last, pageCount } = pathContext;
  const previousUrl = '/' + pathContext.pathPrefix + '/' + (index - 1 == 1 ? "" : (index - 1).toString());
  const nextUrl = '/' + pathContext.pathPrefix + '/' + (index + 1).toString();

  return (
    <Grid>
      {/*<h4>{pageCount} Posts</h4>*/}
      <PageTitle title='解决方案'/>
      {group.map(({ node }) => (
        <Row key={node.id} className="text-center">
          {/*<div className="date">{node.frontmatter.date}</div>*/}
          <Link className="blogUrl" to={node.fields.slug}>
            {node.frontmatter.title}
          </Link>
          {/*<div>{node.excerpt}</div>*/}
        </Row>
      ))}
      <Pager>
        <NavLink test={first} url={previousUrl} text="上一页" />
        {' '}
        <NavLink test={last} url={nextUrl} text="下一页" />
      </Pager>
    </Grid>
  );
};
export default IndexPage;