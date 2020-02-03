import React, { Component } from 'react';
import Header from '../components/header/Header';
import Intro from '../components/intro/Intro';
import Stack from '../components/stack/Stack';
import Experience from '../components/experience/Experience';
import Projects from '../components/projects/Projects';
import styles from './Resume.css';

class Resume extends Component {
    state = {
      project: 'team' //or solo for conditional rendering
    }
    render() {
      return (
        <>
          <div className={styles.resumeWrapper}>
            <Header className={styles.headerBox} />
            <Intro className={styles.introBox} />
            <Stack className={styles.stackBox} />
            <Projects className={styles.projectsBox} />
            <Experience className={styles.xpBox} />
          </div>
        </>
      );
    }
}


export default Resume;
