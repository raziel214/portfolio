import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { experiencesById } from './experiencesConfig';

function ExperienceDetail({ experienceId }) {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const experience = experiencesById[experienceId];
    if (!experience) {
        return null;
    }

    return (
        <article className="experience-detail" id={`${experienceId}-experience`}>
            <button type="button" onClick={() => navigate('/')} className="language-btn back-btn">
                {t('back')}
            </button>
            <h1>{t(experience.companyKey)}</h1>
            <p>
                <strong>{t(experience.titleKey)}</strong>
            </p>
            <p className="experience-detail-body">{t(experience.descriptionKey)}</p>
        </article>
    );
}

export default ExperienceDetail;
