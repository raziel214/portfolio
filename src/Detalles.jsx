import { Link } from 'react-router-dom';

// ... Código previo ...

function App() {
    return (
        <div className="App">
            {/* ... Otros componentes ... */}
            <div className="work-experience-container">
                <div className="experience-column">
                    <Link to="/exsis-digital-experience">CONSULTOR SENIOR - EXSIS DIGITAL</Link>
                    {/* Otros títulos con sus respectivos enlaces */}
                </div>
                <div className="experience-column">
                    {/* Títulos y enlaces para la segunda columna */}
                </div>
            </div>
        </div>
    );
}
