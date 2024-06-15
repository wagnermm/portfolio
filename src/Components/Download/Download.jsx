import React from "react";
import './Download.css';
import Resume from './arquivo-pdf/curriculo.pdf';

function Download() {
    return(
        <div className="btn-container">
            <button className="btn-download"> <a href={Resume} download='curriculo' target="_blank" rel="noopener noreferrer"> Download currículo </a> </button>
        </div>
    )
}

export default Download