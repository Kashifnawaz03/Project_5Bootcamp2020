import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
//import ReactDOM from 'react-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Courses from './Courses';
import Contact from './Contact';
import Navbar from './Navbar'

const App=()=> {
  return (
    
    <>
    
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="About" element={<About />} />
    <Route path="Courses" element={<Courses />} />
    <Route path="Contact" element={<Contact />} />
    
    <Route path="*" element={<NotFound />} />
   </Routes>
  
   </>
  );
}

function NotFound() {
  return (
    <div>
      <h1>Not found!</h1>
      <p>Sorry your page was not found!</p>
    </div>
  );
}

export default App;
