export interface SkillEntry {
	name: string;
	category: string;
	useCases: string[];
}

// Flat skill entries — used by the interactive skills grid on the homepage
export const skills: SkillEntry[] = [
	{
		name: 'Go',
		category: 'Backend',
		useCases: [
			'Built microservices for cloud infrastructure automation',
			'Developed CLI tools for deployment workflows',
			'Created RESTful APIs with Chi/Gin frameworks'
		]
	},
	{
		name: 'Terraform',
		category: 'Infrastructure',
		useCases: [
			'Provisioned multi-region AWS infrastructure',
			'Managed Kubernetes clusters and networking',
			'Automated resource lifecycle management'
		]
	},
	{
		name: 'Terragrunt',
		category: 'Infrastructure',
		useCases: [
			'Implemented DRY infrastructure patterns',
			'Managed multi-environment deployments',
			'Orchestrated complex dependency chains'
		]
	},
	{
		name: 'Python',
		category: 'Backend',
		useCases: [
			'Automated infrastructure testing and validation',
			'Built data processing pipelines',
			'Created deployment automation scripts'
		]
	},
	{
		name: 'JavaScript',
		category: 'Frontend',
		useCases: [
			'Developed interactive dashboards',
			'Built monitoring and alerting UIs',
			'Created full-stack web applications'
		]
	},
	{
		name: 'AWS',
		category: 'Cloud',
		useCases: [
			'Architected scalable cloud solutions',
			'Implemented security best practices (KMS, IAM, CloudWatch)',
			'Optimized costs across multiple accounts'
		]
	},
	{
		name: 'Docker',
		category: 'DevOps',
		useCases: [
			'Containerized microservices applications',
			'Built multi-stage CI/CD pipelines',
			'Optimized image sizes and build times'
		]
	},
	{
		name: 'Temporal',
		category: 'Backend',
		useCases: [
			'Designed durable workflow orchestration for the IDP',
			'Implemented complex multi-step infrastructure provisioning flows',
			'Built retry and compensation logic for distributed systems'
		]
	},
	{
		name: 'CI/CD',
		category: 'DevOps',
		useCases: [
			'Designed GitOps deployment workflows',
			'Implemented automated testing pipelines',
			'Built blue-green deployment strategies'
		]
	},
	{
		name: 'GraphQL',
		category: 'Backend',
		useCases: [
			'Designed and consumed GraphQL APIs',
			'Built schema-first services with type-safe resolvers',
			'Integrated GraphQL clients in full-stack applications'
		]
	},
	{
		name: 'SQL',
		category: 'Backend',
		useCases: [
			'Wrote complex queries for reporting and analytics',
			'Designed relational schemas for application data',
			'Optimized queries and managed migrations'
		]
	},
	{
		name: 'OpenTofu',
		category: 'Infrastructure',
		useCases: [
			'Managed infrastructure as code with the open-source Terraform fork',
			'Migrated existing Terraform state to OpenTofu',
			'Leveraged community modules and providers'
		]
	},
	{
		name: 'CDK',
		category: 'Infrastructure',
		useCases: [
			'Defined AWS infrastructure using TypeScript constructs',
			'Built reusable L3 constructs for internal platform patterns',
			'Deployed and managed CloudFormation stacks via CDK pipelines'
		]
	},
	{
		name: 'Node.js',
		category: 'Backend',
		useCases: [
			'Built REST APIs and backend services',
			'Created automation scripts and tooling',
			'Developed serverless Lambda functions'
		]
	},
	{
		name: 'Svelte',
		category: 'Frontend',
		useCases: [
			'Built performant web applications with Svelte 5 and SvelteKit',
			'Implemented reactive UI with runes-based state management',
			'Deployed full-stack apps with SvelteKit adapters'
		]
	}
];

// Grouped skill strings — used by the resume page display and PDF generation
// Note: these are more verbose than the grid names (e.g. "AWS (Lambda, EC2...)")
export const skillGroups: Record<string, string[]> = {
	Languages: ['Go', 'Python', 'JavaScript', 'TypeScript', 'Node.js', 'SQL', 'HTML/CSS'],
	'Cloud & Infrastructure': [
		'AWS (Lambda, EC2, DynamoDB, S3, SQS, CloudWatch, CloudFormation, KMS)',
		'Terraform',
		'OpenTofu',
		'Terragrunt',
		'CDK',
		'Serverless Framework'
	],
	'Tools & Platforms': ['Git', 'Docker', 'Retool', 'DataDog', 'Svelte/SvelteKit', 'GraphQL'],
	Databases: ['MySQL', 'DynamoDB', 'PostgreSQL', 'Parameter Store']
};
