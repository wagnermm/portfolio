import { useState } from 'react';
import './Header.css';

const Header =()=> {
    const [active, setActive] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState("nav__toggler")
    const navToggle = ()=> { 
      active === 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu')
      toggleIcon === 'nav__toggler' ? setToggleIcon('nav__toggler toggle') : setToggleIcon('nav__toggler')
    };
    return(
        <div className="portifolio-header">
          <div>
            <h1>Wagner Miranda</h1>
            <div className="lineTitleDown"></div>
          </div>
          <nav className='nav'>
            <ul className={active}>
              <li className='nav__item' id="home"><a href="index.html">Home</a></li>
              <li className='nav__item' id="sobre"><a href="#about">Sobre</a></li>
              <li className='nav__item' id="projeto"><a href="#projects">Projetos</a></li>
              <li className='nav__item' id="contato"><a href="#contact">Contato</a></li>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
          </nav>
        </div>
    )
}

export default Header