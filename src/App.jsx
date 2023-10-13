import './CSS/App.css';
import ProfileSection from './ProfileSection';
import profilePic from './images/image003.jpg';
import WorkExperience from './WorkExperience';
import Education from "./Education";
import Cursos from "./Cursos";
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <Router>
            <div className="App">
                {/* Botones para cambiar de idioma */}
                <div className="language-btn-container">
                    <button className="language-btn" onClick={() => changeLanguage('en')}>English</button>
                    <button className="language-btn" onClick={() => changeLanguage('es')}>Español</button>
                </div>


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
            </div>
        </Router>
    );
}

export default App;
