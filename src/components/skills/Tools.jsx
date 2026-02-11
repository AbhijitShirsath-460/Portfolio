import React from "react";

const Tools = () => {
  return (
    <div className="skills__content" data-aos="zoom-in">
      <h3 className="skills__title">Tools & Others</h3>
      <div className="skills__box">
        <div className="skills__group">
          {/* Version Control Git  */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Git / GitHub</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          {/* Postman */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Postman</h3>
              <span className="skills_level">Advanced</span>
            </div>
          </div>
          {/* VS Code */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">VS Code</h3>
              <span className="skills_level">Advanced</span>
            </div>
          </div>
          {/* DOCKER */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Docker</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          {/* FIGMA */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Figma / UI Tools</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>
          {/* NPM */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">NPM / Package Mgmt</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          {/* CHROME DEV TOOLS */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Responsive Design</h3>
              <span className="skills_level">Advanced</span>
            </div>
          </div>
          {/* REACT DEV TOOL */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">React Dev Tools</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
