import React from 'react';
import './CSS/Education.css';
import { BrowserRouter as Router } from 'react-router-dom';
import {useTranslation} from "react-i18next";

function Education() {
    const { t } = useTranslation();
    return (
        <div className="education-section">
            <h2>{t('')}</h2>
            <div className="education-columns">
                <div className="education-column">
                    <div className="education-entry">
                        <h3>{t('education1Title')}</h3>
                        <p><strong>{t('education1Date')}</strong></p>
                    </div>

                    <div className="education-entry">
                        <h3>{t('education2Title')}</h3>
                        <p><strong>{t('education2Date')}</strong></p>
                    </div>
                </div>

                <div className="education-column">
                    <div className="education-entry">
                        <h3>{t('education3Title')}</h3>
                        <p><strong>{t('education3Date')}</strong></p>
                    </div>

                    <div className="education-entry">
                        <h3>{t('education4Title')}</h3>
                        <p><strong>{t('education4Date')}</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
