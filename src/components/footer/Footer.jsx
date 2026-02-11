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

                    <a href="https://www.instagram.com/abhijitshirsath080322/" className="footer_social-link" target='blank'>
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href="https://api.whatsapp.com/send?phone=9767330698" className="footer_social-link" target='blank'>
                        <i className="bx bxl-whatsapp"></i>
                    </a>

                    <a href="https://github.com/AbhijitShirsath-460" className="footer_social-link" target='blank'>
                        <i className="bx bxl-github"></i>
                    </a>

                </div>
                {/* <span className="footer_copy">&#169; Crypticalcoder. All rigths reserved</span> */}
            </div>
        </footer>


    )
}

export default Footer
