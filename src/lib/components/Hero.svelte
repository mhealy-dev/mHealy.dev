<script lang="ts">
	import { browser } from '$app/environment';
	import { profile } from '$lib/data/profile';

	let typedText = $state('');
	let scrollY = $state(0);
	let showScrollIndicator = $derived(scrollY < 80);

	$effect(() => {
		if (!browser) return;

		const typeSpeed = 90;
		const deleteSpeed = 45;
		const pauseTime = 2200;
		let timeoutId: ReturnType<typeof setTimeout>;
		// Local non-reactive state — lives inside the effect, never triggers re-runs
		let roleIndex = 0;
		let charIndex = 0;
		let deleting = false;

		function tick() {
			const currentText = profile.roles[roleIndex];
			if (!deleting) {
				charIndex++;
				typedText = currentText.substring(0, charIndex);
				if (charIndex === currentText.length) {
					timeoutId = setTimeout(() => { deleting = true; tick(); }, pauseTime);
					return;
				}
			} else {
				charIndex--;
				typedText = currentText.substring(0, charIndex);
				if (charIndex === 0) {
					deleting = false;
					roleIndex = (roleIndex + 1) % profile.roles.length;
				}
			}
			timeoutId = setTimeout(tick, deleting ? deleteSpeed : typeSpeed);
		}

		tick();

		const handleScroll = () => { scrollY = window.scrollY; };
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			clearTimeout(timeoutId);
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<section class="min-h-screen flex flex-col justify-center pt-16 relative">
	<div class="section-container w-full">
		<div class="max-w-3xl animate-fade-up">

			<!-- Name -->
			<h1 class="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6" style="letter-spacing: -0.03em; line-height: 1.0;">
				{profile.name}
			</h1>

			<!-- Typewriter role -->
			<div class="flex items-center gap-2 mb-8 h-10">
				<span class="text-xl sm:text-2xl font-mono text-ink-300">{typedText}</span>
				<span class="w-0.5 h-6 bg-accent-500 animate-pulse inline-block"></span>
			</div>

			<!-- Tagline -->
			<p class="text-lg sm:text-xl text-ink-300 max-w-xl leading-relaxed mb-12">
				{profile.tagline}
			</p>

			<!-- CTAs -->
			<div class="flex flex-wrap gap-3">
				<a href="#experience" class="btn btn-primary">View Experience</a>
				<a href="#contact" class="btn btn-outline">Get In Touch</a>
				<a href="/resume" class="btn btn-outline">Resume ↗</a>
			</div>
		</div>
	</div>

	<!-- Scroll indicator -->
	{#if showScrollIndicator}
		<div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-500 animate-fade-in" style="animation-delay: 1s">
			<span class="text-xs font-mono tracking-widest uppercase">Scroll</span>
			<svg class="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
			</svg>
		</div>
	{/if}
</section>
