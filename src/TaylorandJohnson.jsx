import React from 'react';
import { useTranslation } from 'react-i18next';
function TaylorandJohnson(){
    const { t } = useTranslation();
    return(
        <div id={"taylorandJohnson"}>
            <h1>Johnson and Taylor</h1>
            <p><strong>{t('taylorandJohnsonExperienceTitle')}</strong></p>
            <p>{t('taylorandJohnsonExperienceDescription')} </p>
        </div>
    );
}

export default TaylorandJohnson