export interface ContactInfo {
	email: string;
	location: string;
	github: string;
	githubUrl: string;
	linkedin: string;
	linkedinUrl: string;
}

export interface Profile {
	name: string;
	title: string;
	roles: string[];
	tagline: string;
	summary: string;
	bio: string[];
	philosophy: string;
	contact: ContactInfo;
}

export const profile: Profile = {
	name: 'Michael Healy',
	title: 'Platform Engineer',
	roles: ['Platform Engineer', 'Automation Engineer', 'Problem Solver'],
	tagline: 'Building the invisible infrastructure that powers modern software.',
	summary:
		'Platform Engineer with expertise in automation, cloud infrastructure, and full-stack development. Specialized in building scalable solutions using Go, Python, and Infrastructure as Code practices. Proven track record of improving operational efficiency and implementing innovative solutions across global technology stacks.',
	bio: [
		"I'm a Platform Engineer at Yum! Brands, where I'm one of three engineers building our Internal Developer Portal. I specialize in workflow automation using Go and Temporal, creating tools that empower developers across our global organization.",
		"My engineering philosophy was shaped by starting on the service desk — I've seen firsthand how bad code impacts real people. This drives me to build reliable, scalable systems that just work. From Terraform infrastructure to monitoring dashboards, I focus on solutions that reduce operational burden.",
		'Currently working on automating infrastructure provisioning, building self-service developer tools, and implementing Temporal workflows for complex orchestration. My approach: be curious, not judgmental — it\'s how I tackle legacy systems and find elegant solutions to complex problems.'
	],
	philosophy:
		'The best infrastructure is invisible to those who use it, yet empowers them to build amazing things.',
	contact: {
		email: 'mhealy.dev@gmail.com',
		location: 'New Zealand',
		github: 'mhealy-dev',
		githubUrl: 'https://github.com/mhealy-dev',
		linkedin: 'linkedin.com/in/michael-healy-5aabaa161',
		linkedinUrl: 'https://linkedin.com/in/michael-healy-5aabaa161'
	}
};
