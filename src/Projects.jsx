import React from 'react';
import { useTranslation } from 'react-i18next';
import './CSS/Projects.css';

const projects = [
    {
        id: 'cachesystem',
        repoUrl: 'https://github.com/raziel214/cachesystem',
        stack: ['Java 21', 'Spring Boot 3.3', 'Redis 7', 'Hexagonal Architecture', 'Testcontainers', 'Docker', 'GitHub Actions'],
        featured: true,
    },
];

function Projects() {
    const { t } = useTranslation();

    return (
        <section className="projects-section">
            <h2>{t('projectsTitle')}</h2>
            <p className="projects-intro">{t('projectsIntro')}</p>

            <div className="projects-grid">
                {projects.map((p) => (
                    <article key={p.id} className={`project-card${p.featured ? ' project-card--featured' : ''}`}>
                        {p.featured && <span className="project-badge">{t('projectsFeaturedBadge')}</span>}
                        <h3>{t(`project_${p.id}_name`)}</h3>
                        <p className="project-summary">{t(`project_${p.id}_summary`)}</p>
                        <p className="project-highlights" dangerouslySetInnerHTML={{ __html: t(`project_${p.id}_highlights`) }} />
                        <ul className="project-stack">
                            {p.stack.map((tech) => (
                                <li key={tech} className="project-stack-tag">{tech}</li>
                            ))}
                        </ul>
                        <div className="project-links">
                            <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                                {t('projectsViewRepo')}
                            </a>
                        </div>
                    </article>
                ))}
            </div>

            <p className="projects-more">
                <a
                    href="https://github.com/raziel214?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {t('projectsMoreOnGithub')}
                </a>
            </p>
        </section>
    );
}

export default Projects;
