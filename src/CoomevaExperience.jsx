import React from 'react';
import { useTranslation } from 'react-i18next';
function CoomevaExperience(){
    const { t } = useTranslation();
    return(

        <div id={"coomevaExperience"}>
            <h1>Coomeva Medicina Prepagada</h1>
            <p><strong>{t('coomevaExperienceTitle')}</strong></p>
            <p>{t('coomevaExperienceDescription')}</p>

        </div>
    );

}

export default CoomevaExperience;