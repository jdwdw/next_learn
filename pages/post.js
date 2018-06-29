import React from 'react';
import { withRouter } from 'next/router';
import Layout from '../components/MyLayout';

// const Page = withRouter(props => (
//   <Layout>
//     <h1>{props.router.query.title}</h1>
//     <p>This is post content</p>
//   </Layout>
// ))

const Content = withRouter(props => (
  <div>
    <h1>{props.router.query.title}</h1>
    <p>This is post content</p>
  </div>
))

const Page = props => (
  <Layout>
    <Content props={props} />
  </Layout>
)


export default Page;
