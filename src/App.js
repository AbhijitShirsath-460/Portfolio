import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollUp/ScrollUp';
import { Toaster } from 'react-hot-toast';






function App() {
  return (
    <>

      <Toaster position="top-right" />

      <Header/>
      
      <main className="main">


        <Home/>
        <About/>
        <Skills/> 
        <Services/>
        <Work/>
        <Contact/>
        
      </main>
      <Footer/>
      <ScrollUp/>
    </>

  );
}

export default App;
