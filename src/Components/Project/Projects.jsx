import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Projects.css';
import LogoConfectonery from '../Images/confectonery.png';
import Mario from '../Images/mario.gif';
import LogoBarberShop from '../Images/logo.jpg';
import CalculatorImg from '../Images/calculator.gif';
import TelaLogin from '../Images/telalogin.png';
import PHlogo from '../Images/ph.png';
import interactiveCard from '../Images/interactive-card.png';
import WebStore from '../Images/webstore.jpg';
import NetWeb from '../Images/netweb.png';
//import { BsFillInfoCircleFill } from 'react-icons/bs';
//import { FaBootstrap, FaSass, FaHtml5, FaReact } from 'react-icons/fa';
//import { IoLogoJavascript, IoLogoCss3 } from 'react-icons/io';
//import { DiJqueryLogo } from 'react-icons/di';
//import { SiVitess } from 'react-icons/si';

const Projects = ()=> {
    return(
        <div className='projects' id='projects'>
            <div className="project-header">
                <h1>Projetos</h1>
            </div>
            <Carousel>
                <Carousel.Item>
                    <div className="project-body">
                        <div className="project-content">
                            <div className="project-name">
                                <h3>Confeitaria</h3>
                            </div>
                            <div className="project-image">
                                <img src={LogoConfectonery} alt="logo-confeitaria"/>
                            </div>
                            <div className="project-link">
                                <button className='btn-project'><a href="https://wagnermm.github.io/brigadeiros-paes/" target='blank'>Ver Projeto</a></button>
                                <button className='btn-code'><a href="https://github.com/wagnermm/brigadeiros-paes" target='blank'>Ver Código</a></button>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="project-name">
                                <h3>Mario Jump</h3>
                            </div>
                            <div className="project-image">  
                                <img src={Mario} alt="mario" />
                            </div>
                            <div className="project-link">
                                <button className='btn-project'><a href="https://wagnermm.github.io/mario-game/" target='blank'>Ver Projeto</a></button>
                                <button className='btn-code'><a href="https://github.com/wagnermm/mario-game" target='blank'>Ver Código</a></button>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="project-name">
                                <h3>BarberShop</h3>
                            </div>
                            <div className="project-image">
                                <img src={LogoBarberShop} alt="logo-barbearia"/>
                            </div>
                            <div className="project-link">
                                <button className='btn-project'><a href="https://www.fiodanavalha.great-site.net/" target='blank'>Ver Projeto</a></button>
                                <button className='btn-code'><a href="https://github.com/wagnermm/barbershop" target='blank'>Ver Código</a></button>
                            </div>
                        </div>
                    </div> 
                </Carousel.Item>
                <Carousel.Item>
                    <div className="project-body">
                        <div className="project-content">
                            <div className="project-name">
                                <h3>Calculator</h3>
                            </div>
                            <div className="project-image">
                                <img src={CalculatorImg} alt="calculadora"/>
                            </div>
                            <div className="project-link">
                                <button className='btn-project'><a href="https://wagnermm.github.io/calculator-js/" target='blank'>Ver Projeto</a></button>
                                <button className='btn-code'><a href="https://github.com/wagnermm/calculator-js" target='blank'>Ver Código</a></button>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="project-name">
                                <h3>Tela de Login</h3>
                            </div>
                            <div className="project-image">
                                <img src={TelaLogin} alt="Telalogin"/>
                            </div>
                            <div className="project-link">
                                <button className='btn-project'><a href="https://wagnermm.github.io/form-login/" target='blank'>Ver Projeto</a></button>
                                <button className='btn-code'><a href="https://github.com/wagnermm/form-login/tree/main" target='blank'>Ver Código</a></button>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="project-name">
                                <h3>Advocacia</h3>
                            </div>
                            <div className="project-image">
                                <img src={PHlogo} alt="phLogo"/>
                            </div>
                            <div className="project-link">
                                <button className='btn-project'><a href="https://wagnermm.github.io/law-firm/" target='blank'>Ver Projeto</a></button>
                                <button className='btn-code'><a href="https://github.com/wagnermm/law-firm" target='blank'>Ver Código</a></button>
                            </div>
                        </div>
                    </div> 
                </Carousel.Item>
                <Carousel.Item>
                    <div className="project-body">
                        <div className="project-content">
                            <div className="project-name">
                                <h3>Interactive Card</h3>
                            </div>
                            <div className="project-image">
                                <img src={interactiveCard} alt="interactive card"/>
                            </div>
                            <div className="project-link">
                                <button className='btn-project'><a href="https://wagnermm.github.io/interactive-card/" target='blank'>Ver Projeto</a></button>
                                <button className='btn-code'><a href="https://github.com/wagnermm/interactive-card" target='blank'>Ver Código</a></button>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="project-name">
                                <h3>Crystaline</h3>
                            </div>
                            <div className="project-image">
                                <img src={WebStore} alt="loja"/>
                            </div>
                            <div className="project-link">
                                <button className='btn-project'><a href="https://wagnermm.github.io/web-store/" target='blank'>Ver Projeto</a></button>
                                <button className='btn-code'><a href="https://github.com/wagnermm/web-store" target='blank'>Ver Código</a></button>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="project-name">
                                <h3>Net Web</h3>
                            </div>
                            <div className="project-image">
                                <img src={NetWeb} alt="net web"/>
                            </div>
                            <div className="project-link">
                                <button className='btn-project'><a href="https://wagnermm.github.io/netweb/" target='blank'>Ver Projeto</a></button>
                                <button className='btn-code'><a href="https://github.com/wagnermm/netweb" target='blank'>Ver Código</a></button>
                            </div>
                        </div>
                    </div> 
                </Carousel.Item>
            </Carousel>
            <div className="top">
                <a href="#top">Voltar ao topo</a>
            </div>
        </div>
    )
};

export default Projects;