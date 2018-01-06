import React from "react";
import Link from "gatsby-link";
import Headroom from "react-headroom"

const ListLink = props =>
  <li style={{display: `inline-block`, marginRight: `1rem`, padding: "5px 0px 5px 0px"}}>
    <a href={props.url}>
      <img alt={props.alt} src={props.img}  height="30px"/>
    </a>
  </li>

export default ({ children }) => (
  <div>
    <Headroom>
      <div style={{
        background: 'rgb(168, 182, 191)',
        boxShadow: '1px 1px 1px rgba(0,0,0,0.25)',
      }}>
        <div style={{
          maxWidth: 600,
          margin: `0 auto`,
        }}>
            <h1 style={{display: `inline` }}>Steve Louie</h1>
            <ul style={{listStyle: `none`, float: `right` }}>
              <ListLink
                url="https://www.linkedin.com/in/stlouie/"
                alt="LinkedIn"
                img="https://image.flaticon.com/icons/png/512/174/174857.png"
              />
              <ListLink
                url="https://github.com/stephenrlouie"
                alt="GitHub"
                img="https://image.flaticon.com/icons/svg/25/25231.svg"
              />
              <ListLink
                url="mailto:stephen.r.louie@gmail.com"
                alt="Mail"
                img="https://image.flaticon.com/icons/png/512/281/281769.png"
              />
            </ul>
        </div>
      </div>
    </Headroom>
  <div style= {{
    margin: '3rem auto',
    maxWidth: 600
  }}>
      {children()}
  </div>
  </div>
);
