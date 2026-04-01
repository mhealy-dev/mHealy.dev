<script lang="ts">
	import { skills } from '$lib/data/skills';

	let expandedSkill = $state<string | null>(null);

	// Group skills by category for the display
	const grouped = skills.reduce<Record<string, typeof skills>>((acc, skill) => {
		(acc[skill.category] ??= []).push(skill);
		return acc;
	}, {});
</script>

<section id="skills" class="py-24">
	<div class="section-container">
		<div class="section-rule"></div>

		<div class="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
			<!-- Left -->
			<div class="md:sticky md:top-24">
				<p class="section-label">Skills</p>
				<h2 class="text-3xl font-bold text-white mb-4" style="letter-spacing: -0.02em;">
					Technologies
				</h2>
				<p class="text-ink-400 text-sm leading-relaxed">
					Click any skill to see how I've applied it.
				</p>
			</div>

			<!-- Right: grouped skill cards -->
			<div class="space-y-8">
				{#each Object.entries(grouped) as [category, categorySkills]}
					<div>
						<h3 class="text-xs font-semibold text-ink-400 uppercase tracking-widest mb-3 font-mono">
							{category}
						</h3>
						<div class="flex flex-wrap gap-2">
							{#each categorySkills as skill}
								<button
									onclick={() => expandedSkill = expandedSkill === skill.name ? null : skill.name}
									class="tag cursor-pointer transition-all duration-200 hover:border-accent-700 hover:text-white"
									class:border-accent-600={expandedSkill === skill.name}
									class:text-accent-400={expandedSkill === skill.name}
									style={expandedSkill === skill.name ? 'background-color: rgba(37,99,235,0.08);' : ''}
								>
									{skill.name}
								</button>
							{/each}
						</div>

						<!-- Expanded detail panel -->
						{#each categorySkills as skill}
							{#if expandedSkill === skill.name}
								<div class="mt-3 p-4 rounded-lg border animate-fade-up" style="border-color: #1e1e1e; background-color: #111111;">
									<p class="text-xs text-ink-400 uppercase tracking-widest font-mono mb-3">{skill.name} — Experience</p>
									<ul class="space-y-2">
										{#each skill.useCases as useCase}
											<li class="text-sm text-ink-200 flex items-start gap-3">
												<span class="text-accent-500 flex-shrink-0 mt-0.5">—</span>
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
