import React from 'react';

const CloudAI = () => {
  return (
    <div className='skills__content' data-aos="zoom-in">
      <h3 className="skills__title">Cloud & AI</h3>

      <div className="skills__box">
        <div className="skills__group">
          
          {/* 🌩️ Cloud Skills */}
          {/* AWS LAMBDA */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">AWS Lambda</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          
           {/* API GATEWAY */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">API Gateway</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          {/* AMAZON S3 */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Amazon S3</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          {/* EC2 */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">EC2</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

        </div>

        <div className="skills__group">

          {/* CLOUD FRONT */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">CloudFront</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

            {/* CLOUD WATCH */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">CloudWatch</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          {/* 🤖 AI Skills */}
          {/* OpenAI API */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">OpenAI API</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          {/* Generative AI */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Generative AI</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
            {/* Machine Learning Basics */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Machine Learning Basics</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CloudAI;
