// import React, { useState } from 'react'
// import './services.css';

// const Services = () => {


//     const[Toogle , setToogle] = useState(0);

//    const ToogleTab = (index)=>{
//           setToogle(index);

//    }

//     return (
//         <section className='services section' id='services' >

//             <h2 className="section__title">Services</h2>
//             <span className="section__subtitle">What i offer</span>

//             <div className="services_container container grid">

                 
//                 {/* Fullstack Developer */}
//                 <div className="services_content">

//                     <div>
//                         <i className="uil uil-web-grid services_icon"></i>
//                         <h3 className='services_title'>FullStack <br/> Developer</h3>
//                     </div>
//                     <span className="services_button" onClick={()=> ToogleTab(1)}>View More
//                         <i className="uil uil-arrow-right services_button-icon"></i>
//                     </span>

//                     <div className= {Toogle === 1 ? "services_modal active-modal" : 'services_modal'}>

//                         <div className="services_modal-content">

//                             <i  onClick={ ()=> ToogleTab(0)}  className="uil uil-times services_modal-close" ></i>

//                             <h3 className="services_modal-title">FullStack Developer</h3>
//                             <p className="services_modal-description">Providing quality work to clients and companies.</p>

//                             <ul className="services_modal-services grid">

//                                 <li className="services_modal-service">
//                                     <i className="uil uil-check-circle services_modal-icon"></i>
//                                     <p className="services_modal-info">Develop complete MERN-based web applications.</p>
//                                 </li>

//                                 <li className="services_modal-service">
//                                     <i className="uil uil-check-circle services_modal-icon"></i>
//                                     <p className="services_modal-info">Build and integrate RESTful & AI-powered APIs.</p>
//                                 </li>

//                                 <li className="services_modal-service">
//                                     <i className="uil uil-check-circle services_modal-icon"></i>
//                                     <p className="services_modal-info">Design and connect secure, scalable databases (MongoDB / MySQL).</p>
//                                 </li>

//                                 {/* <li className="services_modal-service">
//                                     <i className="uil uil-check-circle services_modal-icon"></i>
//                                     <p className="services_modal-info">I position your company brand.</p>
//                                 </li> */}

//                                 <li className="services_modal-service">
//                                     <i className="uil uil-check-circle services_modal-icon"></i>
//                                     <p className="services_modal-info">Deploy and manage apps on AWS (Lambda, S3, EC2, CloudFront).</p>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="services_content">

//                     <div>
//                         <i className="uil uil-arrow services_icon"></i>
//                         <h3 className='services_title'>Ui/Ux <br/> Designer</h3>
//                     </div>
//                     <span className="services_button" onClick={()=> ToogleTab(2)}>View More
//                         <i className="uil uil-arrow-right services_button-icon"></i>
//                     </span>

//                     <div className={Toogle === 2 ? "services_modal active-modal" : 'services_modal'}>
//                         <div className="services_modal-content">

//                             <i onClick={ ()=> ToogleTab(0)}  className="uil uil-times services_modal-close"></i>

//                             <h3 className="services_modal-title">Ui/Ux Designer</h3>
//                             <p className="services_modal-description">Providing quality work to clients and companies.</p>

//                             <ul className="services_modal-services grid">

//                                 <li className="services_modal-service">
//                                     <i className="uil uil-check-circle services_modal-icon"></i>
//                                     <p className="services_modal-info">I  develop the user interface</p>
//                                 </li>

//                                 <li className="services_modal-service">
//                                     <i className="uil uil-check-circle services_modal-icon"></i>
//                                     <p className="services_modal-info">Web page development.</p>
//                                 </li>

//                                 <li className="services_modal-service">
//                                     <i className="uil uil-check-circle services_modal-icon"></i>
//                                     <p className="services_modal-info">I  create ux element interactions. </p>
//                                 </li>

//                                 {/* <li className="services_modal-service">
//                                     <i className="uil uil-check-circle services_modal-icon"></i>
//                                     <p className="services_modal-info">I position your company brand.</p>
//                                 </li> */}

//                                 <li className="services_modal-service">
//                                     <i className="uil uil-check-circle services_modal-icon"></i>
//                                     <p className="services_modal-info"> I developed creative and user friendly UI.
//                                     </p>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="services_content">

//                     <div>
//                         <i className="uil uil-edit services_icon"></i>
//                         <h3 className='services_title'>Web <br/> Developer</h3>
//                     </div>
//                     <span className="services_button" onClick={()=> ToogleTab(3)}>View More
//                         <i className="uil uil-arrow-right services_button-icon"></i>
//                     </span>

//                     <div className={Toogle === 3 ? "services_modal active-modal" : 'services_modal'}>
//                         <div className="services_modal-content">

//                             <i onClick={ ()=> ToogleTab(0)}  className="uil uil-times services_modal-close"></i>

//                             <h3 className="services_modal-title">Web Developer</h3>
//                             <p className="services_modal-description">
//                             Providing quality work to clients and companies.
// </p>

//                             <ul className="services_modal-services grid">

