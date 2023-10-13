import React from 'react';
import { useTranslation } from 'react-i18next';
function FrelanceExperience(){
    const { t } = useTranslation();
    return(
        <div>
            <h1>Freelance Developer</h1>
            <p><strong>{t('freelanceExperienceTitle')}</strong></p>
            <p>
                {t('freelanceExperienceDescription')}
            </p>

        </div>
    );
}

export default FrelanceExperience;
