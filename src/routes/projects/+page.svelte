<script lang="ts">
	// Projects data - would normally come from API
	const projects = [
		{
			id: 1,
			title: "YUM! Brands Global Infrastructure",
			description: "Designed and deployed multi-region AWS infrastructure supporting YUM!'s global restaurant brands using Terraform and Terragrunt.",
			technologies: ["Terraform", "Terragrunt", "AWS", "Python", "Go"],
			category: "Infrastructure",
			image: "/api/placeholder/600/400",
			featured: true,
			status: "Production",
			year: "2024",
			highlights: [
				"Reduced deployment time by 70% through automated CI/CD pipelines",
				"Implemented Infrastructure as Code across multiple environments",
				"Built monitoring and alerting systems for global operations"
			],
			links: {
				demo: null,
				github: null,
				case_study: "#"
			}
		},
		{
			id: 2,
			title: "NGPOS Support Dashboard",
			description: "Built comprehensive dashboards and automation scripts to enhance support capabilities for Taco Bell's Next Generation POS system.",
			technologies: ["JavaScript", "React", "Node.js", "Python", "DataDog"],
			category: "Full Stack",
			image: "/api/placeholder/600/400",
			featured: true,
			status: "Production",
			year: "2023",
			highlights: [
				"Developed tailored dashboards improving operational efficiency",
				"Created automation scripts for deployment workflows",
				"Established knowledge-sharing structure for team training"
			],
			links: {
				demo: null,
				github: null,
				case_study: "#"
			}
		},
		{
			id: 3,
			title: "CI/CD Pipeline Automation",
			description: "Implemented comprehensive CI/CD pipelines using GitOps principles for seamless deployment across development environments.",
			technologies: ["Jenkins", "Docker", "Kubernetes", "Git", "Bash"],
			category: "DevOps",
			image: "/api/placeholder/600/400",
			featured: false,
			status: "Production",
			year: "2023",
			highlights: [
				"Automated testing and deployment processes",
				"Reduced manual deployment errors by 95%",
				"Implemented blue-green deployment strategies"
			],
			links: {
				demo: null,
				github: "https://github.com/mhealy-dev",
				case_study: null
			}
		},
		{
			id: 4,
			title: "Microservices Architecture",
			description: "Architected and developed Go-based microservices for cloud infrastructure automation and monitoring.",
			technologies: ["Go", "Docker", "Kubernetes", "PostgreSQL", "Redis"],
			category: "Backend",
			image: "/api/placeholder/600/400",
			featured: false,
			status: "Production",
			year: "2024",
			highlights: [
				"Built scalable microservices handling 10k+ requests/minute",
				"Implemented service mesh for inter-service communication",
				"Created comprehensive API documentation and testing suites"
			],
			links: {
				demo: null,
				github: "https://github.com/mhealy-dev",
				case_study: null
			}
		},
		{
			id: 5,
			title: "Infrastructure Monitoring Suite",
			description: "Developed comprehensive monitoring and alerting system using modern observability tools and custom dashboards.",
			technologies: ["DataDog", "Prometheus", "Grafana", "Python", "AWS CloudWatch"],
			category: "Monitoring",
			image: "/api/placeholder/600/400",
			featured: false,
			status: "Production",
			year: "2023",
			highlights: [
				"Implemented real-time monitoring across 500+ services",
				"Created custom alerting rules reducing false positives by 80%",
				"Built executive dashboards for operational visibility"
			],
			links: {
				demo: null,
				github: null,
				case_study: "#"
			}
		},
		{
			id: 6,
			title: "Portfolio Website",
			description: "Modern portfolio website built with Svelte 5, featuring synthwave design and optimized for performance.",
			technologies: ["Svelte", "TypeScript", "Tailwind CSS", "Go", "Vite"],
			category: "Full Stack",
			image: "/api/placeholder/600/400",
			featured: false,
			status: "Development",
			year: "2025",
			highlights: [
				"Built with modern web technologies and best practices",
				"Optimized for performance and accessibility",
				"Features responsive design and interactive animations"
			],
			links: {
				demo: "https://mhealy.dev",
				github: "https://github.com/mhealy-dev/mHealy.dev",
				case_study: null
			}
		}
	];
	
	let selectedCategory = $state('All');
	let searchQuery = $state('');
	let selectedStatus = $state('All');
	let mounted = $state(false);
	
	const categories = ['All', ...new Set(projects.map(p => p.category))];
	const statuses = ['All', ...new Set(projects.map(p => p.status))];
	
	let filteredProjects = $derived(
		projects.filter(project => {
			const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
			const matchesStatus = selectedStatus === 'All' || project.status === selectedStatus;
			const matchesSearch = searchQuery === '' || 
				project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
				project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
			
			return matchesCategory && matchesStatus && matchesSearch;
		})
	);
	
	$effect(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Projects - Michael Healy</title>
	<meta name="description" content="Portfolio of projects by Michael Healy - Platform Engineer specializing in cloud infrastructure and DevOps" />
</svelte:head>

<div class="min-h-screen pt-20 pb-12">
	<div class="section-container">
		<!-- Header -->
		<section class="text-center mb-16">
			<h1 class="text-4xl md:text-5xl font-bold mb-6 gradient-text">Projects & Work</h1>
			<p class="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
				A showcase of my work in platform engineering, infrastructure automation, 
				and full-stack development. Each project represents real-world solutions 
				that drive operational efficiency and scalability.
			</p>
		</section>
		
		<!-- Filters -->
		<section class="mb-12">
			<div class="card p-6 backdrop-blur-sm">
				<div class="flex flex-col lg:flex-row gap-6 items-center justify-between">
					<!-- Search -->
					<div class="relative flex-grow max-w-md">
						<svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
						<input 
							type="text" 
							placeholder="Search projects..." 
							bind:value={searchQuery}
							class="w-full pl-10 pr-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-20 transition-all text-gray-100 placeholder-gray-500">
					</div>
					
					<!-- Category Filter -->
					<div class="flex gap-2 flex-wrap">
						{#each categories as category}
							<button 
								onclick={() => selectedCategory = category}
								class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 {selectedCategory === category 
									? 'bg-primary-500 text-white' 
									: 'bg-gray-800 bg-opacity-50 text-gray-400 hover:text-primary-300 hover:bg-primary-500 hover:bg-opacity-20'}">
								{category}
							</button>
						{/each}
					</div>
					
					<!-- Status Filter -->
					<div class="flex gap-2">
						{#each statuses as status}
							<button 
								onclick={() => selectedStatus = status}
								class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 {selectedStatus === status 
									? 'bg-secondary-500 text-white' 
									: 'bg-gray-800 bg-opacity-50 text-gray-400 hover:text-secondary-300 hover:bg-secondary-500 hover:bg-opacity-20'}">
								{status}
							</button>
						{/each}
					</div>
				</div>
			</div>
		</section>
		
		<!-- Projects Grid -->
		<section>
			{#if filteredProjects.length === 0}
				<div class="text-center py-16">
					<svg class="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 20.055a7.962 7.962 0 01-6-2.764M3 3l18 18" />
					</svg>
					<h3 class="text-xl font-semibold text-gray-400 mb-2">No projects found</h3>
					<p class="text-gray-600">Try adjusting your filters or search terms</p>
				</div>
			{:else}
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{#each filteredProjects as project, i}
						<div class="group card p-0 overflow-hidden hover:transform hover:scale-105 transition-all duration-500 {project.featured ? 'ring-2 ring-accent-500 ring-opacity-30' : ''}"
						     style="animation: fadeIn 0.5s ease-out {mounted ? i * 0.1 : 0}s both">
							
							<!-- Project Image -->
							<div class="relative overflow-hidden h-48 bg-gradient-to-br from-primary-500 to-secondary-500 opacity-80">
								<div class="absolute inset-0 bg-gray-900 bg-opacity-30"></div>
								<div class="absolute inset-0 flex items-center justify-center">
									<div class="text-center text-white">
										<h3 class="text-lg font-semibold mb-2">{project.title}</h3>
										<div class="text-sm opacity-80">{project.category}</div>
									</div>
								</div>
								
								<!-- Status Badge -->
								<div class="absolute top-4 right-4">
									<span class="px-2 py-1 text-xs rounded-full {project.status === 'Production' 
										? 'bg-green-500 bg-opacity-20 text-green-400 border border-green-500 border-opacity-30' 
										: 'bg-yellow-500 bg-opacity-20 text-yellow-400 border border-yellow-500 border-opacity-30'}">
										{project.status}
									</span>
								</div>
								
								<!-- Featured Badge -->
								{#if project.featured}
									<div class="absolute top-4 left-4">
										<span class="px-2 py-1 text-xs rounded-full bg-accent-500 bg-opacity-20 text-accent-400 border border-accent-500 border-opacity-30">
											Featured
										</span>
									</div>
								{/if}
							</div>
							
							<!-- Project Content -->
							<div class="p-6">
								<div class="flex justify-between items-start mb-3">
									<h3 class="text-xl font-semibold text-primary-100 group-hover:text-primary-50 transition-colors">
										{project.title}
									</h3>
									<span class="text-sm text-gray-500">{project.year}</span>
								</div>
								
								<p class="text-gray-400 text-sm mb-4 leading-relaxed">
									{project.description}
								</p>
								
								<!-- Technologies -->
								<div class="flex flex-wrap gap-2 mb-4">
									{#each project.technologies.slice(0, 4) as tech}
										<span class="px-2 py-1 text-xs rounded bg-primary-500 bg-opacity-10 text-primary-300 border border-primary-500 border-opacity-20">
											{tech}
										</span>
									{/each}
									{#if project.technologies.length > 4}
										<span class="px-2 py-1 text-xs rounded bg-gray-700 text-gray-400">
											+{project.technologies.length - 4} more
										</span>
									{/if}
								</div>
								
								<!-- Key Highlights -->
								<div class="mb-4">
									<h4 class="text-sm font-semibold text-primary-300 mb-2">Key Highlights</h4>
									<ul class="space-y-1">
										{#each project.highlights.slice(0, 2) as highlight}
											<li class="text-xs text-gray-400 flex items-start">
												<svg class="w-3 h-3 text-accent-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
													<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
												</svg>
												<span>{highlight}</span>
											</li>
										{/each}
									</ul>
								</div>
								
								<!-- Action Buttons -->
								<div class="flex gap-2">
									{#if project.links.demo}
										<a href={project.links.demo} target="_blank" class="flex-1 btn btn-outline text-xs py-2">
											<svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
											</svg>
											Live Demo
										</a>
									{/if}
									{#if project.links.github}
										<a href={project.links.github} target="_blank" class="flex-1 btn btn-outline text-xs py-2">
											<svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
												<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
											</svg>
											Code
										</a>
									{/if}
									{#if project.links.case_study}
										<a href={project.links.case_study} class="flex-1 btn btn-primary text-xs py-2">
											<svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 20.055a7.962 7.962 0 01-6-2.764M3 3l18 18" />
											</svg>
											Learn More
										</a>
									{/if}
								</div>
							</div>
						</div>
					{/each}
				</div>
			{/if}
		</section>
		
		<!-- Call to Action -->
		<section class="mt-20 text-center">
			<div class="card p-8 md:p-12 relative overflow-hidden">
				<div class="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full blur-3xl opacity-10"></div>
				<div class="absolute bottom-0 left-0 w-64 h-64 bg-secondary-500 rounded-full blur-3xl opacity-10"></div>
				<div class="relative z-10">
					<h2 class="text-2xl font-bold mb-4 text-primary-100">Interested in Working Together?</h2>
					<p class="text-gray-400 mb-8 max-w-2xl mx-auto">
						I'm always excited to tackle new challenges in platform engineering, 
						infrastructure automation, and building scalable solutions.
					</p>
					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						<a href="/contact" class="btn btn-primary">
							Get in Touch
						</a>
						<a href="/resume" class="btn btn-outline">
							View Resume
						</a>
					</div>
				</div>
			</div>
		</section>
	</div>
</div>

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>