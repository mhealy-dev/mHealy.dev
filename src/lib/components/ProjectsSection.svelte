<script lang="ts">
	import { projects } from '$lib/data/projects';

	const featured = projects.filter((p) => p.featured);
</script>

<section id="projects" class="py-24">
	<div class="section-container">
		<div class="section-rule"></div>

		<div class="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
			<!-- Left -->
			<div class="md:sticky md:top-24">
				<p class="section-label">Projects</p>
				<h2 class="text-3xl font-bold text-white mb-4" style="letter-spacing: -0.02em;">
					Featured Work
				</h2>
				<p class="text-ink-400 text-sm leading-relaxed mb-6">
					Selected projects from my Platform Engineering career.
				</p>
				<a href="/projects" class="btn btn-outline text-sm">All Projects ↗</a>
			</div>

			<!-- Right: project cards -->
			<div class="space-y-4">
				{#each featured as project, i}
					<div
						class="card p-6 group hover:-translate-y-0.5 transition-all duration-200"
						style="animation-delay: {i * 100}ms"
					>
						<div class="flex items-start justify-between gap-4 mb-3">
							<div>
								<h3 class="font-semibold text-white group-hover:text-accent-400 transition-colors mb-1">
									{project.title}
								</h3>
								<div class="flex items-center gap-2">
									<span class="tag">{project.category}</span>
									<span class="tag" style="color: #4ade80; border-color: rgba(74,222,128,0.2); background-color: rgba(74,222,128,0.05);">{project.status}</span>
									<span class="text-xs text-ink-500 font-mono">{project.year}</span>
								</div>
							</div>
							{#if project.links.github}
								<a
									href={project.links.github}
									target="_blank"
									rel="noopener noreferrer"
									class="text-ink-500 hover:text-white transition-colors flex-shrink-0"
									aria-label="GitHub"
								>
									<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
									</svg>
								</a>
							{/if}
						</div>

						<p class="text-sm text-ink-300 leading-relaxed mb-4">{project.description}</p>

						<ul class="space-y-1.5 mb-4">
							{#each project.highlights as highlight}
								<li class="text-xs text-ink-400 flex items-start gap-2">
									<span class="text-accent-600 flex-shrink-0 mt-0.5">—</span>
									<span>{highlight}</span>
								</li>
							{/each}
						</ul>

						<div class="flex flex-wrap gap-1.5">
							{#each project.technologies as tech}
								<span class="tag">{tech}</span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