//                                 <li className="services_modal-service">
//                                     <i className="uil uil-check-circle services_modal-icon"></i>
//                                     <p className="services_modal-info">I  develop the user interface</p>
//                                 </li>

//                                 <li className="services_modal-service">
//                                     <i className="uil uil-check-circle services_modal-icon"></i>
//                                     <p className="services_modal-info">Web page development.</p>
//                                 </li>

//                                 <li className="services_modal-service">
//                                     <i className="uil uil-check-circle services_modal-icon"></i>
//                                     <p className="services_modal-info">I  create ux element interactions. </p>
//                                 </li>

//                                 {/* <li className="services_modal-service">
//                                     <i className="uil uil-check-circle services_modal-icon"></i>
//                                     <p className="services_modal-info">I position your company brand.</p>
//                                 </li> */}

//                                 {/* <li className="services_modal-service">
//                                     <i className="uil uil-check-circle services_modal-icon"></i>
//                                     <p className="services_modal-info">Design and mockups of products for companies.
//                                     </p>
//                                 </li> */}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     )
// }

// export default Services



import React, { useState } from 'react';
import './services.css';

const Services = () => {
  const [Toggle, setToggle] = useState(0);

  const ToggleTab = (index) => {
    setToggle(index);
  };

  return (
    <section className='services section' id='services'>
      <h2 className='section__title'>Services</h2>
      <span className='section__subtitle'>What I Offer</span>

      <div className='services_container container grid'>
        {/* ================= FULL STACK DEVELOPER ================= */}
        <div className='services_content'>
          <div>
            <i className='uil uil-web-grid services_icon'></i>
            <h3 className='services_title'>
              Full Stack <br /> Developer
            </h3>
          </div>

          <span className='services_button' onClick={() => ToggleTab(1)}>
            View More <i className='uil uil-arrow-right services_button-icon'></i>
          </span>

          <div className={Toggle === 1 ? 'services_modal active-modal' : 'services_modal'}>
            <div className='services_modal-content'>
              <i onClick={() => ToggleTab(0)} className='uil uil-times services_modal-close'></i>

              <h3 className='services_modal-title'>Full Stack Developer</h3>
              <p className='services_modal-description'>
                Building complete, high-performance web applications using modern frameworks and cloud-ready
                architectures.
              </p>

              <ul className='services_modal-services grid'>
                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>Develop responsive and scalable MERN stack web applications.</p>
                </li>
                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>Design and integrate RESTful APIs and secure authentication flows.</p>
                </li>
                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>Implement optimized database models with MongoDB or MySQL.</p>
                </li>
                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>Collaborate in end-to-end product lifecycle development.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ================= SOFTWARE ENGINEER & CONSULTANT ================= */}
        <div className='services_content'>
          <div>
            <i className='uil uil-lightbulb-alt services_icon'></i>
            <h3 className='services_title'>
              Software Engineer <br /> & Consultant
            </h3>
          </div>

          <span className='services_button' onClick={() => ToggleTab(2)}>
            View More <i className='uil uil-arrow-right services_button-icon'></i>
          </span>

          <div className={Toggle === 2 ? 'services_modal active-modal' : 'services_modal'}>
            <div className='services_modal-content'>
              <i onClick={() => ToggleTab(0)} className='uil uil-times services_modal-close'></i>

              <h3 className='services_modal-title'>Software Engineer & Consultant</h3>
              <p className='services_modal-description'>
                Providing end-to-end software solutions with strategic guidance on technology, scalability, and
                performance.
              </p>

              <ul className='services_modal-services grid'>
                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>Design and architect scalable software systems and APIs.</p>
                </li>
                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>Offer consulting on best practices, code quality, and system performance.</p>
                </li>
                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>Collaborate with teams to plan, build, and deliver production-ready apps.</p>
                </li>
                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>Implement AI-assisted and automated solutions for efficiency.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ================= CLOUD SOLUTIONS DEVELOPER ================= */}
        <div className='services_content'>
          <div>
            <i className='uil uil-cloud services_icon'></i>
            <h3 className='services_title'>
              Cloud Solutions <br /> Developer
            </h3>
          </div>

          <span className='services_button' onClick={() => ToggleTab(3)}>
            View More <i className='uil uil-arrow-right services_button-icon'></i>
          </span>

          <div className={Toggle === 3 ? 'services_modal active-modal' : 'services_modal'}>
            <div className='services_modal-content'>
              <i onClick={() => ToggleTab(0)} className='uil uil-times services_modal-close'></i>

              <h3 className='services_modal-title'>Cloud Solutions Developer</h3>
              <p className='services_modal-description'>
                Delivering cloud-native applications and infrastructure solutions using AWS and modern DevOps tools.
              </p>

              <ul className='services_modal-services grid'>
                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>Design and deploy scalable applications using AWS (Lambda, EC2, S3).</p>
                </li>
                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>Implement API Gateway and CloudFront for optimized delivery.</p>
                </li>
                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>Automate deployment pipelines and cloud monitoring with CloudWatch.</p>
                </li>
                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>Ensure secure, efficient, and cost-effective cloud architecture.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
