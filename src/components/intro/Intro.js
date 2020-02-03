import React from 'react';
import './Intro.css';
import PropTypes from 'prop-types';

const Intro = ({ intro }) => {

  return (
    <p>
      {intro}
    </p>
  );
};

Intro.propTypes = {
  intro: PropTypes.string.isRequired
};

export default Intro;
