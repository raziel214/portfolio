export type ExperienceId =
    | 'ucc'
    | 'seti'
    | 'koralat'
    | 'exsis'
    | 'coomeva'
    | 'cinte'
    | 'novatec'
    | 'taylor'
    | 'unicuces'
    | 'freelance';

export interface Experience {
    id: ExperienceId;
    route: `/${string}`;
    companyKey: `company_${ExperienceId}`;
    titleKey: string;
    descriptionKey: string;
}

export const experiences: ReadonlyArray<Experience> = [
    {
        id: 'ucc',
        route: '/ucc-experience',
        companyKey: 'company_ucc',
        titleKey: 'uccExperienceTitle',
        descriptionKey: 'uccExperienceDescription',
    },
    {
        id: 'seti',
        route: '/seti-experience',
        companyKey: 'company_seti',
        titleKey: 'setiExperienceTitle',
        descriptionKey: 'setiExperienceDescription',
    },
    {
        id: 'koralat',
        route: '/koralat-experience',
        companyKey: 'company_koralat',
        titleKey: 'koralatExperienceTitle',
        descriptionKey: 'koralatExperienceDescription',
    },
    {
        id: 'exsis',
        route: '/exsis-experience',
        companyKey: 'company_exsis',
        titleKey: 'exsisExperienceTitle',
        descriptionKey: 'exsisExperienceDescription',
    },
    {
        id: 'coomeva',
        route: '/coomeva-experience',
        companyKey: 'company_coomeva',
        titleKey: 'coomevaExperienceTitle',
        descriptionKey: 'coomevaExperienceDescription',
    },
    {
        id: 'cinte',
        route: '/cinte-experience',
        companyKey: 'company_cinte',
        titleKey: 'cinteExperienceTitle',
        descriptionKey: 'cinteExperienceDescription',
    },
    {
        id: 'novatec',
        route: '/novatec-experience',
        companyKey: 'company_novatec',
        titleKey: 'novatecExperienceTitle',
        descriptionKey: 'novatecExperienceDescription',
    },
    {
        id: 'taylor',
        route: '/taylor-experience',
        companyKey: 'company_taylor',
        titleKey: 'taylorandJohnsonExperienceTitle',
        descriptionKey: 'taylorandJohnsonExperienceDescription',
    },
    {
        id: 'unicuces',
        route: '/unicuces-experience',
        companyKey: 'company_unicuces',
        titleKey: 'unicucesExperienceTitle',
        descriptionKey: 'unicucesExperienceDescription',
    },
    {
        id: 'freelance',
        route: '/freelance-experience',
        companyKey: 'company_freelance',
        titleKey: 'freelanceExperienceTitle',
        descriptionKey: 'freelanceExperienceDescription',
    },
];

export const experiencesById: Readonly<Record<ExperienceId, Experience>> = Object.fromEntries(
    experiences.map((e) => [e.id, e]),
) as Record<ExperienceId, Experience>;
