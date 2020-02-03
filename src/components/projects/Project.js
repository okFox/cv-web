import React from 'react';
import PropTypes from 'prop-types';


const Project = ({ name, img, desc }) => {
  return (
    <>
      <h3>{name}</h3>
      <img src={img} />
      <p>{desc}</p>
    </>
  );
};
Project.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default Project;
