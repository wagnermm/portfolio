import './About.css';
import Html from '../Images/html.jpg';
import Css from '../Images/css.jpg';
import Js from '../Images/js.png';
import Node from '../Images/node.jpg';
import Bootstrap from '../Images/bootstrap.png';
import Rct from '../Images/react.jfif';

const About =()=> {
    return(
        <div className="aboutContainer" id="about">
            <div className="aboutMe">
                <div className="aboutMeDescription">
                    <div className="aboutTitle">
                        <h2>Sobre mim</h2>
                    </div>
                    <div className="aboutText">
                        <p>Amo de tecnologia e gosto de entender como ela funciona. Em 2021 iniciei o curso Front-End na EBAC, pude aprender sobre UX/UI, além das principais tecnologias como JavaScript, e compreender conceitos de OOP. Em 2023 comecei a cursar Análise e Desenvolvimento de Sistemas, e pude aperfeiçoar conhecimentos técnicos e conhecer mais sobre metodologias ágeis. Ainda busco uma oportunidade de trabalho onde eu possa me desenvolver ainda mais e compartilhar conhecimentos com outras pessoas.
                        </p>
                    </div>
                </div>
                <div className="tecnologies">
                    <div className="tecnologies-title">
                        <h2>Minhas skills</h2>
                    </div>
                    <div className="tecnologies-box">
                        <h5>HTML5</h5>
                        <img src={Html} alt="html" />
                        <p> Comecei a estudar html em 2021, desenvolvendo tabelas, listas, produzindo textos e interfaces mais simples.</p>
                    </div>
                    <div className="tecnologies-box">
                        <h5>CSS3</h5>
                        <img src={Css} alt="css" />
                        <p> Junto com html, iniciei meus estudos com css em 2021 produzindo interfaces mais estilizadas como landing pages e formulários.</p>
                    </div>
                    <div className="tecnologies-box">
                        <h5>JavaScript</h5>
                        <img src={Js} alt="javascript" />
                        <p> A primeira linguagem que tive contato, comecei com JavaScript em 2022 com desenvolvimento de algorítmos, validação de formulários utilizando RegEx e manipulação do DOM.</p>
                    </div>
                    <div className="tecnologies-box">
                        <h5>NodeJs</h5>
                        <img src={Node} alt="node" />
                        <p> Iniciando em 2022, com Node pude aprimorar conceitos sobre o ambiente JavaScript, também utilizando npm para instalar e gerenciar frameworks e bibliotecas.</p>
                    </div>
                    <div className="tecnologies-box">
                        <h5>Bootstrap</h5>
                        <img src={Bootstrap} alt="bootstrap" />
                        <p> Comecei com Bootstrap também em 2022, através dele pude conhecer ferramentas como modal e slide carousel.</p>
                    </div>
                    <div className="tecnologies-box">
                        <h5>ReactJs</h5>
                        <img src={Rct} alt="react" />
                        <p> Tendo inicio em 2023, com React pude criar projetos dinâmicos com o uso de seus components.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About