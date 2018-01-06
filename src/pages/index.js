import React from 'react'
import Link from 'gatsby-link'
import Container from "../components/container";
import styles from "./index.module.css";

const User = props =>
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.section}>Profession</h2>
      <p className={styles.excerpt}>
        {props.professional}
      </p>
      <h2 className={styles.section}>Academic</h2>
      <p className={styles.excerpt}>
        {props.academic}
      </p>
      <h2 className={styles.section}>Miscellaneous</h2>
      <p className={styles.excerpt}>
        {props.misc}
      </p>
    </div>
  </div>

export default () =>
  <div>
    <Container>
      <User
        avatar="https://github.com/stephenrlouie/site/raw/master/img/headshot.jpg"
        professional=
        "I'm currently a Software Engineer at Cisco Systems working
        out of the Greater Boston area. I primarily develop in Go
        and focus on writing microservices to be deployed on Kubernetes."
        academic=
        "I graduated from Lehigh University with a Bachelors in Integrated
        Business and Engineering in 2014. I also received my Masters in
        Computer Science from Lehigh University in 2015."
        misc=
        "You can find me Lindy Hopping at least once a week in the Boston
        area. I enjoy cooking, playing board games and video games, and
        being active in anyway (sports, rowing, lifting)."
      />
    </Container>
  </div>;
