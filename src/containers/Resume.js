import React, { Component } from 'react';
import Header from '../components/header/Header';
import Intro from '../components/intro/Intro';
import Stack from '../components/stack/Stack';




class Resume extends Component {
    state = {
      project: 'team' //or solo for conditional rendering
    }
    render() {
      return (
        <>
          <Header />
          <Intro />
          <Stack />
        </>
      );
    }
}


export default Resume;
