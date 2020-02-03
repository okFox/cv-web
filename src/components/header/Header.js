import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';

const Header = ({ name, socials }) => {
  const socialList = socials.map((item, i) => (
    <li key={i}>{item}</li>
  ));
  return (
    <>
      <header>
        <aside><ul>{socialList}</ul></aside>
        <h1>{name}</h1>
      </header>
    </>
  );
};
Header.propTypes = {
  socials: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
};

export default Header;
