import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function UccExperience() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div id="uccExperience">
            <button onClick={() => navigate('/')} className="language-btn" style={{ marginBottom: '20px' }}>{t('back')}</button>
            <h1>Universidad Cooperativa de Colombia</h1>
            <p><strong>{t('uccExperienceTitle')}</strong></p>
            <p style={{ whiteSpace: 'pre-line' }}>{t('uccExperienceDescription')}</p>
        </div>
    );
}

export default UccExperience;
