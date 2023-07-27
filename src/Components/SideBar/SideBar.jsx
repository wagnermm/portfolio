import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Avatar from '../Images/wagner1.jpg';

import './SideBar.css';

const SideBar =()=> {
    return(      
        <aside className="sidebar">
            <div className="profile">
                <p><img src={Avatar} alt="Wagner Miranda" /></p>
                <p className="title">Desenvolveor Front-end</p>
                <div className="main-social">
                    <div className="socials">
                        <div className="linkedin">
                            <a href="https://www.linkedin.com/in/wagner-mm/" target="blank"><FaLinkedin/></a>
                        </div>
                        <div className="github">
                            <a href="https://github.com/wagnermm" target="blank"><FaGithub/></a>
                        </div>  
                    </div>
                </div>
            </div>
            <div className="infoText">
                <h2>Olá, seja bem vindo ao meu portfólio!</h2>
                <p>Sou um desenvolvedor web e trabalho com React. Tenho desenvolvido alguns projetos que você poderá conferir nesta página.</p>
            </div>
        </aside> 
    )
}

export default SideBar