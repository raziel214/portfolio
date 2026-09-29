export type ExperienceId = 'seti' | 'ucc' | 'koral' | 'exsis' | 'coomeva' | 'palmetto' | 'taylor';

export interface Experience {
    id: ExperienceId;
    route: `/${string}`;
    companyKey: `company_${ExperienceId}`;
    titleKey: string;
    periodKey: `period_${ExperienceId}`;
    descriptionKey: string;
}

export const experiences: ReadonlyArray<Experience> = [
    {
        id: 'seti',
        route: '/seti-experience',
        companyKey: 'company_seti',
        titleKey: 'setiExperienceTitle',
        periodKey: 'period_seti',
        descriptionKey: 'setiExperienceDescription',
    },
    {
        id: 'ucc',
        route: '/ucc-experience',
        companyKey: 'company_ucc',
        titleKey: 'uccExperienceTitle',
        periodKey: 'period_ucc',
        descriptionKey: 'uccExperienceDescription',
    },
    {
        id: 'koral',
        route: '/koral-experience',
        companyKey: 'company_koral',
        titleKey: 'koralExperienceTitle',
        periodKey: 'period_koral',
        descriptionKey: 'koralExperienceDescription',
    },
    {
        id: 'exsis',
        route: '/exsis-experience',
        companyKey: 'company_exsis',
        titleKey: 'exsisExperienceTitle',
        periodKey: 'period_exsis',
        descriptionKey: 'exsisExperienceDescription',
    },
    {
        id: 'coomeva',
        route: '/coomeva-experience',
        companyKey: 'company_coomeva',
        titleKey: 'coomevaExperienceTitle',
        periodKey: 'period_coomeva',
        descriptionKey: 'coomevaExperienceDescription',
    },
    {
        id: 'palmetto',
        route: '/palmetto-experience',
        companyKey: 'company_palmetto',
        titleKey: 'palmettoExperienceTitle',
        periodKey: 'period_palmetto',
        descriptionKey: 'palmettoExperienceDescription',
    },
    {
        id: 'taylor',
        route: '/taylor-experience',
        companyKey: 'company_taylor',
        titleKey: 'taylorExperienceTitle',
        periodKey: 'period_taylor',
        descriptionKey: 'taylorExperienceDescription',
    },
];

export const experiencesById: Readonly<Record<ExperienceId, Experience>> = Object.fromEntries(
    experiences.map((e) => [e.id, e]),
) as Record<ExperienceId, Experience>;
