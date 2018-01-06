import React from 'react'
import Link from 'gatsby-link'
export default () =>
  <div style={{ color: `tomato` }}>
    <h1>Hello World!</h1>
    <p>This personal site is under construction</p>
    <img src="https://upload.wikimedia.org/wikipedia/en/c/c5/Bob_the_builder.jpg" alt="" />
    <Link to="/page-2/">Go to page 2</Link>
    <div>
      <Link to="/counter/">Counter</Link>
    </div>
  </div>;

// const IndexPage = () => (
//   <div>
//     <h1>This is a test</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <Link to="/page-2/">Go to page 2</Link>
//   </div>
// )
//
// export default IndexPage
