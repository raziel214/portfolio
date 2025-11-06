import React from 'react';
import './CSS/WorkExperience.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function WorkExperience() {
    const { t } = useTranslation();
    return (
        <div className="App">
            <h2>{t('workExperienceTitle')}</h2>
            <div className="work-experience-container">
                <div className="experience-column">
                    <Link to="/caja-morelia-experience">KORALAT</Link>
                </div>
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
        </div>
    );
}

export default WorkExperience;
