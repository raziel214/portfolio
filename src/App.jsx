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
import FreelanceExperience from "./FrelanceExperience";
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
                                <img src={profilePic} alt={t('profileAltText')} className="profile-pic" />
                                <h1>{t('nameProfile')}</h1>
                                <p>{t('titleProfile')}</p>
                                <p>{t('descriptionProfile')}</p>
                            </header>

                            {/* Otros componentes o contenido */}
                            <ProfileSection />
                            <WorkExperience />
                            <Education />
                            <Cursos />
                        </>
                    } />
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
