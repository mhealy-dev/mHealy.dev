<script lang="ts">
	import { experience } from '$lib/data/experience';

	let expanded = $state<string | null>(null);
</script>

<section id="experience" class="py-24">
	<div class="section-container">
		<div class="section-rule"></div>

		<div class="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
			<!-- Left: label + heading -->
			<div class="md:sticky md:top-24">
				<p class="section-label">Experience</p>
				<h2 class="text-3xl font-bold text-white mb-4" style="letter-spacing: -0.02em;">
					Work History
				</h2>
				<p class="text-ink-400 text-sm leading-relaxed">
					{experience.length} roles across platform engineering, production support, and reliability.
				</p>
			</div>

			<!-- Right: job list -->
			<div class="space-y-0 divide-y" style="border-color: #1a1a1a;">
				{#each experience as job}
					<div class="py-6 group">
						<button
							class="w-full text-left"
							onclick={() => expanded = expanded === job.id ? null : job.id}
						>
							<div class="flex justify-between items-start gap-4">
								<div>
									<div class="flex items-center gap-3 mb-1">
										<h3 class="font-semibold text-white group-hover:text-accent-400 transition-colors">
											{job.title}
										</h3>
										{#if job.current}
											<span class="tag text-accent-400" style="border-color: #1d4ed8; background-color: rgba(37,99,235,0.1);">
												Current
											</span>
										{/if}
									</div>
									<p class="text-sm text-ink-300">
										{job.company} · {job.location}
									</p>
								</div>
								<div class="flex items-center gap-3 flex-shrink-0">
									<span class="text-xs text-ink-300 font-mono whitespace-nowrap">{job.period}</span>
									<svg
										class="w-4 h-4 text-ink-500 transition-transform duration-200 flex-shrink-0"
										class:rotate-180={expanded === job.id}
										fill="none" stroke="currentColor" viewBox="0 0 24 24"
									>
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
									</svg>
								</div>
							</div>
						</button>

						{#if expanded === job.id}
							<ul class="mt-4 space-y-2 pl-0 animate-fade-up">
								{#each job.highlights as highlight}
									<li class="flex items-start gap-3 text-sm text-ink-300">
										<span class="text-accent-500 mt-0.5 flex-shrink-0">—</span>
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
