import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function CinteExperience(){
    const { t } = useTranslation();
    const navigate = useNavigate();

    return(
        <div id={"cinteExperience"}>
            <button onClick={() => navigate('/')} className="language-btn" style={{marginBottom: '20px'}}>← Volver</button>
            <h1>Cinte</h1>
            <p><strong>{t('cinteExperienceTitle')}</strong></p>
            <p>{t('cinteExperienceDescription')}   </p>
        </div>
    );
}

export default CinteExperience;