import React from 'react';
import './CSS/Education.css';

function Education() {
    return (
        <div className="education-section">
            <h2>Formación Académica</h2>
            <div className="education-columns">
                <div className="education-column">
                    <div className="education-entry">
                        <h3>Ingeniería de Sistemas</h3>
                        <p><strong>Universidad Cooperativa de Colombia - Fecha: 09-12-2016</strong></p>
                    </div>

                    <div className="education-entry">
                        <h3>Especialización en Ingeniería de Software</h3>
                        <p><strong>Universidad Javeriana Cali - Fecha: 12-09-2022</strong></p>
                    </div>
                </div>

                <div className="education-column">
                    <div className="education-entry">
                        <h3>Maestría en Ingeniería de Software</h3>
                        <p><strong>Universidad Javeriana Cali - Trabajo de grado</strong></p>
                    </div>

                    <div className="education-entry">
                        <h3>Maestría Gerencia en Tecnologías de la Información</h3>
                        <p><strong>Universidad Icesi - Trabajo de grado</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
