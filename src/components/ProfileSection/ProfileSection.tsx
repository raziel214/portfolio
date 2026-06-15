import { Trans, useTranslation } from 'react-i18next';
import './ProfileSection.css';

const TRANS_COMPONENTS = { strong: <strong /> };
const PARAGRAPH_KEYS = [
    'profileParagraph1',
    'profileParagraph2',
    'profileParagraph3',
    'profileParagraph4',
] as const;

function ProfileSection() {
    const { t } = useTranslation();

    return (
        <div className="profile-section">
            <h2>{t('profileProfessional')}</h2>
            <h3>{t('profileRole')}</h3>
            {PARAGRAPH_KEYS.map((key) => (
                <p key={key} className="profile-paragraph">
                    <Trans i18nKey={key} components={TRANS_COMPONENTS} />
                </p>
            ))}
        </div>
    );
}

export default ProfileSection;
