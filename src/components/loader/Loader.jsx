import React from 'react';
import './loader.css';

const Loader = ({ isLoading, progress }) => {
    return (
        <div className={`preloader ${!isLoading ? 'fade-out' : ''}`}>
            <div className="loader_content">
                <div className={`loader_main_wrapper ${progress === 100 ? 'completed' : ''}`}>
                    <svg className="loader_svg" viewBox="0 0 100 100">
                        <circle className="loader_circle" cx="50" cy="50" r="45" />
                        <path className="loader_path" d="M30 50 L45 65 L70 35" fill="none" strokeWidth="6" strokeLinecap="round" />
                    </svg>
                </div>

                <div className="loader_text_box">
                    <div className="loader_text">
                        <span className="loader_name">Abhijit</span>
                        <div className="loader_line"></div>
                    </div>
                    {progress === 100 && <i className="uil uil-check-circle loader_done_icon"></i>}
                </div>

                <div className="loader_percentage_box">
                    <div className="loader_percentage">{progress}%</div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
