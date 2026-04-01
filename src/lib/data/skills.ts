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
	}
];

// Grouped skill strings — used by the resume page display and PDF generation
// Note: these are more verbose than the grid names (e.g. "AWS (Lambda, EC2...)")
export const skillGroups: Record<string, string[]> = {
	Languages: ['Go', 'Python', 'JavaScript (React, Node.js)', 'HTML/CSS', 'SQL'],
	'Cloud & Infrastructure': [
		'AWS (Lambda, EC2, DynamoDB, S3, SQS, CloudWatch, CloudFormation, KMS)',
		'Terraform',
		'Terragrunt',
		'Serverless Framework'
	],
	'Tools & Platforms': ['Git', 'Docker', 'Retool', 'DataDog', 'Android/iOS App Development (Expo)'],
	Databases: ['MySQL', 'DynamoDB', 'Parameter Store']
};
