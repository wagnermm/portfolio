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
                        <p>
                            Sou desenvolvedor front-end e trabalho com React tendo experiência na criação de interfaces de usuário dinâmicas e responsivas. Apaixonado por tecnologia e inovação, tenho uma forte habilidade em transformar designs complexos em componentes reutilizáveis e eficientes. Meu objetivo é sempre criar experiências de usuário intuitivas e funcionais.
                        </p>
                    </div>
                </div>
                <div className="skills">
                    <div className="skills-content">
                        <div className="skills-title">
                            <h2>Skills</h2>
                        </div>
                        <div className="skill-list">
                            <span className="ether"><FaCheck/></span>
                            <p>Semântica, boas práticas, responsividade.</p>
                        </div>
                        <div className="skill-list">
                            <span className="ether"><FaCheck/></span>
                            <p>Scrum, kanban, jira, postman.</p>
                        </div>
                        <div className="skill-list">
                            <span className="ether"><FaCheck/></span>
                            <p>GitFlow, gitBash, gitLab.</p>
                        </div>
                        <div className="skill-list">
                            <span className="ether"><FaCheck/></span>
                            <p>Form validate, APIs, RegEx, DOM.</p>
                        </div>
                        <div className="skill-list">
                            <span className="ether"><FaCheck/></span>
                            <p>Frameworks, libs, npm, plugins.</p>
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
