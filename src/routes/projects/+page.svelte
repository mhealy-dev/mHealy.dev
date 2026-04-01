<script lang="ts">
	import { projects } from '$lib/data/projects';

	let selectedCategory = $state('All');
	let searchQuery = $state('');
	let selectedStatus = $state('All');

	const categories = ['All', ...new Set(projects.map((p) => p.category))];
	const statuses = ['All', ...new Set(projects.map((p) => p.status))];

	let filteredProjects = $derived(
		projects.filter((project) => {
			const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
			const matchesStatus = selectedStatus === 'All' || project.status === selectedStatus;
			const matchesSearch =
				searchQuery === '' ||
				project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
				project.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
			return matchesCategory && matchesStatus && matchesSearch;
		})
	);
</script>

<svelte:head>
	<title>Projects — Michael Healy</title>
	<meta name="description" content="Portfolio of projects by Michael Healy — Platform Engineer" />
</svelte:head>

<div class="min-h-screen pt-16 pb-16">
	<div class="section-container">

		<!-- Page header -->
		<div class="py-10 border-b mb-10" style="border-color: #1a1a1a;">
			<p class="section-label mb-2">Work</p>
			<h1 class="text-4xl font-bold text-white mb-3" style="letter-spacing: -0.03em;">Projects</h1>
			<p class="text-ink-400 max-w-xl leading-relaxed text-sm">
				Real-world solutions in platform engineering, infrastructure automation, and full-stack development.
			</p>
		</div>

		<!-- Filters -->
		<div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-10">
			<!-- Search -->
			<div class="relative flex-grow max-w-sm">
				<svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
				</svg>
				<input
					type="text"
					placeholder="Search…"
					bind:value={searchQuery}
					class="w-full pl-9 pr-4 py-2 rounded-md border text-sm text-white placeholder-ink-600 bg-transparent focus:outline-none focus:border-accent-700 transition-colors"
					style="border-color: #222222; background-color: #0f0f0f;"
				/>
			</div>

			<!-- Category pills -->
			<div class="flex flex-wrap gap-1.5">
				{#each categories as category}
					<button
						onclick={() => (selectedCategory = category)}
						class="tag cursor-pointer transition-all duration-150 hover:text-white"
						class:border-accent-600={selectedCategory === category}
						class:text-accent-400={selectedCategory === category}
					>
						{category}
					</button>
				{/each}
			</div>

			<!-- Status pills -->
			<div class="flex gap-1.5">
				{#each statuses as status}
					<button
						onclick={() => (selectedStatus = status)}
						class="tag cursor-pointer transition-all duration-150 hover:text-white"
						class:border-accent-600={selectedStatus === status}
						class:text-accent-400={selectedStatus === status}
					>
						{status}
					</button>
				{/each}
			</div>
		</div>

		<!-- Grid -->
		{#if filteredProjects.length === 0}
			<div class="text-center py-20">
				<p class="text-ink-500 text-sm">No projects match your filters.</p>
			</div>
		{:else}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{#each filteredProjects as project}
					<div
						class="card p-6 flex flex-col group hover:-translate-y-0.5 transition-all duration-200"
						class:ring-1={project.featured}
						style={project.featured ? 'ring-color: rgba(37,99,235,0.3);' : ''}
					>
						<div class="flex items-start justify-between gap-2 mb-3">
							<h3 class="font-semibold text-white text-sm leading-snug group-hover:text-accent-400 transition-colors">
								{project.title}
							</h3>
							{#if project.links.github}
								<a href={project.links.github} target="_blank" rel="noopener noreferrer"
									aria-label="View {project.title} on GitHub"
									class="text-ink-500 hover:text-white transition-colors flex-shrink-0">
									<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
									</svg>
								</a>
							{/if}
						</div>

						<div class="flex items-center gap-2 mb-3">
							<span class="tag">{project.category}</span>
							<span class="tag" style="color: {project.status === 'Production' ? '#4ade80' : '#fbbf24'}; border-color: {project.status === 'Production' ? 'rgba(74,222,128,0.2)' : 'rgba(251,191,36,0.2)'}; background-color: {project.status === 'Production' ? 'rgba(74,222,128,0.05)' : 'rgba(251,191,36,0.05)'};">
								{project.status}
							</span>
							<span class="text-xs text-ink-500 font-mono ml-auto">{project.year}</span>
						</div>

						<p class="text-xs text-ink-400 leading-relaxed mb-4 flex-grow">{project.description}</p>

						<div class="mb-3">
							<ul class="space-y-1">
								{#each project.highlights.slice(0, 2) as highlight}
									<li class="text-xs text-ink-500 flex items-start gap-2">
										<span class="text-accent-700 flex-shrink-0">—</span>
										<span>{highlight}</span>
									</li>
								{/each}
							</ul>
						</div>

						<div class="flex flex-wrap gap-1.5 pt-3 border-t" style="border-color: #1a1a1a;">
							{#each project.technologies.slice(0, 4) as tech}
								<span class="tag">{tech}</span>
							{/each}
							{#if project.technologies.length > 4}
								<span class="tag text-ink-500">+{project.technologies.length - 4}</span>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		{/if}

		<!-- CTA -->
		<div class="mt-16 pt-10 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style="border-color: #1a1a1a;">
			<p class="text-ink-400 text-sm">Interested in working together?</p>
			<div class="flex gap-3">
				<a href="/#contact" class="btn btn-primary">Get in Touch</a>
				<a href="/resume" class="btn btn-outline">View Resume</a>
			</div>
		</div>
	</div>
</div>
