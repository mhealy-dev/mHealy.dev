<script lang="ts">
	import { browser } from '$app/environment';
	import { profile } from '$lib/data/profile';
	import { openPalette } from '$lib/stores/palette.svelte';

	let scrollY = $state(0);
	let showScrollIndicator = $derived(scrollY < 80);

	$effect(() => {
		if (!browser) return;
		const handleScroll = () => { scrollY = window.scrollY; };
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<section class="min-h-screen flex flex-col pt-16 relative">
	<div class="section-container w-full flex-grow flex flex-col justify-center py-16">

		<!-- Eyebrow -->
		<div class="mask-line mb-8">
			<span style="--line-delay: 0ms">
				<span class="font-mono text-xs uppercase tracking-[0.25em] text-subtle">
					{profile.roles.join(' · ')}
				</span>
			</span>
		</div>

		<!-- Massive name -->
		<h1
			class="font-display font-bold uppercase text-fg"
			style="font-size: clamp(3.5rem, 13vw, 11rem); line-height: 0.92; letter-spacing: -0.03em;"
		>
			<span class="mask-line"><span style="--line-delay: 100ms">Michael</span></span>
			<span class="mask-line"><span style="--line-delay: 220ms">Healy<span class="text-accent">.</span></span></span>
		</h1>

		<!-- Tagline -->
		<div class="mask-line mt-10">
			<span style="--line-delay: 380ms">
				<p class="text-lg sm:text-xl text-muted max-w-xl leading-relaxed">
					{profile.tagline}
				</p>
			</span>
		</div>

		<!-- Status line -->
		<div class="mask-line mt-8">
			<span style="--line-delay: 500ms">
				<p class="flex items-center gap-2.5 font-mono text-xs tracking-wide text-muted">
					<span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot flex-shrink-0"></span>
					Currently — Internal Developer Portal @ Yum! Brands
				</p>
			</span>
		</div>

		<!-- CTAs -->
		<div class="mask-line mt-12">
			<span style="--line-delay: 620ms">
				<span class="flex flex-wrap items-center gap-3">
					<a href="#experience" class="btn btn-primary">View Experience</a>
					<a href="/resume" class="btn btn-outline">Resume ↗</a>
					<button
						onclick={openPalette}
						class="font-mono text-[11px] text-subtle hover:text-fg transition-colors ml-1"
					>
						or press <kbd class="border border-line px-1.5 py-0.5 mx-0.5">⌘K</kbd>
					</button>
				</span>
			</span>
		</div>
	</div>

	<!-- Bottom meta bar -->
	<div class="section-container w-full pb-6">
		<div class="hairline pt-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-subtle animate-fade-in" style="animation-delay: 900ms">
			<span>{profile.contact.location}</span>
			<span class="hidden sm:inline">Platform · Automation · Infrastructure</span>
			{#if showScrollIndicator}
				<span class="flex items-center gap-2">
					Scroll
					<svg class="w-3 h-3 animate-bounce" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
					</svg>
				</span>
			{:else}
				<span class="opacity-0">Scroll</span>
			{/if}
		</div>
	</div>
</section>
