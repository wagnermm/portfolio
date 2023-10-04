//import { useState } from 'react';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import About from './Components/About/About';
import Projects from './Components/Project/Projects';
import './App.css'


export default function App() {
  return (
    <div className="App">
      <div className='main'>
        <Header/>
        <SideBar/>
        <About/>
        <Projects/>
      </div>
    </div>
  );
}
