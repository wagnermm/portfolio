import './About.css';
import Html from '../Images/html.jpg';
import Css from '../Images/css.jpg';
import Js from '../Images/js.png';
import Node from '../Images/node.jpg';
import Bootstrap from '../Images/bootstrap.png';
import Sass from '../Images/sass.jpg';
import Jquery from '../Images/jquery.jpg';
import Rct from '../Images/react.jfif';
import { FaCheck } from 'react-icons/fa';

const About =()=> {
    return(
        <div className="aboutContainer" id="about">
            <div className="aboutMe">
                <div className="aboutMeDescription">
                    <div className="aboutTitle">
                        <h2>Sobre mim</h2>
                    </div>
                    <div className="aboutText">
                        <p>Sou apaixonado por tecnologia e sempre procurei entender como ela funciona. Durante meu curso Front-End na EBAC em 2021, aprendi a utilizar algumas das mais importantes tecnologias como <span className='colorText'>JavaScript e React.JS</span>, além de conceitos de <span className='colorText'>UX/UI</span>, também pude compreender sobre <span className='colorText'>OOP</span>. Atualmente estou cursando Análise e Desenvolvimento de Sistemas, com isso venho aperfeiçoando conhecimentos técnicos e aprendendo mais sobre metodologias ágeis como <span className='colorText'>Scrum e Kanban</span>. Busco uma oportunidade de trabalho onde eu possa me desenvolver ainda mais e compartilhar conhecimentos.
                        </p>
                    </div>
                </div>
                <div className="skills">
                    <div className="skills-content">
                        <div className="skills-title">
                            <h2>Minhas skills</h2>
                        </div>
                        <div className="skill-list">
                            <span className="ether"><FaCheck/></span>
                            <p>Semântica, boas práticas, responsividade.</p>
                        </div>
                        <div className="skill-list">
                            <span className="ether"><FaCheck/></span>
                            <p>Criação de tabelas, listas, news letter, landing pages e web pages.</p>
                        </div>
                        <div className="skill-list">
                            <span className="ether"><FaCheck/></span>
                            <p>Variáveis, form validate, RegEx, DOM, Classes, Objetos e OOP </p>
                        </div>
                        <div className="skill-list">
                            <span className="ether"><FaCheck/></span>
                            <p>Frameworks, bibliotecas, npm e plugins.</p>
                        </div>
                        <div className="skill-list">
                            <span className="ether"><FaCheck/></span>
                            <p>React componentes e Hooks.</p>
                        </div>
                    </div>
                    <div className="technologies">
                        <div className="skills-title">
                            <h2>Tecnologias</h2>
                        </div>
                        <div className="tecnologies-box">
                            <h5>HTML5</h5>
                            <img src={Html} alt="html" />
                        </div>
                        <div className="tecnologies-box">
                            <h5>CSS3</h5>
                            <img src={Css} alt="css" />
                        </div>
                        <div className="tecnologies-box">
                            <h5>JavaScript</h5>
                            <img src={Js} alt="javascript" />
                        </div>
                        <div className="tecnologies-box">
                            <h5>NodeJs</h5>
                            <img src={Node} alt="node" />
                        </div>
                        <div className="tecnologies-box">
                            <h5>Bootstrap</h5>
                            <img src={Bootstrap} alt="bootstrap" />
                        </div>
                        <div className="tecnologies-box">
                            <h5>Sass</h5>
                            <img src={Sass} alt="bootstrap" />
                        </div>
                        <div className="tecnologies-box">
                            <h5>Jquery</h5>
                            <img src={Jquery} alt="bootstrap" />
                        </div>
                        <div className="tecnologies-box">
                            <h5>ReactJs</h5>
                            <img src={Rct} alt="react" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
