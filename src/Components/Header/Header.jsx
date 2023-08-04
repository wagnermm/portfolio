import { useState } from 'react';
import './Header.css';
import {BsWhatsapp} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Header =()=> {
    const [active, setActive] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState("nav__toggler");
    const navToggle = ()=> { 
      active === 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu');
      toggleIcon === 'nav__toggler' ? setToggleIcon('nav__toggler toggle') : setToggleIcon('nav__toggler');
    };
    const [contactInfo, setContactInfo] = useState("contact__hide");
    const navContact = ()=> {
      contactInfo === 'contact__hide' ? setContactInfo('contact__show') : setContactInfo('contact__hide');
    }
    const [close, setClose] = useState("menu__close");
    const closeMenu=()=> {
      close === "menu__close" ? setClose('menu__close nav__active') : setClose("menu__close");
      active === 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu');
      toggleIcon === 'nav__toggler' ? setToggleIcon('nav__toggler toggle') : setToggleIcon('nav__toggler');
    }
    return(
        <div className="portifolio-header">
          <div className='title'>
            <h1>Wagner Miranda</h1>
            <p>Desenvolveor Front-end</p>
            <div className="main-social">
                <div className="socials">
                    <div className="linkedin">
                        <a href="https://www.linkedin.com/in/wagner-mm/" target="blank"><FaLinkedin/></a>
                    </div>
                    <div className="github">
                        <a href="https://github.com/wagnermm" target="blank"><FaGithub/></a>
                    </div>  
                </div>
              </div>
          </div>
          <nav className="nav">    
            <ul className={active}>
            <div onClick={closeMenu} className="close__menu">X</div>
              <div className={close}>
                <li className='nav__item' id="home"><a href="index.html">Home</a></li>
                <li className='nav__item' id="sobre"><a href="#about">Sobre</a></li>
                <li className='nav__item' id="projeto"><a href="#projects">Projetos</a></li>
                <li onClick={navContact} className='nav__item' id="contato"><a href="#contact">Contato<div className={contactInfo}><a href="https://api.whatsapp.com/send?phone=5541984955509" target='blank'><BsWhatsapp/> (41)98495-5509</a><br/>
                <div className="closeContactInfo">
                  X
                </div>
                <a href="mailto:endereço eletrônico?subject=wagnermarquesdemiranda@gmail.com" target='blank'><AiOutlineMail/> wagnermarquesdemiranda@gmail.com</a>
                </div></a>
                </li>
              </div>
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