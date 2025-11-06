import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function NovatecExperience(){
    const { t } = useTranslation();
    const navigate = useNavigate();

    return(
        <div id={"novatecExperience"}>
            <button onClick={() => navigate('/')} className="language-btn" style={{marginBottom: '20px'}}>← Volver</button>
            <h1>Novatec</h1>
            <p><strong>{t('novatecExperienceTitle')}</strong></p>
            <p>{t('novatecExperienceDescription')} </p>
        </div>
    );
}

export default NovatecExperience;