import React from 'react';
import { useTranslation } from 'react-i18next';
function NovatecExperience(){
    const { t } = useTranslation();
    return(
        <div id={"novatecExperience"}>
            <h1>Novatec</h1>
            <p><strong>{t('Software Architect • Duration: 2 Months •')}</strong></p>
            <p>{t('novatecExperienceDescription')} </p>
        </div>
    );
}

export default NovatecExperience