import './About.css';
import Html from '../Images/html.jpg';
import Css from '../Images/css.jpg';
import Js from '../Images/js.png';
import Node from '../Images/node.jpg';
import Bootstrap from '../Images/bootstrap.png';
import Rct from '../Images/react.jfif';

const About =()=> {
    return(
        <div className="aboutMe" id="about">
            <div className="aboutText">
                <h1 className="lineTitle">Sobre mim</h1>
                <p>Desde cedo sempre gostei de tecnologia e entender como as coisas funcionavam, quando meu 
                computador tinha problemas por exemplo ou simplesmente não conseguia conectar minha internet discada, queria tentar resolver de imediato e de forma lógica. Mas apesar de tudo, não segui carreira em informática ao invés disso, escolhi outra profissão. Por mais de 10 anos trabalhei como segurança patrimonial, tendo experiências incríveis, trabalhando com gestão de pessoas, liderando equipes e desenvolvendo minha integridade profissional. Acabei conhecendo profissionais da área de TI, e pude conhecer mais sobre a profissão, com isso percebi que havia uma paixão por algo que já conhecia antes, algo que pudesse me satisfazer e me desafiar profissionalmente, algo que me fizesse crescer. Percebi que era hora de encerrar ciclos e a partir dos 35 anos venho tentando migrar para profissão de desenvolvedor. Criei um plano de carreira que passava antes por um plano de estudos, realizando cursos, faculdade e atuando como freelancer. Hoje tenho desenvolvido algumas web pages para pequenas empresas de amigos e isso tem me ajudado a me desenvolver como profissional front-end, mais ainda busco uma oportunidade em uma grande empresa onde eu possa demonstrar minhas qualificações e compartilhar conhecimentos com novas pessoas. Sou casado há 13 anos, tenho 1 filho de 10 e juntos frequentamos a igreja evangélica. Também sou mergulhador profissional mas não atuo na área e sou fascinado por história antiga e medieval, tendo uma coleção de moedas antigas.
                </p>
            </div>
            <div className="tecnologies">
                <div className="tecnologies-title">
                    <h2>Principais tecnologioas que utilizo</h2>
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
                    <p> Tendo inicio em 2023, com React pude criar projetos mais elaborados e melhores organizados através do jsx, components e hooks, como calculadora, forms e shopping cart.</p>
                </div>
            </div>
        </div>
    )
}

export default About