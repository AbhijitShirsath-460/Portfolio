import React from 'react'
import'./scrollUp.css';

const ScrollUp = () => {

    //  window.addEventListener( 'scroll' ,  abc);

    //  function abc(){
    //   const scrollUp = document.getElementsByClassName(".scrollUp");
    //   if(this.scrollY >=560) scrollUp.classList.add("show-scroll");
    //   else  scrollUp.classList.remove('show-scroll');
    //  }

  return (
    <div>
      <a href="#" className="scrollUp">
        <i className="uil uil-arrow-up scrollUp_icon"></i>
      </a>
    </div>
  )
}

export default ScrollUp
