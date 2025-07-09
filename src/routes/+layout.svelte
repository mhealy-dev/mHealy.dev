<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	
	// Svelte 5 children prop
	let { children } = $props();

	// Track previous URL to detect navigation
	let previousUrl = $state('');

	// Watch for page changes and scroll to top
	$effect(() => {
		if (browser && $page.url.pathname !== previousUrl) {
			previousUrl = $page.url.pathname;
			// Use requestAnimationFrame to ensure DOM is ready
			requestAnimationFrame(() => {
				window.scrollTo({ top: 0, behavior: 'instant' });
			});
		}
	});
</script>

<div class="min-h-screen flex flex-col">
	<Navigation />
	
	<main class="flex-grow">
		{@render children()}
	</main>
	
	<Footer />
</div>

<style>
	:global(html) {
		scroll-padding-top: 80px;
	}
</style>