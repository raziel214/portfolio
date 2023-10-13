import React from 'react';
import './CSS/Cursos.css';
import {useTranslation} from "react-i18next";
function Cursos(){
    const { t } = useTranslation();
    return(
        <div className="education-container">

            <h2>{t('certificateTitle')}</h2>
            <div className="course-entry">
                <h4>Scrum Master</h4>
                <p><strong>Certiprof</strong></p>
                <p>{t('cursosScrum')}</p>

            </div>



            <h2>{t('courseTitle')}</h2>
            <div className="course-entry">
                <h4>{t('courseDescription')}</h4>
                <p><strong>Capacitaciones Virtuales</strong></p>
                <p>{t('course2Description')}</p>
                <p><strong>https://platzi.com/p/johnfredyquimbayaorozco/</strong></p>
            </div>

            <h2>{t('courseInformationSocial')}</h2>
            <div className="course-entry">
                <h4>Linkedin</h4>
                <p><strong>https://www.linkedin.com/in/jfqo/</strong></p>
            </div>

            <div className="course-entry">
                <h4>Twitter</h4>
                <p><strong>@soulreavers214</strong></p>
            </div>

            <div className="course-entry">
                <h2>{t('courseInformationContac')}</h2>
                <h4>Email: 94041671@u.icesi.edu.co</h4>
                <p><strong>Telefono: +573004756201</strong></p>
            </div>


        </div>



    );

}

export default Cursos;