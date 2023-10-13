import React from 'react';
import { useTranslation } from 'react-i18next';

function CinteExperience(){
    const { t } = useTranslation();
    return(
        <div id={"cinteExperience"}>
            <h1>Cinte</h1>
            <p><strong>{t('cinteExperienceTitle')}</strong></p>
            <p>{t('cinteExperienceDescription')}   </p>
        </div>
    );
}

export default CinteExperience;