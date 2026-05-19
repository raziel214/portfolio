import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function UnicucesExperience() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div id="unicucesExperience">
            <button onClick={() => navigate('/')} className="language-btn" style={{ marginBottom: '20px' }}>{t('back')}</button>
            <h1>Unicuces</h1>
            <p><strong>{t('unicucesExperienceTitle')}</strong></p>
            <p style={{ whiteSpace: 'pre-line' }}>{t('unicucesExperienceDescription')}</p>
        </div>
    );
}

export default UnicucesExperience;
