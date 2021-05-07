import React from 'react';
import Commons from './Commons';
import web from '../src/images/W1.png'

const Home=()=> {
  return (
   <Commons name='Explore your potential with Kashif' imgsrc={web} visit='/courses' btname='Get Started'></Commons>  
  );
}

export default Home;