import { lazy, Suspense, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './CSS/App.css';
import profilePic from './images/image003.jpg';
import ProfileSection from './ProfileSection';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Cursos from './Cursos';
import Projects from './Projects';
import Skills from './Skills';
import ErrorBoundary from './ErrorBoundary';
import { experiences } from './experiencesConfig';

const ExperienceDetail = lazy(() => import('./ExperienceDetail'));
const BASE_URL = import.meta.env.BASE_URL;
const BASENAME = BASE_URL.replace(/\/$/, '');

function App() {
    const { t, i18n } = useTranslation();

    const changeLanguage = useCallback((lng) => i18n.changeLanguage(lng), [i18n]);

    const Home = (
        <>
            <header className="App-header">
                <img
                    src={profilePic}
                    alt={t('profileAltText')}
                    className="profile-pic"
                    loading="lazy"
                />
                <h1>{t('nameProfile')}</h1>
                <p>{t('titleProfile')}</p>
                <p>{t('descriptionProfile')}</p>
                <a
                    className="download-cv-btn"
                    href={`${BASE_URL}cv.html`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {t('downloadCV')}
                </a>
            </header>

            <ProfileSection />
            <Skills />
            <WorkExperience />
            <Projects />
            <Education />
            <Cursos />
        </>
    );

    return (
        <ErrorBoundary>
            <Router basename={BASENAME}>
                <div className="App">
                    <nav
                        className="language-btn-container"
                        aria-label={t('languageToggleAria') || 'Language toggle'}
                    >
                        <button
                            type="button"
                            className="language-btn"
                            onClick={() => changeLanguage('en')}
                            aria-pressed={i18n.resolvedLanguage === 'en'}
                        >
                            English
                        </button>
                        <button
                            type="button"
                            className="language-btn"
                            onClick={() => changeLanguage('es')}
                            aria-pressed={i18n.resolvedLanguage === 'es'}
                        >
                            Español
                        </button>
                    </nav>

                    <Suspense fallback={<div className="route-fallback">Loading…</div>}>
                        <Routes>
                            <Route path="/" element={Home} />
                            {experiences.map((exp) => (
                                <Route
                                    key={exp.id}
                                    path={exp.route}
                                    element={<ExperienceDetail experienceId={exp.id} />}
                                />
                            ))}
                        </Routes>
                    </Suspense>
                </div>
            </Router>
        </ErrorBoundary>
    );
}

export default App;
