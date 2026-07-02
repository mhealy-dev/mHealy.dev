<script lang="ts">
	import { experience } from '$lib/data/experience';
	import { reveal } from '$lib/actions/reveal';

	let expanded = $state<string | null>(null);
</script>

<section id="experience" class="py-24">
	<div class="section-container">
		<div class="hairline mb-14"></div>

		<div class="grid md:grid-cols-[1fr_2fr] gap-x-16 gap-y-10 items-start">
			<!-- Left: index + heading -->
			<div class="md:sticky md:top-24 reveal" use:reveal>
				<p class="eyebrow mb-4"><span class="index">02</span> Experience</p>
				<h2 class="font-display font-bold text-4xl text-fg mb-4" style="letter-spacing: -0.02em;">
					Work History
				</h2>
				<p class="text-subtle text-sm leading-relaxed">
					{experience.length} roles across platform engineering, production support, and reliability.
				</p>
			</div>

			<!-- Right: job list -->
			<div class="divide-y divide-line border-t border-b border-line">
				{#each experience as job, i}
					<div class="reveal group" use:reveal={{ delay: i * 60 }}>
						<button
							class="w-full text-left py-6"
							onclick={() => expanded = expanded === job.id ? null : job.id}
							aria-expanded={expanded === job.id}
						>
							<div class="flex justify-between items-start gap-4">
								<div class="flex items-baseline gap-4 min-w-0">
									<span class="font-mono text-[11px] text-faint flex-shrink-0">0{i + 1}</span>
									<div class="min-w-0">
										<div class="flex items-center gap-3 mb-1 flex-wrap">
											<h3 class="font-display font-bold text-lg text-fg group-hover:text-accent transition-colors" style="letter-spacing: -0.01em;">
												{job.title}
											</h3>
											{#if job.current}
												<span class="tag text-accent border-accent/40">Current</span>
											{/if}
										</div>
										<p class="text-sm text-subtle">
											{job.company} · {job.location}
										</p>
									</div>
								</div>
								<div class="flex items-center gap-3 flex-shrink-0 pt-1">
									<span class="font-mono text-[11px] text-subtle whitespace-nowrap">{job.period}</span>
									<svg
										class="w-3.5 h-3.5 text-faint transition-transform duration-200 flex-shrink-0"
										class:rotate-45={expanded === job.id}
										fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
									>
										<path stroke-linecap="round" d="M12 5v14M5 12h14" />
									</svg>
								</div>
							</div>
						</button>

						{#if expanded === job.id}
							<ul class="pb-6 pl-9 space-y-2 animate-fade-up" style="animation-duration: 0.3s">
								{#each job.highlights as highlight}
									<li class="flex items-start gap-3 text-sm text-muted">
										<span class="text-accent mt-0.5 flex-shrink-0">—</span>
										<span>{highlight}</span>
									</li>
								{/each}
							</ul>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
