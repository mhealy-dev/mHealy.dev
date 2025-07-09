<script lang="ts">
	// This will be populated from the backend API
	const skills = [
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
				'Implemented security best practices',
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
			name: 'Kubernetes', 
			category: 'DevOps',
			useCases: [
				'Deployed production workloads on EKS',
				'Implemented auto-scaling strategies',
				'Managed service mesh configurations'
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

	let expandedSkill = $state<string | null>(null);
</script>

<section id="skills" class="py-20 relative">
	<div class="section-container">
		<h2 class="text-4xl font-bold text-center mb-4 gradient-text">Skills & Technologies</h2>
		<p class="text-center text-gray-400 mb-12">The tools and technologies I work with</p>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
			{#each skills as skill, i}
				<div class="card p-6 group transition-all duration-500 ease-in-out relative cursor-pointer overflow-hidden"
				     role="button"
				     tabindex="0"
				     style="animation-delay: {i * 100}ms; min-height: 100px;"
				     onmouseenter={() => expandedSkill = skill.name}
				     onmouseleave={() => expandedSkill = null}>
					<div class="flex justify-between items-center mb-3">
						<h3 class="font-semibold text-lg text-primary-200 transition-colors duration-300 {expandedSkill === skill.name ? 'text-primary-100' : ''}">{skill.name}</h3>
						<span class="text-xs px-2 py-1 rounded-full bg-primary-500 bg-opacity-20 text-primary-300 transition-all duration-300 {expandedSkill === skill.name ? 'bg-opacity-30' : ''}">
							{skill.category}
						</span>
					</div>
					
					<!-- Default state -->
					<div class="text-sm text-gray-400 transition-all duration-300 {expandedSkill === skill.name ? 'opacity-0 h-0' : 'opacity-100 h-6'}">
						<span class="group-hover:text-primary-300 transition-colors">Hover to see experience →</span>
					</div>
					
					<!-- Expanded state with use cases -->
					<div class="transition-all duration-500 ease-in-out overflow-hidden {expandedSkill === skill.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}">
						<p class="text-xs text-gray-400 uppercase tracking-wider mb-3">Experience</p>
						<ul class="space-y-2">
							{#each skill.useCases as useCase, index}
								<li class="text-sm text-gray-300 flex items-start transition-all duration-300 transform {expandedSkill === skill.name ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}"
								    style="transition-delay: {index * 50}ms">
									<span class="text-secondary-400 mr-2 mt-1">▸</span>
									<span>{useCase}</span>
								</li>
							{/each}
						</ul>
					</div>
					
					<!-- Hover glow effect -->
					<div class="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
				</div>
			{/each}
		</div>
	</div>
</section>