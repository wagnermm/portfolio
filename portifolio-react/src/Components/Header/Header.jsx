import { useState } from 'react';
import './Header.css'
import 'bootstrap'

const Header =()=> {
    const {active, setMode} = useState(false)
    const toggleMode =()=> {
      setMode(!active)
    }
    return(
        <div className="portifolio-header">
          <div>
            <h1>Wagner Miranda</h1>
            <div className="line"></div>
          </div>
          <div className={active ? 'icon iconActive' : 'icon'}onClick={toggleMode}>
              <div className="hamburguerIcon"></div>
          </div>
          <div className={active ? 'menuOpen' : 'menuClose'}>
            <div id='links'>
              <ul className="list-items">
                <li id="home"><a href="index.html">Home</a></li>
                <li id="sobre"><a href="#about">Sobre</a></li>
                <li id="projeto"><a href="#projects">Projetos</a></li>
                <li id="contato"><a href="#contact">Contato</a></li>
              </ul>
            </div>
          </div>
        </div>
    )
}

export default Header