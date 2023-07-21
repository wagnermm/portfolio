import './Projects.css';
import LogoConfectonery from '../Images/confectonery.png';
import Mario from '../Images/mario.gif';
import LogoBarberShop from '../Images/logo.jpg';
import CalculatorImg from '../Images/calculator.gif';
import TelaLogin from '../Images/telalogin.png';
import PHlogo from '../Images/ph.png';
import Imc from '../Images/imc.png';
import WebStore from '../Images/webstore.jpg';
import NetWeb from '../Images/netweb.png';
import { FaBootstrap, FaSass } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';


const Projects=()=> {
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
                        <img src={LogoConfectonery} alt="logo-confeitaria"/>
                    </div>
                    <div className="project-description">
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
                        <button><a href="https://wagnermm.github.io/confectionery/" target='blank'>Ver Projeto</a></button>
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
                        <button><a href="https://wagnermm.github.io/mario-game/" target='blank'>Ver Projeto</a></button>
                    </div>
                </div>
                <div className="project-content">
                    <div className="project-name">
                        <h3>BarberShop</h3>
                    </div>
                    <div className="project-image">
                        <img src={LogoBarberShop} alt="logo-barbearia" />
                    </div>
                    <div className="project-link">
                        <button><a href="https://wagnermm.github.io/barbershop/" target='blank'>Ver Projeto</a></button>
                    </div>
                </div>
                <div className="project-content">
                    <div className="project-name">
                        <h3>Calculator</h3>
                    </div>
                    <div className="project-image">
                        <img src={CalculatorImg} alt="calculadora" />
                    </div>
                    <div className="project-link">
                        <button><a href="https://wagnermm.github.io/calculator-js/" target='blank'>Ver Projeto</a></button>
                    </div>
                </div>
                <div className="project-content">
                    <div className="project-name">
                        <h3>Tela de Login</h3>
                    </div>
                    <div className="project-image">
                        <img src={TelaLogin} alt="Telalogin" />
                    </div>
                    <div className="project-link">
                        <button><a href="https://wagnermm.github.io/form-css/" target='blank'>Ver Projeto</a></button>
                    </div>
                </div>
                <div className="project-content">
                    <div className="project-name">
                        <h3>Escritório de Advocacia</h3>
                    </div>
                    <div className="project-image">
                        <img src={PHlogo} alt="phLogo" />
                    </div>
                    <div className="project-link">
                        <button><a href="https://wagnermm.github.io/law-firm/" target='blank'>Ver Projeto</a></button>
                    </div>
                </div>
                <div className="project-content">
                    <div className="project-name">
                        <h3>Calculadora IMC</h3>
                    </div>
                    <div className="project-image">
                        <img src={Imc} alt="imc" />
                    </div>
                    <div className="project-link">
                        <button><a href=" https://wagnermm.github.io/IMC/" target='blank'>Ver Projeto</a></button>
                    </div>
                </div>
                <div className="project-content">
                    <div className="project-name">
                        <h3>Colares artesanais</h3>
                    </div>
                    <div className="project-image">
                        <img src={WebStore} alt="loja" />
                    </div>
                    <div className="project-link">
                        <button><a href="https://wagnermm.github.io/web-store/" target='blank'>Ver Projeto</a></button>
                    </div>
                </div>
                <div className="project-content">
                    <div className="project-name">
                        <h3>Net Web</h3>
                    </div>
                    <div className="project-image">
                        <img src={NetWeb} alt="net web" />
                    </div>
                    <div className="project-link">
                        <button><a href="https://wagnermm.github.io/netweb/" target='blank'>Ver Projeto</a></button>
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