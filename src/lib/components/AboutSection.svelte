<script lang="ts">
	import { profile } from '$lib/data/profile';
</script>

<section id="about" class="py-24">
	<div class="section-container">
		<div class="section-rule"></div>

		<div class="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
			<!-- Left: label + heading -->
			<div>
				<p class="section-label">About</p>
				<h2 class="text-3xl font-bold text-white mb-6" style="letter-spacing: -0.02em;">
					Platform Engineer.<br />Automation first.
				</h2>
				<div class="flex flex-col gap-3">
					<a
						href={profile.contact.githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-outline self-start"
					>GitHub ↗</a>
					<a
						href={profile.contact.linkedinUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-outline self-start"
					>LinkedIn ↗</a>
				</div>
			</div>

			<!-- Right: bio -->
			<div class="space-y-5 text-ink-200 leading-relaxed text-[1.05rem]">
				{#each profile.bio as paragraph}
					<p>{paragraph}</p>
				{/each}
			</div>
		</div>

	</div>
</section>
