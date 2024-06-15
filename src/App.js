import { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import About from './Components/About/About';
import ProfessionalExperience from './Components/Experience/ProfessionalExperience';
import Download from './Components/Download/Download';
import Projects from './Components/Projects/Projects';
import Animate from './Components/Animate/Animate';
import './App.css';



export default function App() {

  const [preLoader, setPreLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreLoader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (preLoader) {
    return <div id="preloader">
      <div className="loader1">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>;
  }
  return (
    <div className="App">
      <div className='main'>
        <Header/>
        <SideBar/>
        <About/>
        <ProfessionalExperience/>
        <Download/>
        <Projects/>
        <Animate/>
      </div>
    </div>
  );
}
