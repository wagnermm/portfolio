import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './Projects.css';
import BarberLogo from '../Images/logo.jpg';
import Home from '../../Pages/Home';

const Projects=()=> {
    return(
        <BrowserRouter>
            <div className="main-project">
                <h1>Meus projetos</h1>
                <div className="project-cards" id="projects">
                    <div className="project">
                        <a href="http://" target="_blank" rel="noopener noreferrer"><img src={BarberLogo} alt="logo" /></a>
                    </div>
                    <div className="project">
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                        </Routes>
                    </div>
                    <div className="project">

                    </div>
                    <div className="project">

                    </div>
                    <div className="project">

                    </div>
                    <div className="project">

                    </div>
                </div>
                <div className="top"><a href="#top">Voltar ao topo</a></div>
            </div>
        </BrowserRouter>
    )
}

export default Projects