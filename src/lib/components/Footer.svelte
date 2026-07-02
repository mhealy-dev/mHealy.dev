<script lang="ts">
	import { profile } from '$lib/data/profile';
	import { openPalette } from '$lib/stores/palette.svelte';

	const currentYear = new Date().getFullYear();
</script>

<footer class="border-t border-line mt-24">
	<div class="section-container py-14">
		<div class="flex flex-col md:flex-row md:items-end justify-between gap-10">
			<!-- Oversized wordmark -->
			<div>
				<a
					href="/"
					class="font-display font-bold text-4xl sm:text-5xl text-fg hover:text-accent transition-colors"
					style="letter-spacing: -0.03em;"
				>
					mhealy<span class="text-accent">.</span>dev
				</a>
				<p class="font-mono text-[11px] text-subtle mt-3 tracking-wide">
					{profile.title} · {profile.contact.location}
				</p>
			</div>

			<!-- Links -->
			<div class="flex gap-14">
				<div class="flex flex-col gap-2">
					<p class="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle mb-1">Site</p>
					<a href="/#about" class="text-sm text-muted hover:text-fg transition-colors">About</a>
					<a href="/projects" class="text-sm text-muted hover:text-fg transition-colors">Projects</a>
					<a href="/resume" class="text-sm text-muted hover:text-fg transition-colors">Resume</a>
				</div>
				<div class="flex flex-col gap-2">
					<p class="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle mb-1">Elsewhere</p>
					<a href={profile.contact.githubUrl} target="_blank" rel="noopener noreferrer" class="text-sm text-muted hover:text-fg transition-colors">GitHub ↗</a>
					<a href={profile.contact.linkedinUrl} target="_blank" rel="noopener noreferrer" class="text-sm text-muted hover:text-fg transition-colors">LinkedIn ↗</a>
					<a href="mailto:{profile.contact.email}" class="text-sm text-muted hover:text-fg transition-colors">Email</a>
				</div>
			</div>
		</div>

		<!-- Meta line -->
		<div class="mt-12 pt-6 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
			<p class="font-mono text-[11px] text-subtle">© {currentYear} {profile.name}</p>
			<button
				onclick={openPalette}
				class="font-mono text-[11px] text-subtle hover:text-fg transition-colors"
			>
				Press <kbd class="border border-line px-1.5 py-0.5 mx-0.5">⌘K</kbd> anywhere
			</button>
		</div>
	</div>
</footer>
