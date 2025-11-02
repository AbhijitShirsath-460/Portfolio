import React, { useState } from 'react'
import './services.css';

const Services = () => {


    const[Toogle , setToogle] = useState(0);

   const ToogleTab = (index)=>{
          setToogle(index);

   }

    return (
        <section className='services section' id='services' >

            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>

            <div className="services_container container grid">
                
                <div className="services_content">

                    <div>
                        <i className="uil uil-web-grid services_icon"></i>
                        <h3 className='services_title'>FullStack <br/> Developer</h3>
                    </div>
                    <span className="services_button" onClick={()=> ToogleTab(1)}>View More
                        <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>

                    <div className= {Toogle === 1 ? "services_modal active-modal" : 'services_modal'}>

                        <div className="services_modal-content">

                            <i  onClick={ ()=> ToogleTab(0)}  className="uil uil-times services_modal-close" ></i>

                            <h3 className="services_modal-title">FullStack Developer</h3>
                            <p className="services_modal-description">Providing quality work to clients and companies.</p>

                            <ul className="services_modal-services grid">

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">I  develop the user interface</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Web page development.</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">I  developed  backend technologies. </p>
                                </li>

                                {/* <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">I position your company brand.</p>
                                </li> */}

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Design and integrate database.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">

                    <div>
                        <i className="uil uil-arrow services_icon"></i>
                        <h3 className='services_title'>Ui/Ux <br/> Designer</h3>
                    </div>
                    <span className="services_button" onClick={()=> ToogleTab(2)}>View More
                        <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>

                    <div className={Toogle === 2 ? "services_modal active-modal" : 'services_modal'}>
                        <div className="services_modal-content">

                            <i onClick={ ()=> ToogleTab(0)}  className="uil uil-times services_modal-close"></i>

                            <h3 className="services_modal-title">Ui/Ux Designer</h3>
                            <p className="services_modal-description">Providing quality work to clients and companies.</p>

                            <ul className="services_modal-services grid">

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">I  develop the user interface</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Web page development.</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">I  create ux element interactions. </p>
                                </li>

                                {/* <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">I position your company brand.</p>
                                </li> */}

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info"> I developed creative and user friendly UI.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">

                    <div>
                        <i className="uil uil-edit services_icon"></i>
                        <h3 className='services_title'>Web <br/> Developer</h3>
                    </div>
                    <span className="services_button" onClick={()=> ToogleTab(3)}>View More
                        <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>

                    <div className={Toogle === 3 ? "services_modal active-modal" : 'services_modal'}>
                        <div className="services_modal-content">

                            <i onClick={ ()=> ToogleTab(0)}  className="uil uil-times services_modal-close"></i>

                            <h3 className="services_modal-title">Web Developer</h3>
                            <p className="services_modal-description">
                            Providing quality work to clients and companies.
</p>

                            <ul className="services_modal-services grid">

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">I  develop the user interface</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Web page development.</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">I  create ux element interactions. </p>
                                </li>

                                {/* <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">I position your company brand.</p>
                                </li> */}

                                {/* <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Design and mockups of products for companies.
                                    </p>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Services
