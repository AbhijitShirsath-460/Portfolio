import React, { useState, useEffect } from 'react'
import './header.css';

const Header = () => {
    /*=============== Change Background Header ===============*/
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });

    /*=============== Toggle Menu ===============*/
    const [Toggle, showMenu] = useState(false);

    /*=============== Theme Toggle ===============*/
    const [theme, setTheme] = useState(localStorage.getItem("selected-theme") || "light");

    useEffect(() => {
        document.body.classList.toggle("dark-theme", theme === "dark");
        localStorage.setItem("selected-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <header className="header">
            <nav className="nav_container container">
                <a href="index.html" className='nav_logo'>Abhijit</a>

                <div className={Toggle ? 'nav_menu show-menu' : 'nav_menu'}>
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <a href="#home" className="nav_link active-link" onClick={() => showMenu(false)}>
                                <i className="uil uil-estate nav_icon"></i> Home
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#about" className="nav_link" onClick={() => showMenu(false)}>
                                <i className="uil uil-user nav_icon"></i> About
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#skills" className="nav_link" onClick={() => showMenu(false)}>
                                <i className="uil uil-file-alt nav_icon"></i> Skills
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#services" className="nav_link" onClick={() => showMenu(false)}>
                                <i className="uil uil-briefcase-alt nav_icon"></i> Services
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#projects" className="nav_link" onClick={() => showMenu(false)}>
                                <i className="uil uil-scenery nav_icon"></i> Projects
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#contact" className="nav_link" onClick={() => showMenu(false)}>
                                <i className="uil uil-message nav_icon"></i> Contact
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="nav_btns">
                    {/* Theme Toggle Button */}
                    <i
                        className={theme === "light" ? "uil uil-moon change-theme" : "uil uil-sun change-theme"}
                        onClick={toggleTheme}
                        id="theme-button"
                    ></i>

                    <div className={Toggle ? "nav_toggle active" : "nav_toggle"} onClick={() => showMenu(!Toggle)}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
