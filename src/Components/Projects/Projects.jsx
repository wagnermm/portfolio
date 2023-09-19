import { useState } from 'react';
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
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { FaBootstrap, FaSass, FaHtml5, FaReact } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoCss3 } from 'react-icons/io';
import { DiJqueryLogo } from 'react-icons/di';
import { SiVitess } from 'react-icons/si';


const Projects=()=> {
    const [oneProject, setOneProject] = useState("project-description-hidden");
    const openProjectOne = ()=> {
        oneProject === 'project-description-hidden' ? setOneProject('project-description-1') : setOneProject('project-description-hidden');
    };
    const closeProjectOne = ()=> {
        oneProject === 'project-description-1' ? setOneProject('project-description-hidden') : setOneProject('project-description-hidden');
    };
    const [twoProject, setTwoProject] = useState("project-description-hidden");
    const openProjectTwo = ()=> {
        twoProject === 'project-description-hidden' ? setTwoProject('project-description-2') : setTwoProject('project-description-hidden');
    };
    const closeProjectTwo = ()=> {
        twoProject === 'project-description-2' ? setTwoProject('project-description-hidden') : setTwoProject('project-description-hidden');
    };
    const [threeProject, setThreeProject] = useState("project-description-hidden");
    const openProjectThree = ()=> {
        threeProject === 'project-description-hidden' ? setThreeProject('project-description-3') : setThreeProject('project-description-hidden');
    };
    const closeProjectThree = ()=> {
        threeProject === 'project-description-3' ? setThreeProject('project-description-hidden') : setThreeProject('project-description-hidden');
    };
    const [fourProject, setFourProject] = useState("project-description-hidden");
    const openProjectFour = ()=> {
        fourProject === 'project-description-hidden' ? setFourProject('project-description-4') : setFourProject('project-description-hidden');
    };
    const closeProjectFour = ()=> {
        fourProject === 'project-description-4' ? setFourProject('project-description-hidden') : setFourProject('project-description-hidden');
    };
    const [fiveProject, setFiveProject] = useState("project-description-hidden");
    const openProjectFive = ()=> {
        fiveProject === 'project-description-hidden' ? setFiveProject('project-description-5') : setFiveProject('project-description-hidden');
    };
    const closeProjectFive = ()=> {
        fiveProject === 'project-description-5' ? setFiveProject('project-description-hidden') : setFiveProject('project-description-hidden');
    };
    const [sixProject, setSixProject] = useState("project-description-hidden");
    const openProjectSix = ()=> {
        sixProject === 'project-description-hidden' ? setSixProject('project-description-6') : setSixProject('project-description-hidden');
    };
    const closeProjectSix = ()=> {
        sixProject === 'project-description-6' ? setSixProject('project-description-hidden') : setSixProject('project-description-hidden');
    };
    const [sevenProject, setSevenProject] = useState("project-description-hidden");
    const openProjectSeven = ()=> {
        sevenProject === 'project-description-hidden' ? setSevenProject('project-description-7') : setSevenProject('project-description-hidden');
    };
    const closeProjectSeven = ()=> {
        sevenProject === 'project-description-7' ? setSevenProject('project-description-hidden') : setSevenProject('project-description-hidden');
    };
    const [eightProject, setEightProject] = useState("project-description-hidden");
    const openProjectEight = ()=> {
        eightProject === 'project-description-hidden' ? setEightProject('project-description-8') : setEightProject('project-description-hidden');
    };
    const closeProjectEight = ()=> {
        eightProject === 'project-description-8' ? setEightProject('project-description-hidden') : setEightProject('project-description-hidden');
    };
    const [nineProject, setNineProject] = useState("project-description-hidden");
    const openProjectNine = ()=> {
        nineProject === 'project-description-hidden' ? setNineProject('project-description-9') : setNineProject('project-description-hidden');
    };
    const closeProjectNine = ()=> {
        nineProject === 'project-description-9' ? setNineProject('project-description-hidden') : setNineProject('project-description-hidden');
    };
    return(
        <div className="project-container">
            <div className="project-title" id='projects'>
                <h1>Projetos</h1>
            </div>
            <div className="project-body">
                <div className="project-content">
                    <div className="project-name">
                        <h3>Confeitaria</h3>
                    </div>
                    <div className="project-image">
                        <button className='btn-description' onMouseEnter={openProjectOne}>
                            <BsFillInfoCircleFill/>
                        </button>
                        <img src={LogoConfectonery} alt="logo-confeitaria"/>
                    </div>
                    <div className={oneProject} onMouseLeave={closeProjectOne}>
                        <p>Um dos primeiros projetos criados. Uma confeitaria desenvolvida com bootstrap, explorando conceitos de modal, slide carousel e um design de cores que faz referência a seus produtos.</p>
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
                        <button><a href="https://wagnermm.github.io/brigadeiros-paes/" target='blank'>Ver Projeto</a></button>
                        <button className='btn-code'><a href="https://github.com/wagnermm/brigadeiros-paes" target='blank'>Ver Código</a></button>
                    </div>
                </div>
                <div className="project-content">
                    <div className="project-name">
                        <h3>Mario Jump</h3>
                    </div>
                    <div className="project-image">
                        <button className='btn-description' onMouseEnter={openProjectTwo}>
                            <BsFillInfoCircleFill/>
                        </button>   
                        <img src={Mario} alt="mario" />
                    </div>
                    <div className={twoProject} onMouseLeave={closeProjectTwo}>
                        <p>Jogo do Mario desenvolvido em javascript. Com funções e keyframes é possivel manipular o personagem clicando na tela. Se o Mario não pular sobre o obstáculo, a animação se encerrará e uma imagem de game over será exibida.</p>
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
                        <button><a href="https://wagnermm.github.io/mario-game/" target='blank'>Ver Projeto</a></button>
                        <button className='btn-code'><a href="https://github.com/wagnermm/mario-game" target='blank'>Ver Código</a></button>
                    </div>
                </div>
                <div className="project-content">
                    <div className="project-name">
                        <h3>BarberShop</h3>
                    </div>
                    <div className="project-image">
                        <button className='btn-description' onMouseEnter={openProjectThree}>
                            <BsFillInfoCircleFill/>
                        </button>
                        <img src={LogoBarberShop} alt="logo-barbearia"/>
                    </div>
                    <div className={threeProject} onMouseLeave={closeProjectThree}>
                        <p>Uma barbearia, desenvolvida com html, css e javascript e um design característico de uma barbershop. Nesse projeto utilizei o owl carousel para exibir os cortes e um formulário para os clientes agendarem um horário.</p>
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
                        <button><a href="https://wagnermm.github.io/barbershop/" target='blank'>Ver Projeto</a></button>
                        <button className='btn-code'><a href="https://github.com/wagnermm/barbershop" target='blank'>Ver Código</a></button>
                    </div>
                </div>
                <div className="project-content">
                    <div className="project-name">
                        <h3>Calculator</h3>
                    </div>
                    <div className="project-image">
                        <button className='btn-description' onMouseEnter={openProjectFour}>
                            <BsFillInfoCircleFill/>
                        </button>
                        <img src={CalculatorImg} alt="calculadora"/>
                    </div>
                    <div className={fourProject} onMouseLeave={closeProjectFour}>
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
                        <button><a href="https://wagnermm.github.io/calculator-js/" target='blank'>Ver Projeto</a></button>
                        <button className='btn-code'><a href="https://github.com/wagnermm/calculator-js" target='blank'>Ver Código</a></button>
                    </div>
                </div>
                <div className="project-content">
                    <div className="project-name">
                        <h3>Tela de Login</h3>
                    </div>
                    <div className="project-image">
                        <button className='btn-description' onMouseEnter={openProjectFive}>
                            <BsFillInfoCircleFill/>
                        </button>
                        <img src={TelaLogin} alt="Telalogin"/>
                    </div>
                    <div className={fiveProject} onMouseLeave={closeProjectFive}>
                        <p>Nessa tela de login temos uma apresentação de um layout responsivo e um design gráfico muito compreensível, explorando conceitos after e before do css, além de regex para validar o formulário.</p>
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
                        <button><a href="https://wagnermm.github.io/form-login/" target='blank'>Ver Projeto</a></button>
                        <button className='btn-code'><a href="https://github.com/wagnermm/form-login/tree/main" target='blank'>Ver Código</a></button>
                    </div>
                </div>
                <div className="project-content">
                    <div className="project-name">
                        <h3>Advocacia</h3>
                    </div>
                    <div className="project-image">
                        <button className='btn-description' onMouseEnter={openProjectSix}>
                            <BsFillInfoCircleFill/>
                        </button>
                        <img src={PHlogo} alt="phLogo"/>
                    </div>
                    <div className={sixProject} onMouseLeave={closeProjectSix}>
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
                        <button><a href="https://wagnermm.github.io/law-firm/" target='blank'>Ver Projeto</a></button>
                        <button className='btn-code'><a href="https://github.com/wagnermm/law-firm" target='blank'>Ver Código</a></button>
                    </div>
                </div>
                <div className="project-content">
                    <div className="project-name">
                        <h3>Interactive Card</h3>
                    </div>
                    <div className="project-image">
                        <button className='btn-description' onMouseEnter={openProjectSeven}>
                            <BsFillInfoCircleFill/>
                        </button>
                        <img src={interactiveCard} alt="interactive card"/>
                    </div>
                    <div className={sevenProject} onMouseLeave={closeProjectSeven}>
                        <p>Um cartão que pode interagir com o usuário que pode cadastrar o seu cartão e ver o preenchimento automático. Não há back-end para salvar os dados, esta aplicação somente exibe a interfácie e valida os campos de entrada.</p>
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
                        <button><a href="https://wagnermm.github.io/interactive-card/" target='blank'>Ver Projeto</a></button>
                        <button className='btn-code'><a href="https://github.com/wagnermm/interactive-card" target='blank'>Ver Código</a></button>
                    </div>
                </div>
                <div className="project-content">
                    <div className="project-name">
                        <h3>Crystaline</h3>
                    </div>
                    <div className="project-image">
                        <button className='btn-description' onMouseEnter={openProjectEight}>
                            <BsFillInfoCircleFill/>
                        </button>
                        <img src={WebStore} alt="loja"/>
                    </div>
                    <div className={eightProject} onMouseLeave={closeProjectEight}>
                        <p>Projeto web page de uma loja de colares artesanais. Nesse projeto pude aprender mais sobre jQery e alguns de seus mais importantes plugis, como owl carousel e jquery validate.</p>
                        <div className="project-tecnology">
                            <div className="html-logo">
                                <FaHtml5/>
                            </div>
                            <div className="css-icon">
                                <IoLogoCss3/>
                            </div>
                            <div className="jquery-icon">
                                <DiJqueryLogo/>
                            </div>
                        </div>
                    </div>
                    <div className="project-link">
                        <button><a href="https://wagnermm.github.io/web-store/" target='blank'>Ver Projeto</a></button>
                        <button className='btn-code'><a href="https://github.com/wagnermm/web-store" target='blank'>Ver Código</a></button>
                    </div>
                </div>
                <div className="project-content">
                    <div className="project-name">
                        <h3>Net Web</h3>
                    </div>
                    <div className="project-image">
                        <button className='btn-description' onMouseEnter={openProjectNine}>
                            <BsFillInfoCircleFill/>
                        </button>
                        <img src={NetWeb} alt="net web"/>
                    </div>
                    <div className={nineProject} onMouseLeave={closeProjectNine}>
                        <p>Um projeto desenvolvido com vite e react e nele pude criar uma loja virtual com mais opções. Também pude importar o react-bootstrap para utilizar alguns carousels e assim exibir melhor os produtos da loja.</p>
                        <div className="project-tecnology">
                            <div className="vite-logo">
                                <SiVitess/>
                            </div>
                            <div className="react-logo">
                                <FaReact/>
                            </div>
                            <div className="bootstrap-icon">
                                <FaBootstrap/>
                            </div>
                        </div>
                    </div>
                    <div className="project-link">
                        <button><a href="https://wagnermm.github.io/netweb/" target='blank'>Ver Projeto</a></button>
                        <button className='btn-code'><a href="https://github.com/wagnermm/netweb" target='blank'>Ver Código</a></button>
                    </div>
                </div>
            </div>
            <div className="top">
                <a href="#top">Voltar ao topo</a>
            </div>
        </div>
    )
}

export default Projects