//import { useState } from 'react';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Animate from './Components/Animate/Animate';
import './App.css';



export default function App() {
  return (
    <div className="App">
      <div className='main'>
        <Header/>
        <SideBar/>
        <About/>
        <Projects/>
        <Animate/>
      </div>
    </div>
  );
}
