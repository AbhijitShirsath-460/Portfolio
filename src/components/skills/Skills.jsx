
import React from 'react';
import './skills.css';
import Frontend from './Frontend';
import Backend from "./Backend";
import CloudAI from './CloudAI';
import Tools from './Tools';



const Skills = () => {
  return (
    <section className="skill section" id="skills" data-aos ="zoom-in-up">

      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Levels</span>
      <div className="skills__container container grid">

                   <Frontend/>
                   <Backend/>
                   <CloudAI/>
                   <Tools/>
      </div>
    </section>

  )
}

export default Skills
