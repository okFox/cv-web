import React, { Component } from 'react';
import Header from '../components/header/Header';
import Intro from '../components/intro/Intro';
import Stack from '../components/stack/Stack';
import Experience from '../components/experience/Experience';
import Projects from '../components/projects/Projects';
import styles from './Resume.css';
import { resume } from './resume.json';

class Resume extends Component {
    state = {
      projectSelect: 'team', //or solo for conditional rendering
      name: resume.header.name,
      socials: resume.header.socials,
      intro: resume.intro,
      stack: resume.stack,
      projects: resume.projects,
      experience: resume.experience
    }
    render() {
      const { projectSelect, name, socials, intro, stack, projects, experience } = this.state;
      return (
        <>
          <div className={styles.resumeWrapper}>
            <Header name={name} socials={socials} />
            <Intro intro={intro} />
            <Stack stack={stack} />
            <Projects projects={projects} projectSelect={projectSelect} />
            <Experience experience={experience} />
          </div>
        </>
      );
    }
}


export default Resume;
