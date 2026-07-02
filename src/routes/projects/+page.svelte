<script lang="ts">
	import { projects } from '$lib/data/projects';
	import { reveal } from '$lib/actions/reveal';

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
		<header class="pt-14 pb-10 border-b border-line mb-10">
			<p class="eyebrow mb-4"><span class="index">04</span> Work</p>
			<h1 class="font-display font-bold text-fg mb-4" style="font-size: clamp(3rem, 8vw, 5.5rem); letter-spacing: -0.03em; line-height: 0.95;">
				Projects<span class="text-accent">.</span>
			</h1>
			<p class="text-muted max-w-xl leading-relaxed">
				Real-world solutions in platform engineering, infrastructure automation, and full-stack development.
			</p>
		</header>

		<!-- Filters -->
		<div class="flex flex-col lg:flex-row gap-5 items-start lg:items-center mb-12">
			<!-- Search -->
			<div class="relative flex-grow max-w-sm w-full">
				<span class="absolute left-3.5 top-1/2 -translate-y-1/2 font-mono text-accent text-sm select-none" aria-hidden="true">&gt;</span>
				<input
					type="text"
					placeholder="Search projects…"
					bind:value={searchQuery}
					class="field pl-8 font-mono text-xs"
				/>
			</div>

			<!-- Category pills -->
			<div class="flex flex-wrap gap-1.5">
				{#each categories as category}
					<button
						onclick={() => (selectedCategory = category)}
						class="tag cursor-pointer transition-colors duration-150 hover:text-fg hover:border-line-strong"
						class:!border-accent={selectedCategory === category}
						class:!text-accent={selectedCategory === category}
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
						class="tag cursor-pointer transition-colors duration-150 hover:text-fg hover:border-line-strong"
						class:!border-accent={selectedStatus === status}
						class:!text-accent={selectedStatus === status}
					>
						{status}
					</button>
				{/each}
			</div>
		</div>

		<!-- Project list -->
		{#if filteredProjects.length === 0}
			<div class="text-center py-24 border-t border-b border-line">
				<p class="font-mono text-xs text-subtle">No projects match your filters.</p>
			</div>
		{:else}
			<div class="divide-y divide-line border-t border-b border-line">
				{#each filteredProjects as project, i (project.id)}
					<article class="reveal py-10 group" use:reveal={{ delay: Math.min(i, 4) * 60 }}>
						<div class="grid md:grid-cols-[auto_1fr_auto] gap-x-8 gap-y-4 items-baseline">
							<span class="font-mono text-sm text-faint hidden md:block w-10">
								{String(project.id).padStart(2, '0')}
							</span>

							<div class="min-w-0">
								<div class="flex items-baseline gap-4 flex-wrap mb-3">
									<h2 class="font-display font-bold text-2xl text-fg group-hover:text-accent transition-colors" style="letter-spacing: -0.01em;">
										{project.title}
									</h2>
									<span class="font-mono text-[11px] text-subtle md:hidden">{project.year}</span>
								</div>

								<div class="flex items-center gap-2 mb-4 flex-wrap">
									<span class="tag">{project.category}</span>
									<span class="tag" class:!text-accent={project.status === 'Development'}>{project.status}</span>
									{#if project.featured}
										<span class="tag !border-accent/40 !text-accent">Featured</span>
									{/if}
									{#if project.links.github}
										<a
											href={project.links.github}
											target="_blank"
											rel="noopener noreferrer"
											aria-label="View {project.title} on GitHub"
											class="font-mono text-[11px] text-subtle hover:text-fg transition-colors ml-1"
										>Source ↗</a>
									{/if}
								</div>

								<p class="text-sm text-muted leading-relaxed mb-4 max-w-2xl">{project.description}</p>

								<ul class="space-y-1.5 mb-5">
									{#each project.highlights as highlight}
										<li class="text-sm text-subtle flex items-start gap-3">
											<span class="text-accent flex-shrink-0">—</span>
											<span>{highlight}</span>
										</li>
									{/each}
								</ul>

								<p class="font-mono text-[11px] text-subtle tracking-wide">
									{project.technologies.join(' · ')}
								</p>
							</div>

							<span class="font-mono text-[11px] text-subtle hidden md:block">{project.year}</span>
						</div>
					</article>
				{/each}
			</div>
		{/if}

		<!-- CTA -->
		<div class="mt-16 pt-10 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
			<p class="text-muted text-sm">Interested in working together?</p>
			<div class="flex gap-3">
				<a href="/#contact" class="btn btn-primary">Get in Touch</a>
				<a href="/resume" class="btn btn-outline">View Resume</a>
			</div>
		</div>
	</div>
</div>
