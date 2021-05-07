import React from 'react';
import Commons from './Commons';
import web1 from '../src/images/W2.jpg'


const About=()=> {
  return (
    <Commons name='Welcome to Illustration World' imgsrc={web1} visit='/contact' btname='Contact now'></Commons>
      
  );
}

export default About;