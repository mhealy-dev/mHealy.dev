<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { openPalette } from '$lib/stores/palette.svelte';
	import { theme, toggleTheme } from '$lib/stores/theme.svelte';

	let isScrolled = $state(false);
	let isMobileMenuOpen = $state(false);
	let activeSection = $state('');

	const navItems = [
		{ href: '/#about',      label: 'About',      section: 'about' },
		{ href: '/#experience', label: 'Experience', section: 'experience' },
		{ href: '/#skills',     label: 'Skills',     section: 'skills' },
		{ href: '/projects',    label: 'Projects',   section: '' },
		{ href: '/resume',      label: 'Resume',     section: '' },
		{ href: '/#contact',    label: 'Contact',    section: 'contact' },
	];

	function isActive(item: (typeof navItems)[0]): boolean {
		if (!item.section) return $page.url.pathname === item.href;
		return $page.url.pathname === '/' && activeSection === item.section;
	}

	function handleNavClick() {
		isMobileMenuOpen = false;
	}

	$effect(() => {
		if (!browser) return;

		const handleScroll = () => { isScrolled = window.scrollY > 40; };
		window.addEventListener('scroll', handleScroll, { passive: true });

		let observer: IntersectionObserver | null = null;
		if ($page.url.pathname === '/') {
			const ids = navItems.map((n) => n.section).filter(Boolean);
			const els = ids
				.map((id) => document.getElementById(id))
				.filter((el): el is HTMLElement => el !== null);

			observer = new IntersectionObserver(
				(entries) => {
					for (const entry of entries) {
						if (entry.isIntersecting) activeSection = entry.target.id;
					}
				},
				{ rootMargin: '-30% 0px -60% 0px', threshold: 0 }
			);
			els.forEach((el) => observer!.observe(el));
		}

		return () => {
			window.removeEventListener('scroll', handleScroll);
			observer?.disconnect();
		};
	});
</script>

<nav
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b"
	class:bg-bg={isScrolled || isMobileMenuOpen}
	class:bg-opacity-90={isScrolled && !isMobileMenuOpen}
	class:backdrop-blur-md={isScrolled}
	class:border-line={isScrolled || isMobileMenuOpen}
	class:border-transparent={!isScrolled && !isMobileMenuOpen}
>
	<div class="section-container">
		<div class="flex items-center justify-between h-16">
			<!-- Wordmark -->
			<a href="/" class="font-mono text-sm text-fg hover:text-accent transition-colors" onclick={handleNavClick}>
				mhealy<span class="text-accent">.</span>dev
			</a>

			<!-- Desktop nav -->
			<div class="hidden md:flex items-center gap-7">
				{#each navItems as item}
					<a
						href={item.href}
						onclick={handleNavClick}
						class="font-mono text-[11px] uppercase tracking-[0.15em] transition-colors duration-200 relative py-1"
						class:text-fg={isActive(item)}
						class:text-subtle={!isActive(item)}
					>
						{item.label}
						{#if isActive(item)}
							<span class="absolute -bottom-0.5 left-0 right-0 h-px bg-accent"></span>
						{/if}
					</a>
				{/each}

				<!-- ⌘K trigger -->
				<button
					onclick={openPalette}
					class="flex items-center gap-1.5 font-mono text-[11px] text-subtle hover:text-fg border border-line hover:border-line-strong px-2 py-1 transition-colors"
					aria-label="Open command palette"
				>
					<kbd>⌘</kbd><kbd>K</kbd>
				</button>

				<!-- Theme toggle -->
				<button
					onclick={toggleTheme}
					class="p-1.5 text-subtle hover:text-fg transition-colors"
					aria-label="Switch to {theme.current === 'dark' ? 'light' : 'dark'} theme"
				>
					{#if theme.current === 'dark'}
						<!-- sun -->
						<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
							<circle cx="12" cy="12" r="4" />
							<path stroke-linecap="round" d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4l1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
						</svg>
					{:else}
						<!-- moon -->
						<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z" />
						</svg>
					{/if}
				</button>
			</div>

			<!-- Mobile controls -->
			<div class="flex md:hidden items-center gap-2">
				<button
					onclick={toggleTheme}
					class="p-2 text-subtle hover:text-fg transition-colors"
					aria-label="Switch to {theme.current === 'dark' ? 'light' : 'dark'} theme"
				>
					{#if theme.current === 'dark'}
						<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
							<circle cx="12" cy="12" r="4" />
							<path stroke-linecap="round" d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4l1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
						</svg>
					{:else}
						<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z" />
						</svg>
					{/if}
				</button>
				<button
					onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
					class="p-2 text-subtle hover:text-fg transition-colors"
					aria-label="Toggle menu"
				>
					<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
						{#if isMobileMenuOpen}
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						{:else}
							<path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16" />
						{/if}
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if isMobileMenuOpen}
		<div class="md:hidden border-t border-line bg-bg">
			<div class="section-container py-4 flex flex-col">
				{#each navItems as item, i}
					<a
						href={item.href}
						onclick={handleNavClick}
						class="flex items-baseline gap-4 py-3 border-b border-line last:border-b-0 font-mono text-sm uppercase tracking-[0.15em] transition-colors"
						class:text-fg={isActive(item)}
						class:text-muted={!isActive(item)}
					>
						<span class="text-[10px] text-accent">0{i + 1}</span>
						{item.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>
