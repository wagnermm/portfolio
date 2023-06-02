import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';

import './App.css'

export default function App() {
  return (
    <div className="App">
      <header className='main'>
        <Header/>
        <SideBar/>
        <About/>
        <Projects/>
      </header>
    </div>
  );
}
