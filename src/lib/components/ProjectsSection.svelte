<script lang="ts">
	import { projects } from '$lib/data/projects';
	import { reveal } from '$lib/actions/reveal';

	const featured = projects.filter((p) => p.featured);
</script>

<section id="projects" class="py-24">
	<div class="section-container">
		<div class="hairline mb-14"></div>

		<div class="grid md:grid-cols-[1fr_2fr] gap-x-16 gap-y-10 items-start">
			<!-- Left -->
			<div class="md:sticky md:top-24 reveal" use:reveal>
				<p class="eyebrow mb-4"><span class="index">04</span> Projects</p>
				<h2 class="font-display font-bold text-4xl text-fg mb-4" style="letter-spacing: -0.02em;">
					Featured Work
				</h2>
				<p class="text-subtle text-sm leading-relaxed mb-6">
					Selected projects from my platform engineering career.
				</p>
				<a href="/projects" class="btn btn-outline">All Projects ↗</a>
			</div>

			<!-- Right: project entries -->
			<div class="divide-y divide-line border-t border-b border-line">
				{#each featured as project, i}
					<article class="reveal py-8 group" use:reveal={{ delay: i * 80 }}>
						<div class="flex items-baseline gap-4 mb-3">
							<span class="font-mono text-[11px] text-faint flex-shrink-0">0{i + 1}</span>
							<div class="flex items-baseline justify-between gap-4 flex-grow flex-wrap">
								<h3 class="font-display font-bold text-xl text-fg group-hover:text-accent transition-colors" style="letter-spacing: -0.01em;">
									{project.title}
								</h3>
								<span class="font-mono text-[11px] text-subtle">{project.year}</span>
							</div>
						</div>

						<div class="pl-9">
							<div class="flex items-center gap-2 mb-4">
								<span class="tag">{project.category}</span>
								<span class="tag" class:text-accent={project.status === 'Development'}>{project.status}</span>
								{#if project.links.github}
									<a
										href={project.links.github}
										target="_blank"
										rel="noopener noreferrer"
										class="font-mono text-[11px] text-subtle hover:text-fg transition-colors ml-1"
									>Source ↗</a>
								{/if}
							</div>

							<p class="text-sm text-muted leading-relaxed mb-4 max-w-xl">{project.description}</p>

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
					</article>
				{/each}
			</div>
		</div>
	</div>
</section>
