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
	title: 'Staff Solutions Architect',
	roles: ['Staff Solutions Architect', 'Technical Strategy', 'AI-Enabled Engineering'],
	tagline: 'Setting the technical direction other engineers build on.',
	summary:
		'Staff Solutions Architect at Pizza Hut, setting org-wide technical standards and architectural direction while leveraging AI to help engineering teams do more. Grounded in a decade of hands-on platform engineering, automation, and cloud infrastructure work across Yum! Brands.',
	bio: [
		"I'm a Staff Solutions Architect at Pizza Hut, where I help set org-wide technical standards and architectural direction. A big part of that is leveraging AI to empower engineers to do more: evaluating and rolling out AI-assisted tooling and practices that raise the bar without adding friction.",
		"My engineering philosophy was shaped by starting on the service desk, where I saw firsthand how bad decisions upstream become real pain for the people downstream. That's what pulled me toward architecture: influencing the standards and decisions before they become someone else's incident. From there I spent years as a Platform Engineer at Yum! Brands building an Internal Developer Portal with Go and Temporal, which shaped how I think about good technical direction.",
		"My approach: be curious, not judgmental. It's how I work through legacy systems, align stakeholders who don't naturally agree, and find the simplest technical direction that a whole organization can actually adopt."
	],
	philosophy:
		'Good architecture is a standard so well-designed that engineers follow it without thinking, paired with AI tooling that makes doing the right thing the fast thing.',
	contact: {
		email: 'mhealy.dev@gmail.com',
		location: 'New Zealand',
		github: 'mhealy-dev',
		githubUrl: 'https://github.com/mhealy-dev',
		linkedin: 'linkedin.com/in/michael-healy-5aabaa161',
		linkedinUrl: 'https://linkedin.com/in/michael-healy-5aabaa161'
	}
};
