import logo from './images/logo.svg';
import './CSS/App.css';
import ProfileSection from './ProfileSection';
import profilePic from './images/image003.jpg';
import WorkExperience from './WorkExperience';
import Education from "./Education";
import Cursos from "./Cursos";
function App() {
  return (
      <div className="App">
        <header className="App-header">
            <img src={profilePic} alt="John Fredy Quimbaya Orozco" className="profile-pic" />
          <h1>John Fredy Quimbaya Orozco</h1>
            <p>Ingeniero de Sistemas, Especialista en Ingeniería de Software, Arquitecto de Software y Líder Técnico.</p>
            <p>Conocimiento en lenguajes de programación como Java, C# y JavaScript. Con experiencia en frameworks como ASP.NET, .NET Core y Angular, así como en bases de datos como SQL Server y Oracle. Familiarizado con AWS y las metodologías Scrum.</p>

        </header>

          {/* Otros componentes o contenido */}
          <ProfileSection />
          {/* Más contenido o componentes */}
          <WorkExperience />
          {/* Más contenido o componentes */}
          <Education/>
          <Cursos/>

      </div>

  );
}

export default App;
