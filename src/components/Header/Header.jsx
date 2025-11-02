import React from 'react'
import { useState } from 'react';
import './header.css';



const Header = () => {

    const [Toogle, showMenu] = useState(false);
    return (
        <>

            <header className="header">



                <nav className="nav_container">

                    <a href="index.html" className='nav_logo'>Abhijit</a>

                    <div className={Toogle ? 'nav_menu show-menu' : 'nav_menu'}>

                        <ul className="nav_list grid">

                            <li className="nav_item">

                                <a href="#home" className="nav_link  active-link">
                                    <i className="uil uil-estate nav_icon"></i>
                                    Home
                                </a>
                            </li>

                            <li className="nav_item">

                                <a href="#about" className="nav_link">
                                    <i className="uil uil-user nav_icon"></i>
                                    About
                                </a>
                            </li>

                            <li className="nav_item">

                                <a href="#skills" className="nav_link">
                                    <i className="uil uil-file-alt nav_icon"></i>
                                    Skills
                                </a>
                            </li>

                            <li className="nav_item">

                                <a href="#services" className="nav_link">
                                    <i className="uil uil-briefcase-alt nav_icon"></i>
                                    Services
                                </a>
                            </li>

                            <li className="nav_item">

                                <a href="#projects" className="nav_link">
                                    <i className="uil uil-scenery nav_icon"></i>
                                    Projects
                                </a>
                            </li>

                            <li className="nav_item">

                                <a href="#contact" className="nav_link">
                                    <i className="uil uil-message nav_icon"></i>
                                    Contact
                                </a>
                            </li>

                        </ul>

                        <i className="uil uil-times nav_close" onClick={() => { showMenu(!Toogle) }}></i>

                    </div>

                    <div className="nav_toogleBtn" onClick={() => { showMenu(!Toogle)}}>
                        <i className="uil uil-apps"></i>
                    </div>
                </nav>
            </header>






        </>
    )
}

export default Header
