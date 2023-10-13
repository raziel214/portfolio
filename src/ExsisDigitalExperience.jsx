import React from 'react';
import { useTranslation } from 'react-i18next';
function ExsisDigitalExperience() {
    const { t } = useTranslation();
    return (
        <div id="exsisDigitalExperience">
            <h1>Exsis Digital</h1>
            <p><strong>{t('exsisExperienceTitle')}</strong></p>
            <p>{t('exsisExperienceDescription')}</p>

        </div>
    );
}

export default ExsisDigitalExperience;
