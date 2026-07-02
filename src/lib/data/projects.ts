export interface ProjectLinks {
	demo: string | null;
	github: string | null;
	caseStudy: string | null;
}

export type ProjectCategory = 'Infrastructure' | 'Full Stack' | 'DevOps' | 'Backend' | 'Monitoring';
export type ProjectStatus = 'Production' | 'Development';

export interface Project {
	id: number;
	title: string;
	description: string;
	technologies: string[];
	category: ProjectCategory;
	featured: boolean;
	status: ProjectStatus;
	year: string;
	highlights: string[];
	links: ProjectLinks;
}

export const projects: Project[] = [
	{
		id: 1,
		title: 'YUM! Brands Global Infrastructure',
		description:
			"Designed and deployed multi-region AWS infrastructure supporting YUM!'s global restaurant brands using Terraform and Terragrunt.",
		technologies: ['Terraform', 'Terragrunt', 'AWS', 'Python', 'Go'],
		category: 'Infrastructure',
		featured: true,
		status: 'Production',
		year: '2024',
		highlights: [
			'Reduced deployment time by 70% through automated CI/CD pipelines',
			'Implemented Infrastructure as Code across multiple environments',
			'Built monitoring and alerting systems for global operations'
		],
		links: { demo: null, github: null, caseStudy: null }
	},
	{
		id: 2,
		title: 'NGPOS Support Dashboard',
		description:
			"Built comprehensive dashboards and automation scripts to enhance support capabilities for Taco Bell's Next Generation POS system.",
		technologies: ['JavaScript', 'React', 'Node.js', 'Python', 'DataDog'],
		category: 'Full Stack',
		featured: true,
		status: 'Production',
		year: '2023',
		highlights: [
			'Developed tailored dashboards improving operational efficiency',
			'Created automation scripts for deployment workflows',
			'Established knowledge-sharing structure for team training'
		],
		links: { demo: null, github: null, caseStudy: null }
	},
	{
		id: 3,
		title: 'CI/CD Pipeline Automation',
		description:
			'Implemented comprehensive CI/CD pipelines using GitOps principles for seamless deployment across development environments.',
		technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Git', 'Bash'],
		category: 'DevOps',
		featured: false,
		status: 'Production',
		year: '2023',
		highlights: [
			'Automated testing and deployment processes',
			'Reduced manual deployment errors by 95%',
			'Implemented blue-green deployment strategies'
		],
		links: { demo: null, github: 'https://github.com/mhealy-dev', caseStudy: null }
	},
	{
		id: 4,
		title: 'Microservices Architecture',
		description:
			'Architected and developed Go-based microservices for cloud infrastructure automation and monitoring.',
		technologies: ['Go', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis'],
		category: 'Backend',
		featured: false,
		status: 'Production',
		year: '2024',
		highlights: [
			'Built scalable microservices handling 10k+ requests/minute',
			'Implemented service mesh for inter-service communication',
			'Created comprehensive API documentation and testing suites'
		],
		links: { demo: null, github: null, caseStudy: null }
	},
	{
		id: 5,
		title: 'Incident Response Automation',
		description:
			'Developed automated incident detection and response system integrating with Incident.io and PagerDuty for rapid issue resolution.',
		technologies: ['Python', 'AWS Lambda', 'SQS', 'Incident.io', 'DataDog'],
		category: 'Monitoring',
		featured: false,
		status: 'Production',
		year: '2024',
		highlights: [
			'Reduced mean time to resolution by 40%',
			'Automated runbook execution for common incidents',
			'Built real-time alerting and escalation workflows'
		],
		links: { demo: null, github: null, caseStudy: null }
	},
	{
		id: 6,
		title: 'Internal Developer Portal',
		description:
			'Building a self-service developer platform using Temporal workflows to automate infrastructure provisioning and deployment pipelines.',
		technologies: ['Go', 'Temporal', 'React', 'Terraform', 'AWS'],
		category: 'Infrastructure',
		featured: false,
		status: 'Development',
		year: '2025',
		highlights: [
			'Designing durable workflow orchestration for infrastructure provisioning',
			'Building self-service tooling to reduce developer toil',
			'Implementing golden path templates for new service creation'
		],
		links: { demo: null, github: null, caseStudy: null }
	}
];
