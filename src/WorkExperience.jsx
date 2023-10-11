import React from 'react';
import './CSS/WorkExperience.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import ExsisDigitalExperience from "./ExsisDigitalExperience";
import CoomevaExperience from "./CoomevaExperience";
import CinteExperience from "./CinteExperience";
import NovatecExperience from "./NovatecExperience";
import TaylorandJohnson from "./TaylorandJohnson";
import FrelanceExperience from "./FrelanceExperience";
function WorkExperience() {
    return (
        <Router>
            <div className="App">
                {/* ... Otros componentes ... */}
                <div className="work-experience-container">
                    <div className="experience-column">
                        <Link to="/exsis-digital-experience">EXSIS DIGITAL</Link>
                        {/* Otros títulos con sus respectivos enlaces */}
                    </div>
                    <div className="experience-column">
                        <Link to="/coomeva-medicina-prepagada">COOMEVA MEDICINA PREPAGADA</Link>
                        {/* Títulos y enlaces para la segunda columna */}
                    </div>
                    <div className="experience-column">
                        <Link to="/cinte-experience">CINTE</Link>
                        {/* Títulos y enlaces para la segunda columna */}
                    </div>
                    <div className="experience-column">
                        <Link to="/novatec-experience">NOVATEC</Link>
                        {/* Títulos y enlaces para la segunda columna */}
                    </div>
                    <div className="experience-column">
                        <Link to="/taylor-experience">JOHNSON AND TAYLOR</Link>
                        {/* Títulos y enlaces para la segunda columna */}
                    </div>
                    <div className="experience-column">
                        <Link to="/frelance-experience">DESARROLLADOR FREELANCE</Link>
                        {/* Títulos y enlaces para la segunda columna */}
                    </div>

                </div>
                <Routes>
                    <Route path="/exsis-digital-experience" element={<ExsisDigitalExperience />} />
                    <Route path="/coomeva-medicina-prepagada" element={<CoomevaExperience />} />
                    <Route path="/cinte-experience" element={<CinteExperience />} />
                    <Route path="/novatec-experience" element={<NovatecExperience />} />
                    <Route path="/taylor-experience" element={<TaylorandJohnson />} />
                    <Route path="/freelance-experience" element={<TaylorandJohnson />} />
                    <Route path="/frelance-experience" element={<FrelanceExperience/>}/>
                </Routes>
                {/* ... Otros componentes y rutas ... */}
            </div>

        </Router>

    );
}

export default WorkExperience;
