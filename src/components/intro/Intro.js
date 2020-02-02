import React, { Component } from 'react';
import { text } from './intro.json';
import './Intro.css';

class Intro extends Component {
  render() {
    return (
      <p>
        {text}
      </p>
    );
  }
}

export default Intro;
