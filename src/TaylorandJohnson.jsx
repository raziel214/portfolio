import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function TaylorandJohnson(){
    const { t } = useTranslation();
    const navigate = useNavigate();

    return(
        <div id={"taylorandJohnson"}>
            <button onClick={() => navigate('/')} className="language-btn" style={{marginBottom: '20px'}}>← Volver</button>
            <h1>Johnson and Taylor</h1>
            <p><strong>{t('taylorandJohnsonExperienceTitle')}</strong></p>
            <p>{t('taylorandJohnsonExperienceDescription')} </p>
        </div>
    );
}

export default TaylorandJohnson;