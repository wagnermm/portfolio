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
import Brigadeiro from '../Images/brigadeiro.png';
import { FaBootstrap, FaSass, FaHtml5, FaReact } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoCss3 } from 'react-icons/io';
import { DiJqueryLogo } from 'react-icons/di';
import { SiVitess } from 'react-icons/si';


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
                    <div className="project-description">
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
                    </div>
                </div>
                <div className="project-content">
                    <div className="project-name">
                        <h3>BarberShop</h3>
                    </div>
                    <div className="project-image">
                        <img src={LogoBarberShop} alt="logo-barbearia" />
                    </div>
                    <div className="project-description">
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
                    </div>
                </div>
                <div className="project-content">
                    <div className="project-name">
                        <h3>Calculator</h3>
                    </div>
                    <div className="project-image">
                        <img src={CalculatorImg} alt="calculadora" />
                    </div>
                    <div className="project-description">
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
                    </div>
                </div>
                <div className="project-content">
                    <div className="project-name">
                        <h3>Tela de Login</h3>
                    </div>
                    <div className="project-image">
                        <img src={TelaLogin} alt="Telalogin" />
                    </div>
                    <div className="project-description">
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
                    </div>
                </div>
                <div className="project-content">
                    <div className="project-name">
                        <h3>Escritório de Advocacia</h3>
                    </div>
                    <div className="project-image">
                        <img src={PHlogo} alt="phLogo" />
                    </div>
                    <div className="project-description">
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
                    </div>
                </div>
                <div className="project-content">
                    <div className="project-name">
                        <h3>Calculadora IMC</h3>
                    </div>
                    <div className="project-image">
                        <img src={Imc} alt="imc" />
                    </div>
                    <div className="project-description">
                        <p>O primeiro projeto desenvolvido em react, nele pude ter melhor compreensão de jsx, components e hooks importantes como o use state. A aplicação realiza o cálculo IMC com base no peso e altura do usuário.</p>
                        <div className="project-tecnology">
                            <div className="react-logo">
                                <FaReact/>
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
                    <div className="project-description">
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
                    </div>
                </div>
                <div className="project-content">
                    <div className="project-name">
                        <h3>Net Web</h3>
                    </div>
                    <div className="project-image">
                        <img src={NetWeb} alt="net web" />
                    </div>
                    <div className="project-description">
                        <p>Um projeto desenvolvido com vite e react e nele pude criar uma loja virtual mais robusta e com mais opções. Também pude importar o react-bootstrap para utilizar alguns carousels e assim exibir melhor os produtos da loja.</p>
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
                    </div>
                </div>
                <div className="project-content">
                    <div className="project-name">
                        <h3>Brigaderia</h3>
                    </div>
                    <div className="project-image">
                        <img src={Brigadeiro} alt="brigadeiro"/>
                    </div>
                    <div className="project-description">
                        <p>Nesse projeto desenvolvido com javascript, sass e jQery, criei uma web page totalmente funcional e responsiva. Uma brigaderia com design atraente e seus produtos destacados em cards e carrosel</p>
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