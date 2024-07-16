import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Projects.css';
import LogoConfectonery from '../Images/brigadeiros.jpg';
import Mario from '../Images/mario.gif';
import LogoBarberShop from '../Images/barber.jpg';
import CalculatorImg from '../Images/calculator.gif';
import PHlogo from '../Images/ph.jpg';
import interactiveCard from '../Images/interactive-card.png';
import { FaBootstrap, FaSass, FaHtml5 } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoCss3 } from 'react-icons/io';


const Projects = ()=> {
    const [oneProject, setOneProject] = useState("project-description-1");
    const openProjectOne = ()=> {
        oneProject === 'project-description-1' ? setOneProject('project-description-1 project-visible') : setOneProject('project-description-1');
    };
    const closeProjectOne = ()=> {
        oneProject === 'project-visible' ? setOneProject('project-description-1 project-visible') : setOneProject('project-description-1');
    };
    const [twoProject, setTwoProject] = useState("project-description-2");
    const openProjectTwo = ()=> {
        twoProject === 'project-description-2' ? setTwoProject('project-description-2 project-visible') : setTwoProject('project-description-2');
    };
    const closeProjectTwo = ()=> {
        twoProject === 'project-visible' ? setTwoProject('project-description-2 project-visible') : setTwoProject('project-description-2');
    };
    const [threeProject, setThreeProject] = useState("project-description-3");
    const openProjectThree = ()=> {
        threeProject === 'project-description-3' ? setThreeProject('project-description-3 project-visible') : setThreeProject('project-description-3');
    };
    const closeProjectThree = ()=> {
        threeProject === 'project-visible' ? setThreeProject('project-description-3 project-visible') : setThreeProject('project-description-3');
    };
    const [fourProject, setFourProject] = useState("project-description-4");
    const openProjectFour = ()=> {
        fourProject === 'project-description-4' ? setFourProject('project-description-4 project-visible') : setFourProject('project-description-4');
    };
    const closeProjectFour = ()=> {
        fourProject === 'project-visible' ? setFourProject('project-description-4 project-visible') : setFourProject('project-description-4');
    };
    const [sixProject, setSixProject] = useState("project-description-6");
    const openProjectSix = ()=> {
        sixProject === 'project-description-6' ? setSixProject('project-description-6 project-visible') : setSixProject('project-description-6');
    };
    const closeProjectSix = ()=> {
        sixProject === 'project-visible' ? setSixProject('project-description-6 project-visible') : setSixProject('project-description-6');
    };
    const [sevenProject, setSevenProject] = useState("project-description-7");
    const openProjectSeven = ()=> {
        sevenProject === 'project-description-7' ? setSevenProject('project-description-7 project-visible') : setSevenProject('project-description-7');
    };
    const closeProjectSeven = ()=> {
        sevenProject === 'project-visible' ? setSevenProject('project-description-7 project-visible') : setSevenProject('project-description-7');
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
                                <h3>Brigaderia</h3>
                            </div>
                            <div className="project-image">
                                <a href="https://wagnermm.github.io/brigadeiros-paes/" target='blank'><img src={LogoConfectonery} alt="logo-confeitaria"/></a>
                            </div>
                            <div className={oneProject}>
                                <div className="closeDetail">
                                    <div onClick={closeProjectOne} className="closeProject">X</div>
                                </div>
                                <p>Brigaderia desenvolvida com bootstrap, explorando algumas de suas ferramentas como modal, slide carousel, components e forms.</p>
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
                                <button onClick={openProjectOne} className="btn-project">Descrição</button>
                                <button className='btn-code'><a href="https://github.com/wagnermm/brigadeiros-paes" target='blank'>Ver Código</a></button>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="project-name">
                                <h3>Mario Jump</h3>
                            </div>
                            <div className="project-image">
                                <a href="https://wagnermm.github.io/mario-game/" target='blank'><img src={Mario} alt="mario"/></a>
                            </div>
                            <div className={twoProject}>
                                <div className="closeDetail">
                                    <div onClick={closeProjectTwo} className="closeProject">X</div>
                                </div>
                                <p>Jogo do Mario desenvolvido em javascript. Com funções e keyframes é possivel manipular o personagem clicando na tela. Se o Mario não pular sobre o obstáculo, a animação se encerrará.</p>
                                <div className="project-tecnology">
                                    <div className="css-icon">
                                        <IoLogoCss3/>
                                    </div>
                                    <div className="js-icon">
                                        <IoLogoJavascript/>
                                    </div>
                                </div>
                            </div>
                            <div className="project-link">
                                <button onClick={openProjectTwo} className='btn-project'>Descrição</button>
                                <button className='btn-code'><a href="https://github.com/wagnermm/mario-game" target='blank'>Ver Código</a></button>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="project-name">
                                <h3>Fio da navalha</h3>
                            </div>
                            <div className="project-image">
                                <a href="https://wagnermm.github.io/barbershop/" target='blank'><img src={LogoBarberShop} alt="logo-barbearia"/></a>
                            </div>
                            <div className={threeProject}>
                                <div className="closeDetail">
                                    <div onClick={closeProjectThree} className="closeProject">X</div>
                                </div>
                                <p>Uma barbearia, desenvolvida com html, css e javascript. Nesse projeto utilizei um plugin jQuery para exibir os cortes e um formulário para os clientes agendarem um horário.</p>
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
                                <button onClick={openProjectThree} className='btn-project'>Descrição</button>
                                <button className='btn-code'><a href="https://github.com/wagnermm/barbershop" target='blank'>Ver Código</a></button>
                            </div>
                        </div>
                    </div> 
                </Carousel.Item>
                <Carousel.Item>
                    <div className="project-body">
                        <div className="project-content">
                            <div className="project-name">
                                <h3>Calculadora</h3>
                            </div>
                            <div className="project-image">
                                <a href="https://wagnermm.github.io/calculator-js/" target='blank'><img src={CalculatorImg} alt="calculadora"/></a>
                            </div>
                            <div className={fourProject}>
                                <div className="closeDetail">
                                    <div onClick={closeProjectFour} className="closeProject">X</div>
                                </div>
                                <p>Uma calculadora criada para aprimorar meus conhecimentos de funções e variáveis. A calculadora executa as quatro operações básicas usando javascript, html5 e css3.</p>
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
                                <button onClick={openProjectFour} className='btn-project'>Descrição</button>
                                <button className='btn-code'><a href="https://github.com/wagnermm/calculator-js" target='blank'>Ver Código</a></button>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="project-name">
                                <h3>Interactive Card</h3>
                            </div>
                            <div className="project-image">
                                <a href="https://wagnermm.github.io/interactive-card/" target='blank'><img src={interactiveCard} alt="interactive card"/></a>
                            </div>
                            <div className={sevenProject}>
                                <div className="closeDetail">
                                    <div onClick={closeProjectSeven} className="closeProject">X</div>
                                </div>
                                <p>O cartão virtual interage com o usuário que pode ver o preenchimento automático na tela. Não há back-end para salvar os dados, esta aplicação somente exibe a interfácie e valida os campos de entrada.</p>
                                <div className="project-tecnology">
                                    <div className="html-logo">
                                        <FaHtml5/>
                                    </div>
                                    <div className="js-icon">
                                        <IoLogoJavascript/>
                                    </div>
                                    <div className="css-icon">
                                        <IoLogoCss3/>
                                    </div>
                                </div>
                            </div>
                            <div className="project-link">
                                <button onClick={openProjectSeven} className='btn-project'>Descrição</button>
                                <button className='btn-code'><a href="https://github.com/wagnermm/interactive-card" target='blank'>Ver Código</a></button>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="project-name">
                                <h3>Advocacia</h3>
                            </div>
                            <div className="project-image">
                                <a href="https://wagnermm.github.io/law-firm/" target='blank'><img src={PHlogo} alt="phLogo"/></a>
                            </div>
                            <div className={sixProject}>
                                <div className="closeDetail">
                                    <div onClick={closeProjectSix} className="closeProject">X</div>
                                </div>
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
                                <button onClick={openProjectSix} className='btn-project'>Descrição</button>
                                <button className='btn-code'><a href="https://github.com/wagnermm/law-firm" target='blank'>Ver Código</a></button>
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