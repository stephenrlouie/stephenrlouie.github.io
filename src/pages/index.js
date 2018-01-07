import React from 'react'
import Link from 'gatsby-link'
import Container from "../components/container";
import styles from "./index.module.css";

const Section = props =>
  <div>
    <h2>
      {props.title}
    </h2>
    <p>
      {props.text}
    </p>
  </div>

export default () =>
  <div>
    <img src="https://github.com/stephenrlouie/site/raw/master/img/headshot.jpg" className={styles.avatar} alt="Steve's Picture" />
    <Container>
      <Section
        title="Profession"
        text=
        "I'm currently a Software Engineer at Cisco Systems working
        out of the Greater Boston area. Most of my experience has been writing,
        distributed systems, and orchestration software. I mostly write Go
        to develop microservices to be deployed on Kubernetes."
      />
      <Section
        title="Academic"
        text=
        "I graduated from Lehigh University with a Bachelors in Integrated
        Business and Engineering in 2014. I also received my Masters in
        Computer Science from Lehigh University in 2015."
      />
      <Section
        title="Miscellaneous"
        text=
        "You can find me Lindy Hopping at least once a week in the Boston
        area. I enjoy cooking, playing board games and video games, and
        being active in anyway (sports, rowing, lifting)."
      />
    </Container>
  </div>;
