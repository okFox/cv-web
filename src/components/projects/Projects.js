import React from 'react';
import Project from './Project';
import './Projects.css';
import PropTypes from 'prop-types';

const Projects = ({ projects }) => {
  const projectList = projects.map((project, i) => (
    <li key={i}><Project name={project.name} desc={project.desc} img={project.img} /></li>
  ));
  //will render projects based on selection of TEAM or SOLO
  return (
    <>
      <div className="projectWrapper">
        <ul>{projectList}</ul>
      </div>
    </>
  );
};
Projects.propTypes = {
  projects: PropTypes.array.isRequired
};
export default Projects;

// 
