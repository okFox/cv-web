import React from 'react';
import './Stack.css';
import PropTypes from 'prop-types';


const Stack = ({ stack }) => {  
  const stackList = stack.map((stack, i) => (
    <li key={i}>{stack}</li>
  ));


  return (
    <>
      <section>
        <h2>Tech Stack</h2>
        <ul>
          {stackList}
        </ul>
      </section>
    </>
      
  );
};

Stack.propTypes = {
  stack: PropTypes.array.isRequired
};


export default Stack;

