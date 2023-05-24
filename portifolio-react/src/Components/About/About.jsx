import React from "react";
import './About.css';
import Html from '../Images/html.jpg'
import Css from '../Images/css.jpg'
import Js from '../Images/js.png'
import Node from '../Images/node.jpg'
import Bootstrap from '../Images/bootstrap.png'
import Rct from '../Images/react.jfif'

const About =()=> {
    return(
        <div className="aboutMe" id="about">
            <div className="aboutText">
            <h1 className="lineTitle">Sobre mim</h1>
            <p>Desde cedo sempre gostei de tecnologia e entender como as coisas funcionavam, quando meu 
            computador tinha problemas por exemplo, queria tentar resolver de forma lógica.
            Mas apesar de tudo, não segui carreira de imediato ao ivés disso fui por outro camiho.
            Alguns anos depois com mudanças no mundo tecnológico e conhecendo pessoas da área de TI,  percebi que havia uma paixão interna por algo que já conhecia antes, algo que pudesse me satisfazer e me desafiar profissionalmente, algo que me fizesse crescer. Com isso descobri minha vocação como web developer. A partir daí, criei meu plano de carreira que passava antes por um plano de estudos.
            Hoje tenho desenvolvido algumas web pages para pequenas empresas de amigos e isso tem me ajudado a me desenvolver como profissional, mais ainda busco uma oportunidade em uma grande empresa onde eu possa demonstrar toda a minha paixão por essa profissão e compartilhar conhecimentos com novas pessoas.
            </p>
            </div>
            <h2>Principais tecnologioas que utilizo:</h2>
            <div className="tecnologies">
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
                    <p> A primeira linguagem que tive contato, comecei com JavaScript em 2022 com desenvolvimento de algorítmos, validação de formulários utilizando RegEx.</p>
                </div>
                <div className="tecnologies-box">
                    <h5>NodeJs</h5>
                    <img src={Node} alt="node" />
                    <p> Iniciando em 2022, com Node pude aprimorar conceitos sobre o JavaScript criando classes e objetos, também utilizando npm para instalar e gerenciar frameworks e bibliotecas.</p>
                </div>
                <div className="tecnologies-box">
                    <h5>Bootstrap</h5>
                    <img src={Bootstrap} alt="bootstrap" />
                    <p> Comecei com Bootstrap também em 2022, através dele pude melhorar meus projetos tornando sites mais responsivos e utilizando ferramentas como modal e slide carousel.</p>
                </div>
                <div className="tecnologies-box">
                    <h5>ReactJs</h5>
                    <img src={Rct} alt="react" />
                    <p> Tendo inicio em 2023, com React pude criar projetos mais elaborados e melhores organizados através dos components, como calculadora, e-commerce, shopping-car e forms</p>
                </div>
            </div>
        </div>
    )
}

export default About