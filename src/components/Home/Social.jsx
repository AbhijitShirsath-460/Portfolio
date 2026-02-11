import React from "react";

const Social = () => {
  return (
    <div className="home_social">
      {/* linkedin */}
      <a
        href="https://www.linkedin.com/in/abhijit-shirsath-99a068243"
        className="home_social-icon linkedin"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>

      {/* instagram */}
      <a
        href="https://www.instagram.com/YOUR_USERNAME"
        className="home_social-icon instagram"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a>

      {/* whatsapp */}
      <a
        href="https://wa.me/9767330698"
        className="home_social-icon whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-whatsapp"></i>
      </a>

      {/* github */}
      <a
        href="https://github.com/AbhijitShirsath-460"
        className="home_social-icon github"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
