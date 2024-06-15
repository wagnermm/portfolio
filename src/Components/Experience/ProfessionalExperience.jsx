import React from "react";
import './ProfessionalExperience.css';
import { Container, Row } from "react-bootstrap";
import { FaCheck } from 'react-icons/fa';

function ProfessionalExperience() {
    return(
        <div className="professionalContainer" id="experience">
            <Container>
                <Row>
                    <div className="titleProfession">
                        <h2>Experiência Profissional</h2>
                    </div>
                </Row>
                <Row>
                    <div className="professionalExperience">
                        <h3>FreeLancer (2 anos)</h3>
                        <div className="skill-list">
                        <span className="ether"><FaCheck/></span>
                        <h5>Criação de sites para pequenas empresas , focando em soluções personalizadas e de alta qualidade para atender às necessidades específicas de cada cliente. Minha atuação envolveu desde o planejamento e design até a implementação e otimização de sites responsivos, garantindo uma experiência de usuário intuitiva e atraente. Utilizei tecnologias modernas como HTML5, CSS3, JavaScript.</h5>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className="professionalExperience">
                        <h3>Sendio Multicanal (Novembro de 2023 - emprego atual)</h3>
                        <div className="skill-list">
                        <span className="ether"><FaCheck/></span>
                        <h5>Atuo como desenvolvedor React para criar soluções inovadoras para chatbots e desenvolvimento de dashboards interativos, além de realizar integrações robustas com diversas APIs. Utilizando a biblioteca Axios, implementei métodos de requisição HTTP adequados para garantir a comunicação eficiente com serviços backend, assegurando que os dados sejam tratados e exibidos de maneira otimizada e segura.</h5>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default ProfessionalExperience