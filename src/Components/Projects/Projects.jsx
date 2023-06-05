import './Projects.css';
import LogoConfectonery from '../Images/confectonery.png';
import Mario from '../Images/mario.gif';
import LogoBarberShop from '../Images/logo.jpg';
import CalculatorImg from '../Images/calculator.png';


const Projects=()=> {
    return(
        <div className="project-container">
            <div className="project-title" id='projects'>
                <h1>Projetos</h1>
            </div>
            <div className="project-body">
                <div className="project-content">
                    <div className="project-link">
                        <h3>Confeitaria</h3>
                        <a href="https://wagnermm.github.io/confectionery/" target='blank'><img src={LogoConfectonery} alt="logo-confeitaria" /></a>
                    </div>
                </div>
                <div className="project-content">
                    <div className="project-link">
                        <h3>Mario Jump</h3>
                        <a href="https://wagnermm.github.io/mario-game/" target='blank'><img src={Mario} alt="mario" /></a>
                    </div>
                </div>
                <div className="project-content">
                    <div className="project-link">
                        <h3>BarberShop</h3>
                        <a href="https://wagnermm.github.io/barbershop/" target='blank'><img src={LogoBarberShop} alt="logo-barbearia" /></a>
                    </div>
                </div>
                <div className="project-content">
                    <div className="project-link">
                        <h3>Calculator</h3>
                        <a href="" target='blank'><img src={CalculatorImg} alt="calculadora" /></a>
                    </div>
                </div>
                <div className="project-content">

                </div>
                <div className="project-content">
                    
                </div>
            </div>
            <div className="top">
                <a href="#top">Voltar ao topo</a>
            </div>
        </div>
    )
}

export default Projects