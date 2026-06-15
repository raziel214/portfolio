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
import { experiences } from './experiencesConfig';

const ExperienceDetail = lazy(() => import('./ExperienceDetail'));

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
                    href={`${import.meta.env.BASE_URL}/cv.html`}
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
        <Router basename={import.meta.env.BASE_URL}>
            <div className="App">
                <div className="language-btn-container">
                    <button className="language-btn" onClick={() => changeLanguage('en')}>English</button>
                    <button className="language-btn" onClick={() => changeLanguage('es')}>Español</button>
                </div>

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
    );
}

export default App;
