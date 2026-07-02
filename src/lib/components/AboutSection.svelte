<script lang="ts">
	import { profile } from '$lib/data/profile';
	import { reveal } from '$lib/actions/reveal';
</script>

<section id="about" class="py-24">
	<div class="section-container">
		<div class="hairline mb-14"></div>

		<div class="grid md:grid-cols-[1fr_2fr] gap-x-16 gap-y-10 items-start">
			<!-- Left: index + heading -->
			<div class="reveal" use:reveal>
				<p class="eyebrow mb-4"><span class="index">01</span> About</p>
				<h2 class="font-display font-bold text-4xl text-fg mb-8" style="letter-spacing: -0.02em; line-height: 1.05;">
					Platform Engineer.<br />Automation first.
				</h2>
				<div class="flex flex-col gap-2 font-mono text-xs">
					<a href={profile.contact.githubUrl} target="_blank" rel="noopener noreferrer" class="text-muted hover:text-fg transition-colors">GitHub ↗</a>
					<a href={profile.contact.linkedinUrl} target="_blank" rel="noopener noreferrer" class="text-muted hover:text-fg transition-colors">LinkedIn ↗</a>
				</div>
			</div>

			<!-- Right: bio + philosophy -->
			<div>
				<div class="space-y-5 text-muted leading-relaxed text-[1.05rem]">
					{#each profile.bio as paragraph, i}
						<p class="reveal" use:reveal={{ delay: i * 90 }}>{paragraph}</p>
					{/each}
				</div>

				<blockquote class="reveal mt-10 pl-5 border-l-2 border-accent" use:reveal={{ delay: 280 }}>
					<p class="font-display text-xl sm:text-2xl text-fg leading-snug" style="letter-spacing: -0.01em;">
						“{profile.philosophy}”
					</p>
				</blockquote>
			</div>
		</div>
	</div>
</section>
