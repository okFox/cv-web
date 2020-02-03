import React from 'react';
import Project from './Project';
import './Projects.css';

const Projects = () => {

  //will render projects based on selection of TEAM or SOLO
  return (
    <>
      <div className="projectWrapper">
        <div className="projectNav">
          <h2>Projects</h2>
          <button>Team</button><button>Solo</button>
        </div>
        <div className="projectBox">
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </>
  );
};

export default Projects;
