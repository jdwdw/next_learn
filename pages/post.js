import React from 'react';
import { withRouter } from 'next/router';
import Markdown from 'react-markdown'
// import fetch from 'isomorphic-unfetch'
import Layout from '../components/MyLayout';

// const Page = withRouter(props => (
//   <Layout>
//     <h1>{props.router.query.title}</h1>
//     <p>This is post content</p>
//   </Layout>
// ))

// const Content = withRouter(props => (
//   <div>
//     <h1>{props.router.query.title}</h1>
//     <p>This is post content</p>
//   </div>
// ))

// const Page = props => (
//   <Layout>
//     <Content props={props} />
//   </Layout>
// )

export default withRouter(props => (
  <Layout>
    <h1>{props.router.query.title}</h1>
    <div className="markdown">
      <Markdown source={`
  This is our blog post.
  Yes. We can have a [link](/link).
  And we can have a title as well.
  
  ### This is a title
  
  And here's the content.
       `}
      />
    </div>
    <style jsx global>{`
       .markdown {
         font-family: 'Arial';
       }
  
       .markdown a {
         text-decoration: none;
         color: blue;
       }
  
       .markdown a:hover {
         opacity: 0.6;
       }
  
       .markdown h3 {
         margin: 0;
         padding: 0;
         text-transform: uppercase;
       }
    `}
    </style>
  </Layout>
))

// const Post = props => (
//   <Layout>
//     <h1>{props.show.name}</h1>
//     <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
//     <img src={props.show.image.medium} />
//   </Layout>
// )

// Post.getInitialProps = async function (conntext) {
//   const { id } = conntext.query;
//   const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
//   const show = await res.json()
//   console.log(`Fetched show:${show.name}`);
//   return { show }
// }


// export default Post;
