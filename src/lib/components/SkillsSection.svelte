<script lang="ts">
	// This will be populated from the backend API
	const skills = [
		{ name: 'TypeScript', level: 90, category: 'Frontend' },
		{ name: 'Svelte', level: 85, category: 'Frontend' },
		{ name: 'Go', level: 80, category: 'Backend' },
		{ name: 'Python', level: 85, category: 'Backend' },
		{ name: 'Docker', level: 75, category: 'DevOps' },
		{ name: 'PostgreSQL', level: 80, category: 'Database' }
	];
</script>

<section id="skills" class="py-20 relative">
	<div class="section-container">
		<h2 class="text-4xl font-bold text-center mb-4 gradient-text">Skills & Technologies</h2>
		<p class="text-center text-gray-400 mb-12">The tools and technologies I work with</p>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each skills as skill, i}
				<div class="card p-6 group hover:transform hover:scale-105 transition-all duration-300"
				     style="animation-delay: {i * 100}ms">
					<div class="flex justify-between items-center mb-4">
						<h3 class="font-semibold text-lg text-primary-200">{skill.name}</h3>
						<span class="text-xs px-2 py-1 rounded-full bg-primary-500 bg-opacity-20 text-primary-300">
							{skill.category}
						</span>
					</div>
					<div class="space-y-2">
						<div class="flex justify-between text-sm">
							<span class="text-gray-400">Proficiency</span>
							<span class="text-primary-300">{skill.level}%</span>
						</div>
						<div class="w-full rounded-full h-2 overflow-hidden" style="background-color: rgba(30, 41, 59, 0.5);">
							<div class="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-1000 ease-out relative"
							     style="width: {skill.level}%">
								<div class="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 opacity-50 blur-sm"></div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>