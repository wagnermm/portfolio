import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Projects.css';
import LogoConfectonery from '../Images/brigadeiros.jpg';
import Mario from '../Images/mario.jpg';
import Sendio from '../Images/bg.jpg';
import LogoBarberShop from '../Images/barber.jpg';
import CalculatorImg from '../Images/calculator.jpg';
import PHlogo from '../Images/ph.jpg';
import { FaBootstrap, FaSass, FaHtml5 } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoCss3 } from 'react-icons/io';


const Projects = ()=> {

    //Barbershop
    const [barbershopProject, setBarbershopProject] = useState("project-description-3");
    const openBarbershopProject = ()=> {
        barbershopProject === 'project-description-3' ? setBarbershopProject('project-description-3 project-visible') : setBarbershopProject('project-description-3');
    };

    //Sendio
    const [projectSendio, setProjectSendio] = useState("project-description-4");
    const openSendioProject = ()=> {
        projectSendio === 'project-description-4' ? setProjectSendio('project-description-4 project-visible') : setProjectSendio('project-description-4');
    };

    //Law Firm
    const [lawFirmProject, setLawFirmProject] = useState("project-description-6");
    const openLawFirmProject = ()=> {
        lawFirmProject === 'project-description-6' ? setLawFirmProject('project-description-6 project-visible') : setLawFirmProject('project-description-6');
    };

    //Brigaderia
    const [brigaderiaProject, setBrigaderiaProject] = useState("project-description-1");
    const openBrigaderiaProject = ()=> {
        brigaderiaProject === 'project-description-1' ? setBrigaderiaProject('project-description-1 project-visible') : setBrigaderiaProject('project-description-1');
    };

    //Mario Game
    const [marioGameProject, setMarioGameProject] = useState("project-description-2");
    const openMarioGameProject = ()=> {
        marioGameProject === 'project-description-2' ? setMarioGameProject('project-description-2 project-visible') : setMarioGameProject('project-description-2');
    };

    //Calculator
    const [calculatorProject, setCalculatorProject] = useState("project-description-7");
    const openCalculatorProject = ()=> {
        calculatorProject === 'project-description-7' ? setCalculatorProject('project-description-7 project-visible') : setCalculatorProject('project-description-7');
    };

    return(
        <div className='projects' id='projects'>
            <div className="project-header">
                <h2>Projetos</h2>
            </div>
            <Carousel>
                <Carousel.Item>
                    <div className="project-body">
                        <div className="project-content">
                            <div className="project-name">
                                <h3>Fio da navalha</h3>
                            </div>
                            <div className="project-image">
                                <a href="https://wagnermm.github.io/barbershop/" target='blank'><img src={LogoBarberShop} alt="logo-barbearia"/></a>
                            </div>
                            <div className={barbershopProject}>
                                <p>Um site de barbearia desenvolvida com JavaScript além de um plugin jQuery para exibir os cortes e o gerador de formulário icoginito forms para registrar os clientes. O site é responsivo e com um visual atraente.</p>
                                <div className="project-tecnology">
                                    <div className="html-logo">
                                        <FaHtml5/>
                                    </div>
                                    <div className="css-icon">
                                        <IoLogoCss3/>
                                    </div>
                                    <div className="js-icon">
                                        <IoLogoJavascript/>
                                    </div>
                                </div>
                            </div>
                            <div className="project-link">
                                <button onClick={openBarbershopProject} className='btn-project'>Descrição</button>
                                <button className='btn-code'><a href="https://github.com/wagnermm/barbershop" target='blank'>Ver Código</a></button>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="project-name">
                                <h3>Sendio</h3>
                            </div>
                            <div className="project-image sendio">
                                <a href="https://www.sendio.com.br/" target='blank'><img src={Sendio} alt="sendio"/></a>
                            </div>
                            <div className={projectSendio}>
                                <p>Foi um desafio empolgante e satisfatório trabalhar no site da empresa Sendio. Utilizando ferramentas como FileZilla e desenvolvido com JavaScript, o site é funcional, responsivo e oferece uma série de informações sobre os produtos.</p>
                                <div className="project-tecnology">
                                    <div className="html-logo">
                                        <FaHtml5/>
                                    </div>
                                    <div className="bootstrap-icon">
                                        <FaBootstrap/>
                                    </div>
                                    <div className="js-icon">
                                        <IoLogoJavascript/>
                                    </div>
                                </div>
                            </div>
                            <div className="project-link">
                                <button onClick={openSendioProject} className='btn-project'>Descrição</button>
                                <button className='btn-code text-light'>Ver Código</button>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="project-name">
                                <h3>Advocacia</h3>
                            </div>
                            <div className="project-image">
                                <a href="https://wagnermm.github.io/law-firm/" target='blank'><img src={PHlogo} alt="law firm Logo"/></a>
                            </div>
                            <div className={lawFirmProject}>
                                <p>Web page inspirada na série Suits, nesse projeto pude aprimorar alguns conceitos em javascript, utilizando um slide com informações no banner principal, além da responsividade e a utilização de favicon.</p>
                                <div className="project-tecnology">
                                    <div className="html-logo">
                                        <FaHtml5/>
                                    </div>
                                    <div className="sass-icon">
                                        <FaSass/>
                                    </div>
                                    <div className="js-icon">
                                        <IoLogoJavascript/>
                                    </div>
                                </div>
                            </div>
                            <div className="project-link">
                                <button onClick={openLawFirmProject} className='btn-project'>Descrição</button>
                                <button className='btn-code'><a href="https://github.com/wagnermm/law-firm" target='blank'>Ver Código</a></button>
                            </div>
                        </div>
                    </div> 
                </Carousel.Item>
                <Carousel.Item>
                    <div className="project-body">
                        <div className="project-content">
                            <div className="project-name">
                                <h3>Brigaderia</h3>
                            </div>
                            <div className="project-image">
                                <a href="https://wagnermm.github.io/brigadeiros-paes/" target='blank'><img src={LogoConfectonery} alt="logo-confeitaria"/></a>
                            </div>
                            <div className={brigaderiaProject}>
                                <p>Site de brigaderia desenvolvida com bootstrap, explorando algumas de suas ferramentas como modal, slide carousel, components e forms.</p>
                                <div className="project-tecnology">
                                    <div className="bootstrap-icon">
                                        <FaBootstrap/>
                                    </div>
                                    <div className="sass-icon">
                                        <FaSass/>
                                    </div>
                                    <div className="js-icon">
                                        <IoLogoJavascript/>
                                    </div>
                                </div>
                            </div>
                            <div className="project-link">
                                <button onClick={openBrigaderiaProject} className="btn-project">Descrição</button>
                                <button className='btn-code'><a href="https://github.com/wagnermm/brigadeiros-paes" target='blank'>Ver Código</a></button>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="project-name">
                                <h3>Mario game</h3>
                            </div>
                            <div className="project-image">
                                <a href="https://wagnermm.github.io/mario-game/" target='blank'><img src={Mario} alt="mario"/></a>
                            </div>
                            <div className={marioGameProject}>
                                <p>Jogo do Mario desenvolvido com JavaScript e animações CSS, onde o jogador deverá clicar na tela para o Mario pular sobre o obstáculo e evitar que o jogo termine.</p>
                                <div className="project-tecnology">
                                    <div className="html-logo">
                                        <FaHtml5/>
                                    </div>
                                    <div className="css-icon">
                                        <IoLogoCss3/>
                                    </div>
                                    <div className="js-icon">
                                        <IoLogoJavascript/>
                                    </div>
                                </div>
                            </div>
                            <div className="project-link">
                                <button onClick={openMarioGameProject} className='btn-project'>Descrição</button>
                                <button className='btn-code'><a href="https://github.com/wagnermm/mario-game" target='blank'>Ver Código</a></button>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="project-name">
                                <h3>Calculadora</h3>
                            </div>
                            <div className="project-image">
                                <a href="https://wagnermm.github.io/calculator-js/" target='blank'><img src={CalculatorImg} alt="calculadora"/></a>
                            </div>
                            <div className={calculatorProject}>
                                <p>Uma calculadora criada para aprimorar meus conhecimentos de funções e variáveis. A calculadora executa as quatro operações básicas usando JavaScript.</p>
                                <div className="project-tecnology">
                                    <div className="html-logo">
                                        <FaHtml5/>
                                    </div>
                                    <div className="css-icon">
                                        <IoLogoCss3/>
                                    </div>
                                    <div className="js-icon">
                                        <IoLogoJavascript/>
                                    </div>
                                </div>
                            </div>
                            <div className="project-link">
                                <button onClick={openCalculatorProject} className='btn-project'>Descrição</button>
                                <button className='btn-code'><a href="https://github.com/wagnermm/calculator-js" target='blank'>Ver Código</a></button>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
};

export default Projects;