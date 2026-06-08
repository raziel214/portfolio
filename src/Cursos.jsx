import React from 'react';
import './CSS/Cursos.css';
import {useTranslation} from "react-i18next";
import scrumBadge from './images/D8BBF075A001.6d9e7cf3ea2af355e053.png';
import awsStorage from './images/aws-educate-getting-started-with-storage-training-b.png';
import awsArchitecting from './images/aws-knowledge-architecting.78c1aef6fac848eb6d10.png';
import awsMigration from './images/aws-knowledge-migration-foundations.7663f659eca82b2eea4d.png';
import awsTechnical from './images/aws-partner-accreditation-technical.d23cc1493cbca8c687af.png';
import awsEconomics from './images/aws-partner-cloud-economics-accreditation.e02516075662e938b0be.png';
import googleBadge1 from './images/2meoeAeFaFRp5SS3rOx+rkHovx+_YhhByzW4OIhF5L4=.eaa76e659a771e4f47bf.png';
import googleBadge2 from './images/jQMzEedff_eMkW9ts7f6qRjlR8gu4gLQAzyNMXCDRyg=.be0bb9ce89ec55af385f.png';
import googleBadge3 from './images/KJbv0GOIxc4Ze8p7LH1Ke4TeOMBGPqAus29iGiFw5po=.465b97041e6cb75f6762.png';

function Cursos(){
    const { t } = useTranslation();
    return(
        <div className="education-container">

            <h2>{t('certificateTitle')}</h2>
            <div className="course-entry">
                <h4>{t('scrumMaster')}</h4>
                <p><strong>{t('certiprof')}</strong></p>
                <p>{t('cursosScrum')}</p>

            </div>



            <h2>{t('courseTitle')}</h2>
            <div className="course-entry">
                <h4>{t('courseDescription')}</h4>
                <p><strong>{t('virtualTraining')}</strong></p>
                <p>{t('course2Description')}</p>
                <p>
                    <strong>
                        <a
                            href="https://1drv.ms/f/c/cf940a638c50edc3/IgDD7VCMYwqUIIDP3wcAAAAAAQoXf5S7JXULjL1C5W7RST0?e=48mtyQ"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t('certificationsFolder')}
                        </a>
                    </strong>
                </p>

                <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px', justifyContent: 'center'}}>
                    <a href="https://wallet.xertify.co/certificates/D8BBF075A001?r=1" target="_blank" rel="noopener noreferrer">
                        <img src={scrumBadge} alt="Scrum Master certification badge by Certiprof" loading="lazy" style={{width: '150px', height: 'auto'}} />
                    </a>
                    <a href="https://www.credly.com/badges/196bb308-027e-4786-8903-f439ebdf8992/public_url" target="_blank" rel="noopener noreferrer">
                        <img src={awsStorage} alt="AWS Educate — Getting Started with Storage badge" loading="lazy" style={{width: '150px', height: 'auto'}} />
                    </a>
                    <a href="https://www.credly.com/badges/3f44eeb9-c020-4982-ab34-f4eed45ca47f/public_url" target="_blank" rel="noopener noreferrer">
                        <img src={awsArchitecting} alt="AWS Knowledge: Architecting badge" loading="lazy" style={{width: '150px', height: 'auto'}} />
                    </a>
                    <a href="https://www.credly.com/badges/aa143d8b-f2d4-4434-b107-890ed5c864e0/linked_in_profile" target="_blank" rel="noopener noreferrer">
                        <img src={awsMigration} alt="AWS Knowledge: Migration Foundations badge" loading="lazy" style={{width: '150px', height: 'auto'}} />
                    </a>
                    <a href="https://www.credly.com/badges/c541e06b-e09f-4b06-a5df-50ba49aa1943/linked_in_profile" target="_blank" rel="noopener noreferrer">
                        <img src={awsTechnical} alt="AWS Partner: Technical Accreditation badge" loading="lazy" style={{width: '150px', height: 'auto'}} />
                    </a>
                    <a href="https://www.credly.com/badges/a7814bd9-f8cc-4e55-a9cd-7e0e418c72bf/public_url" target="_blank" rel="noopener noreferrer">
                        <img src={awsEconomics} alt="AWS Partner: Cloud Economics Accreditation badge" loading="lazy" style={{width: '150px', height: 'auto'}} />
                    </a>
                    <a href="https://www.skills.google/public_profiles/c51c2d23-b0ea-472f-85a6-127cad884d95/badges/9600356" target="_blank" rel="noopener noreferrer">
                        <img src={googleBadge1} alt="Google Cloud Skills Boost badge" loading="lazy" style={{width: '150px', height: 'auto'}} />
                    </a>
                    <a href="https://www.skills.google/public_profiles/c51c2d23-b0ea-472f-85a6-127cad884d95/badges/9599977" target="_blank" rel="noopener noreferrer">
                        <img src={googleBadge2} alt="Google Cloud Skills Boost badge" loading="lazy" style={{width: '150px', height: 'auto'}} />
                    </a>
                    <a href="https://www.skills.google/public_profiles/c51c2d23-b0ea-472f-85a6-127cad884d95/badges/9437985" target="_blank" rel="noopener noreferrer">
                        <img src={googleBadge3} alt="Google Cloud Skills Boost badge" loading="lazy" style={{width: '150px', height: 'auto'}} />
                    </a>
                </div>
            </div>

            <h2>{t('courseInformationSocial')}</h2>
            <div className="course-entry">
                <h4>{t('linkedin')}</h4>
                <p>
                    <strong>
                        <a href="https://www.linkedin.com/in/jfqo/" target="_blank" rel="noopener noreferrer">
                            https://www.linkedin.com/in/jfqo/
                        </a>
                    </strong>
                </p>
            </div>


            <div className="course-entry">
                <h2>{t('courseInformationContac')}</h2>
                {/* TODO: reemplazar por email de Google Workspace en próxima iteración. */}
                <h4>
                    {t('email')}:{' '}
                    <a href="mailto:94041671@u.icesi.edu.co">
                        94041671@u.icesi.edu.co
                    </a>
                </h4>
                <p>
                    <strong>
                        {t('phone')}:{' '}
                        <a href="tel:+573004756201">+57 300 475 6201</a>
                    </strong>
                </p>
            </div>


        </div>



    );

}

export default Cursos;
