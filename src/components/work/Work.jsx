import React from 'react';
import Works from './Works';
import './work.css';

const Work = () => {
  return (
    <section className='work_section' id='projects' data-aos="zoom-in-up"> 
             
              <h2 className="section__title">Portfoilo</h2>
              <span className='section__subtitle'>Rescent work</span>

              <Works/>
   
    </section>
  )
}

export default Work
