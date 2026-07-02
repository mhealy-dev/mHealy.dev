export interface TimelineEntry {
	year: string;
	title: string;
	description: string;
	icon: string;
}

export interface ExperienceEntry {
	id: string;
	title: string;
	company: string;
	location: string;
	period: string;
	current: boolean;
	highlights: string[];
}

export interface Education {
	degree: string;
	school: string;
	focus?: string;
}

export interface Certification {
	name: string;
	issuer: string;
	description?: string;
}

export const experience: ExperienceEntry[] = [
	{
		id: 'yum-platform',
		title: 'Platform Engineer',
		company: 'YUM! Brands',
		location: 'Chicago',
		period: 'FEB 2025 – PRESENT',
		current: true,
		highlights: [
			'One of three engineers building the Internal Developer Portal (IDP) on the Byte team',
			'Designing and implementing Temporal workflows for complex infrastructure orchestration',
			'Building self-service developer tooling to reduce operational burden across the org'
		]
	},
	{
		id: 'yum-sr-analyst',
		title: 'Sr. Production Support Analyst',
		company: 'YUM! Brands',
		location: 'Chicago',
		period: 'FEB 2024 – JAN 2025',
		current: false,
		highlights: [
			'Developed and implemented automation, integrations, and monitoring tools supporting Yum\'s global stack',
			'Designed and deployed infrastructure solutions using Python, JavaScript, and Terraform',
			'Led initiatives with SRE and Platform Engineering teams to implement Incident.io and Retool',
			'Established structured training sessions and maintained centralized Git repository for team tooling'
		]
	},
	{
		id: 'tacobell-psa3',
		title: 'Production Support Analyst III',
		company: 'Taco Bell',
		location: 'Irvine',
		period: 'SEP 2023 – FEB 2024',
		current: false,
		highlights: [
			'Developed tailored dashboards and automation scripts for NGPOS project',
			'Contributed to production code development and deployment',
			'Maintained and improved knowledge-sharing structures and documentation'
		]
	},
	{
		id: 'tacobell-psa2',
		title: 'Production Support Analyst II',
		company: 'Taco Bell',
		location: 'Irvine',
		period: 'SEP 2022 – SEP 2023',
		current: false,
		highlights: [
			'Spearheaded development of customized dashboards and applications for NGPOS support',
			'Coordinated deployments and issues across cross-functional teams',
			'Designed and implemented new knowledge and training structure for FOH products'
		]
	},
	{
		id: 'tacobell-psa1',
		title: 'Production Support Analyst I',
		company: 'Taco Bell',
		location: 'Irvine',
		period: 'DEC 2021 – SEP 2022',
		current: false,
		highlights: [
			'Ensured reliability and stability of NextGen POS system',
			'Developed foundational knowledge base structure and training materials'
		]
	},
	{
		id: 'staffmark',
		title: 'Reliability Engineer',
		company: 'Staffmark Investment LLC',
		location: 'Irvine',
		period: 'OCT 2020 – DEC 2021',
		current: false,
		highlights: [
			'Supported reliability and stability of NextGen POS system',
			'Coordinated deployments and facilitated team communication',
			'Developed initial knowledge and training materials'
		]
	}
];

export const timeline: TimelineEntry[] = [
	{
		year: '2019',
		title: 'Started Tech Career',
		description:
			'Began working on a service desk for Taco Bell, driven by a passion for gaming and troubleshooting.',
		icon: '🖥️'
	},
	{
		year: '2020',
		title: 'Reliability Engineering',
		description:
			'Joined Staffmark and supported reliability of the NextGen POS system; built foundational documentation and training.',
		icon: '🔧'
	},
	{
		year: '2021–2023',
		title: 'POS Infrastructure Lead',
		description:
			'Promoted to PSA I–III roles at Taco Bell, leading automation and dashboard work for FOH/NGPOS initiatives.',
		icon: '📊'
	},
	{
		year: '2024',
		title: 'Automation Specialist',
		description:
			'Joined Yum! Brands, built tools, dashboards, and incident response systems; led internal enablement efforts.',
		icon: '⚙️'
	},
	{
		year: '2025',
		title: 'Platform Engineer',
		description:
			'Transitioned to one of three Platform Engineers on the Byte team, focused on internal developer platform and Temporal workflows.',
		icon: '🚀'
	}
];

export const education: Education[] = [
	{
		degree: 'Full-Stack Developer Certificate',
		school: 'Bethel School of Technology',
		focus: 'JavaScript, HTML, CSS'
	}
];

export const certifications: Certification[] = [
	{
		name: 'CompTIA A+',
		issuer: 'CompTIA',
		description: 'General Hardware and Software knowledge'
	}
];
