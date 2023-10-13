import React from 'react';
import './CSS/WorkExperience.css';
import { Route, Link, Routes } from 'react-router-dom';

import ExsisDigitalExperience from "./ExsisDigitalExperience";
import CoomevaExperience from "./CoomevaExperience";
import CinteExperience from "./CinteExperience";
import NovatecExperience from "./NovatecExperience";
import TaylorandJohnson from "./TaylorandJohnson";
import FreelanceExperience from "./FrelanceExperience";
import { useTranslation } from 'react-i18next';

function WorkExperience() {
    const { t } = useTranslation();
    return (
        <div className="App">
            <h2>{t('workExperienceTitle')}</h2>
            <div className="work-experience-container">
                <div className="experience-column">
                    <Link to="/exsis-digital-experience">EXSIS DIGITAL</Link>
                </div>
                <div className="experience-column">
                    <Link to="/coomeva-medicina-prepagada">COOMEVA MEDICINA PREPAGADA</Link>
                </div>
                <div className="experience-column">
                    <Link to="/cinte-experience">CINTE</Link>
                </div>
                <div className="experience-column">
                    <Link to="/novatec-experience">NOVATEC</Link>
                </div>
                <div className="experience-column">
                    <Link to="/taylor-experience">JOHNSON AND TAYLOR</Link>
                </div>
                <div className="experience-column">
                    <Link to="/freelance-experience">{t('workExperience')}</Link>
                </div>
            </div>

            <Routes>
                <Route path="/exsis-digital-experience" element={<ExsisDigitalExperience />} />
                <Route path="/coomeva-medicina-prepagada" element={<CoomevaExperience />} />
                <Route path="/cinte-experience" element={<CinteExperience />} />
                <Route path="/novatec-experience" element={<NovatecExperience />} />
                <Route path="/taylor-experience" element={<TaylorandJohnson />} />
                <Route path="/freelance-experience" element={<FreelanceExperience />} />
            </Routes>
        </div>
    );
}

export default WorkExperience;
