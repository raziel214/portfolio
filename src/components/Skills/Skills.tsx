import { useTranslation } from 'react-i18next';
import './Skills.css';

type SkillGroupId = 'architecture' | 'backend' | 'cloud' | 'data' | 'genai' | 'governance';

interface SkillGroup {
    id: SkillGroupId;
    skills: string[];
}

const skillGroups: SkillGroup[] = [
    {
        id: 'architecture',
        skills: [
            'Solution Architecture',
            'Enterprise Architecture',
            'Modernización de Core Bancario',
            'Microservicios',
            'DDD',
            'CQRS',
            'Modelo C4',
            'Arquitectura Hexagonal',
            'Clean Architecture',
        ],
    },
    {
        id: 'backend',
        skills: [
            'Java 21',
            'Spring Boot',
            'Spring Security (OAuth2/OIDC)',
            'Spring Data JPA',
            '.NET Core',
            'C#',
            'ASP.NET',
            'Python',
            'FastAPI',
        ],
    },
    {
        id: 'cloud',
        skills: [
            'AWS',
            'Amazon S3',
            'Docker',
            'CI/CD',
            'Jenkins',
            'Gitea',
            'GitHub Actions',
            'AWS Bedrock',
        ],
    },
    {
        id: 'data',
        skills: ['SQL Server', 'Oracle', 'PostgreSQL', 'Apache Kafka', 'Redis', 'MongoDB', 'AS400'],
    },
    {
        id: 'genai',
        skills: [
            'LLMs',
            'LangGraph',
            'Spring AI',
            'MCP',
            'RAG',
            'Agentes Pro-code / Low-code',
            'n8n',
        ],
    },
    {
        id: 'governance',
        skills: [
            'API Management (Gravitee / IBM API Connect)',
            'Gobernanza Tecnológica',
            'Presupuestos de TI',
            'SLAs',
            'Negociación con Stakeholders',
            'Liderazgo Técnico',
            'Scrum',
        ],
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
