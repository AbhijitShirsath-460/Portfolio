
import './home.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import Aos from 'aos';
import 'aos/dist/aos.css';
import React , {useEffect} from 'react';



const Home = () => {

  useEffect(()=>{
    Aos.init()
   },[])
    
  return (

    <section className='home section' id='home' data-aos ="fade-down">
                             

      <div className="home_container container grid">
                 
        <div className="home_content  grid">

          <Social />

          <div className="home_image">

          </div>

          <Data />
        </div>
        <ScrollDown/>


      </div>
    </section>





  )
}

export default Home
