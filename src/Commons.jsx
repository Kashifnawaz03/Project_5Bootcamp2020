import React from 'react';
import './index1.css'
import { NavLink } from 'react-router-dom';
//import web from '../src/images/W1.png'

const Commons=(props)=> {
  return (
   <section id="header" className="d-flex align-items-center">
       <div className="container fluid nav_bg">
       <div className="row">
       <div className="col-10 mx-auto">
       <div className="row">
       <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
           <h1>{props.name}</h1>
           <h2 className="my-3">Contemporary illustration uses a wide range 
           of styles and techniques, including drawing, painting, printmaking,
            collage, montage, digital design, multimedia, 3D modelling. Depending 
            on the purpose, illustration may be expressive, stylised, realistic or 
            highly technical..</h2>
  <div className="mt-3">
  <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>
        </div>
        </div>
        <div className="col-lg-6 order-l order-lg-2 header-img">
            <img src={props.imgsrc}alt=""  className= "img-fluid animated"></img>
       </div>
       </div>
       </div>
       </div>
       </div>
   </section>
      
  );
}

export default Commons;