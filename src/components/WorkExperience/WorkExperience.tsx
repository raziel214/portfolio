import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './WorkExperience.css';
import { experiences } from '../../experiencesConfig';

function WorkExperience() {
    const { t } = useTranslation();

    return (
        <div className="App">
            <h2>{t('workExperienceTitle')}</h2>
            <div className="work-experience-container">
                {experiences.map((exp) => (
                    <div key={exp.id} className="experience-column">
                        <Link to={exp.route} className="experience-company">
                            {t(exp.companyKey)}
                        </Link>
                        <p className="experience-role">{t(exp.titleKey)}</p>
                        <p className="experience-period">{t(exp.periodKey)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WorkExperience;
