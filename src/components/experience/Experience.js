import React from 'react';
import './Experience.css';
import PropTypes from 'prop-types';

const Experience = ({ experience }) => {  
  const xpList = experience.map((experience, i) => (
    <li key={i}>{experience}</li>
  ));
  return (
    <>
      <div className="experience"> 
        <nav>
          <h2>Experience</h2>
          <h3>Music</h3>
          <ul>
            {xpList}
          </ul>
        </nav>
        <section>
          <p>
            All of the cool stuff I did.  rendered conditionally.
          </p>
        </section>
      </div>
    </>
  );
};
Experience.propTypes = {
  experience: PropTypes.array.isRequired
};

export default Experience;
