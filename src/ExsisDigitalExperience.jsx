import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function ExsisDigitalExperience() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div id="exsisDigitalExperience">
            <button onClick={() => navigate('/')} className="language-btn" style={{marginBottom: '20px'}}>← Volver</button>
            <h1>Exsis Digital</h1>
            <p><strong>{t('exsisExperienceTitle')}</strong></p>
            <p>{t('exsisExperienceDescription')}</p>
        </div>
    );
}

export default ExsisDigitalExperience;
