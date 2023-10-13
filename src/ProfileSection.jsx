import React from 'react';
import './CSS/ProfileSection.css';
import { useTranslation } from 'react-i18next';

const ProfileSection = () => {
    const { t } = useTranslation();

    return (
        <div className="profile-section">
            <h2>{t('profileProfessional')}</h2>
            <h3>{t('profileRole')}</h3>
            <p dangerouslySetInnerHTML={{ __html: t('profileParagraph1') }}></p>
            <p dangerouslySetInnerHTML={{ __html: t('profileParagraph2') }}></p>
            <p dangerouslySetInnerHTML={{ __html: t('profileParagraph3') }}></p>
            <p dangerouslySetInnerHTML={{ __html: t('profileParagraph4') }}></p>
        </div>
    );
}
export default ProfileSection;
