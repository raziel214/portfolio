import './CSS/App.css';
import ProfileSection from './ProfileSection';
import profilePic from './images/image003.jpg';
import WorkExperience from './WorkExperience';
import Education from "./Education";
import Cursos from "./Cursos";
import CajaMoreliaExperience from "./CajaMoreliaExperience";
import ExsisDigitalExperience from "./ExsisDigitalExperience";
import CoomevaExperience from "./CoomevaExperience";
import CinteExperience from "./CinteExperience";
import NovatecExperience from "./NovatecExperience";
import TaylorandJohnson from "./TaylorandJohnson";
import FreelanceExperience from "./FreelanceExperience";
import SetiExperience from "./SetiExperience";
import UccExperience from "./UccExperience";
import UnicucesExperience from "./UnicucesExperience";
import Projects from "./Projects";
import Skills from "./Skills";
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className="App">
                {/* Botones para cambiar de idioma */}
                <div className="language-btn-container">
                    <button className="language-btn" onClick={() => changeLanguage('en')}>English</button>
                    <button className="language-btn" onClick={() => changeLanguage('es')}>Español</button>
                </div>

                <Routes>
                    <Route path="/" element={
                        <>
                            <header className="App-header">
                                <img src={profilePic} alt={t('profileAltText')} className="profile-pic" loading="lazy" />
                                <h1>{t('nameProfile')}</h1>
                                <p>{t('titleProfile')}</p>
                                <p>{t('descriptionProfile')}</p>
                                <a
                                    className="download-cv-btn"
                                    href={`${process.env.PUBLIC_URL}/cv.html`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {t('downloadCV')}
                                </a>
                            </header>

                            {/* Otros componentes o contenido */}
                            <ProfileSection />
                            <Skills />
                            <WorkExperience />
                            <Projects />
                            <Education />
                            <Cursos />
                        </>
                    } />
                    <Route path="/seti-experience" element={<SetiExperience />} />
                    <Route path="/ucc-experience" element={<UccExperience />} />
                    <Route path="/unicuces-experience" element={<UnicucesExperience />} />
                    <Route path="/caja-morelia-experience" element={<CajaMoreliaExperience />} />
                    <Route path="/exsis-digital-experience" element={<ExsisDigitalExperience />} />
                    <Route path="/coomeva-medicina-prepagada" element={<CoomevaExperience />} />
                    <Route path="/cinte-experience" element={<CinteExperience />} />
                    <Route path="/novatec-experience" element={<NovatecExperience />} />
                    <Route path="/taylor-experience" element={<TaylorandJohnson />} />
                    <Route path="/freelance-experience" element={<FreelanceExperience />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
