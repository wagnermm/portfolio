import React from "react";
import './SideBar.css'
import Avatar from '../Images/wagner.jpg'

const SideBar =()=> {
    return(      
        <div id="sidebar">
            <div className="profile">
                <p><img src={Avatar} alt="Wagner Miranda" /></p>
                <p className="title">Desenvolveor Web</p>
            </div>
            <div className="infoText">
                <h2>Olá, eu sou Wagner Miranda e bem vindo ao meu portifólio.</h2>
                <p>Sou um desenvolvedor web e trabalho com React.Js. Tenho desenvolvido alguns projetos que você poderá conferir nesta página.</p>
            </div>
        </div> 
    )
}

export default SideBar