import { useTranslation } from 'react-i18next';
import './CSS/Skills.css';

type SkillGroupId = 'backend' | 'cloud' | 'data' | 'architecture' | 'genai' | 'agile';

interface SkillGroup {
    id: SkillGroupId;
    skills: string[];
}

const skillGroups: SkillGroup[] = [
    {
        id: 'backend',
        skills: [
            'Java 21',
            'Spring Boot',
            'Spring Security (OAuth2/OIDC)',
            'Spring Data JPA',
            'Python',
            'FastAPI',
            '.NET Core',
            'C#',
        ],
    },
    {
        id: 'cloud',
        skills: ['AWS', 'AWS Bedrock', 'Docker', 'Jenkins', 'GitHub Actions', 'CI/CD'],
    },
    {
        id: 'data',
        skills: ['Apache Kafka', 'Redis', 'PostgreSQL', 'SQL Server', 'MongoDB', 'Oracle'],
    },
    {
        id: 'architecture',
        skills: [
            'Microservices',
            'Hexagonal Architecture',
            'DDD',
            'Clean Architecture',
            'REST APIs',
            'C4 Model',
        ],
    },
    {
        id: 'genai',
        skills: [
            'LangChain',
            'Spring AI',
            'MCP',
            'A2A Protocol',
            'RAG',
            'Pro-code / Low-code Agents',
        ],
    },
    {
        id: 'agile',
        skills: ['Scrum Master (Certiprof)', 'Kanban', 'Agile coaching'],
    },
];

function Skills() {
    const { t } = useTranslation();

    return (
        <section className="skills-section">
            <h2>{t('skillsTitle')}</h2>
            <p className="skills-intro">{t('skillsIntro')}</p>

            <div className="skills-grid">
                {skillGroups.map((group) => (
                    <div key={group.id} className="skills-group">
                        <h3>{t(`skills_${group.id}`)}</h3>
                        <ul className="skills-tags">
                            {group.skills.map((skill) => (
                                <li key={skill} className="skills-tag">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
