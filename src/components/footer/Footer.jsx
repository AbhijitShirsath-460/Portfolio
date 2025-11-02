import React from 'react';
import './footer.css';

const Footer = () => {
    return (

        <footer className='footer'>
            <div className="footer__container container">
                <h1 className="footer_title">Abhijit</h1>

                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>

                    <li>
                        <a href="#home" className="footer_link">Home</a>
                    </li>
                    <li>
                        <a href="#contact" className="footer_link">Contact</a>
                    </li>
                    <li>
                        <a href="#services" className="footer_link">Services</a>
                    </li>
                </ul>


                <div className="footer_social">

                    <a href="" className="footer_social-link" target='blank'>   
                    {/* "https://www.instagram.com" */}
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href="web.whatsapp.com" className="footer_social-link" target='blank'>
                        <i className="uil uil-whatsapp"></i>
                    </a>

                    <a href="https://github.com/" className="footer_social-link" target='blank'>

                        <i className="bx bxl-github-alt"></i>
                    </a>

                </div>
                {/* <span className="footer_copy">&#169; Crypticalcoder. All rigths reserved</span> */}
            </div>
        </footer>


    )
}

export default Footer
