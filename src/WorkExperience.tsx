import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './CSS/WorkExperience.css';
import { experiences } from './experiencesConfig';

function WorkExperience() {
    const { t } = useTranslation();

    return (
        <div className="App">
            <h2>{t('workExperienceTitle')}</h2>
            <div className="work-experience-container">
                {experiences.map((exp) => (
                    <div key={exp.id} className="experience-column">
                        <Link to={exp.route}>{t(exp.companyKey)}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WorkExperience;
