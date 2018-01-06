import React from 'react'
import Link from 'gatsby-link'
export default () =>
  <div style={{ color: `tomato` }}>
    <h1>Hello Gatsby!</h1>
    <p>This is the paragraph text that I'm putting under this stupid thing</p>
    <img src="https://s-i.huffpost.com/gen/1294091/images/o-PARKS-AND-REC-facebook.jpg" alt="" />
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
