<script lang="ts">
	import { skills } from '$lib/data/skills';
	import { reveal } from '$lib/actions/reveal';

	let expandedSkill = $state<string | null>(null);

	// Group skills by category for the display
	const grouped = skills.reduce<Record<string, typeof skills>>((acc, skill) => {
		(acc[skill.category] ??= []).push(skill);
		return acc;
	}, {});
</script>

<section id="skills" class="py-24">
	<div class="section-container">
		<div class="hairline mb-14"></div>

		<div class="grid md:grid-cols-[1fr_2fr] gap-x-16 gap-y-10 items-start">
			<!-- Left -->
			<div class="md:sticky md:top-24 reveal" use:reveal>
				<p class="eyebrow mb-4"><span class="index">03</span> Skills</p>
				<h2 class="font-display font-bold text-4xl text-fg mb-4" style="letter-spacing: -0.02em;">
					Technologies
				</h2>
				<p class="text-subtle text-sm leading-relaxed">
					Select any skill to see how I've applied it.
				</p>
			</div>

			<!-- Right: grouped skill tags -->
			<div class="space-y-10">
				{#each Object.entries(grouped) as [category, categorySkills], gi}
					<div class="reveal" use:reveal={{ delay: gi * 80 }}>
						<h3 class="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle mb-3">
							{category}
						</h3>
						<div class="flex flex-wrap gap-2">
							{#each categorySkills as skill}
								<button
									onclick={() => expandedSkill = expandedSkill === skill.name ? null : skill.name}
									class="tag cursor-pointer transition-colors duration-150 hover:text-fg hover:border-line-strong"
									class:!border-accent={expandedSkill === skill.name}
									class:!text-accent={expandedSkill === skill.name}
									aria-expanded={expandedSkill === skill.name}
								>
									{skill.name}
								</button>
							{/each}
						</div>

						<!-- Expanded detail panel -->
						{#each categorySkills as skill}
							{#if expandedSkill === skill.name}
								<div class="mt-3 p-5 border border-line bg-surface/60 animate-fade-up" style="animation-duration: 0.3s">
									<p class="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle mb-3">
										{skill.name} — In practice
									</p>
									<ul class="space-y-2">
										{#each skill.useCases as useCase}
											<li class="text-sm text-muted flex items-start gap-3">
												<span class="text-accent flex-shrink-0 mt-0.5">—</span>
												<span>{useCase}</span>
											</li>
										{/each}
									</ul>
								</div>
							{/if}
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
