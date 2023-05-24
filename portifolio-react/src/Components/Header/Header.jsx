import React from "react";
import './Header.css'

const Header =()=> {
    return(
        <div className="portifolio-header">
          <div>
            <h1>Wagner Miranda</h1>
            <div className="line"></div>
          </div>
          <div id='links'>
            <ul><li id="home"><a href="index.html">Home</a></li></ul>
            <ul><li id="sobre"><a href="#about">Sobre</a></li></ul>
            <ul><li id="projeto"><a href="#projects">Projetos</a></li></ul>
            <ul><li id="contato"><a href="#contact">Contato</a></li></ul>
          </div>
        </div>
    )
}

export default Header