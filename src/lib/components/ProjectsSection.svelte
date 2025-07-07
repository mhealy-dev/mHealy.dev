<script lang="ts">
	import { base } from "$app/paths";
	// This will be populated from the backend API
	const projects = [
		{
			id: 1,
			name: 'Portfolio Website',
			description: 'Modern portfolio built with Svelte 5 and Go',
			technologies: ['Svelte', 'Go', 'Tailwind CSS'],
			image: '/project1.jpg',
			github: 'https://github.com/mhealy/portfolio',
			demo: 'https://mhealy.dev'
		},
		{
			id: 2,
			name: 'Task Manager',
			description: 'Full-stack task management application',
			technologies: ['React', 'Node.js', 'MongoDB'],
			image: '/project2.jpg',
			github: 'https://github.com/mhealy/taskmanager',
			demo: 'https://tasks.mhealy.dev'
		},
		{
			id: 3,
			name: 'Weather App',
			description: 'Real-time weather application with forecasts',
			technologies: ['Vue.js', 'Express', 'Weather API'],
			image: '/project3.jpg',
			github: 'https://github.com/mhealy/weather',
			demo: 'https://weather.mhealy.dev'
		}
	];
</script>

<section id="projects" class="py-20 relative">
	<!-- Background decoration -->
	<div class="absolute inset-0 grid-background opacity-10"></div>
	
	<div class="section-container relative z-10">
		<h2 class="text-4xl font-bold text-center mb-4 gradient-text">Featured Projects</h2>
		<p class="text-center text-gray-400 mb-12">Some of my recent work</p>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each projects as project, i}
				<div class="card overflow-hidden group hover:transform hover:-translate-y-2 transition-all duration-300"
				     style="animation-delay: {i * 150}ms">
					<!-- Project preview with gradient overlay -->
					<div class="h-48 relative overflow-hidden">
						<div class="absolute inset-0 bg-gradient-to-br from-primary-500 from-opacity-20 to-secondary-500 to-opacity-20"></div>
						<div class="absolute inset-0 opacity-60" style="background: linear-gradient(to top, #0f172a, transparent);"></div>
						<div class="absolute inset-0 flex items-center justify-center">
							<div class="text-6xl font-bold text-primary-500 text-opacity-20 group-hover:scale-110 transition-transform duration-300">
								{project.name.charAt(0)}
							</div>
						</div>
					</div>
					
					<div class="p-6">
						<h3 class="text-xl font-semibold mb-2 text-primary-200">{project.name}</h3>
						<p class="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
						
						<div class="flex flex-wrap gap-2 mb-4">
							{#each project.technologies as tech}
								<span class="px-3 py-1 border border-primary-500 border-opacity-20 text-primary-300 rounded-full text-xs" style="background: linear-gradient(to right, rgba(168, 85, 247, 0.1), rgba(99, 102, 241, 0.1));">
									{tech}
								</span>
							{/each}
						</div>
						
						<div class="flex space-x-4 pt-4 border-t border-primary-500 border-opacity-10">
							<a href={project.github} target="_blank" rel="noopener noreferrer" 
							   class="text-gray-400 hover:text-primary-300 transition-colors flex items-center gap-1 text-sm">
								<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"/>
								</svg>
								Code
							</a>
							<a href={project.demo} target="_blank" rel="noopener noreferrer"
							   class="text-gray-400 hover:text-primary-300 transition-colors flex items-center gap-1 text-sm">
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
								</svg>
								Demo
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
		
		<div class="text-center mt-12">
			<a href="{base}/projects" class="btn btn-primary">
				View All Projects
			</a>
		</div>
	</div>
</section>