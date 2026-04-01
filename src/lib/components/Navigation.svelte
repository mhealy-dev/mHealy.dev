<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	let isScrolled = $state(false);
	let isMobileMenuOpen = $state(false);
	let activeSection = $state('');

	const navItems = [
		{ href: '/#about',      label: 'About',      section: 'about' },
		{ href: '/#experience', label: 'Experience',  section: 'experience' },
		{ href: '/#skills',     label: 'Skills',      section: 'skills' },
		{ href: '/projects',    label: 'Projects',    section: '' },
		{ href: '/resume',      label: 'Resume',      section: '' },
		{ href: '/#contact',    label: 'Contact',     section: 'contact' },
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
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
	style:background-color={isScrolled ? 'rgba(10, 10, 10, 0.92)' : 'transparent'}
	style:border-bottom={isScrolled ? '1px solid #1a1a1a' : '1px solid transparent'}
	style:backdrop-filter={isScrolled ? 'blur(12px)' : 'none'}
>
	<div class="section-container">
		<div class="flex items-center justify-between h-16">
			<!-- Wordmark -->
			<a href="/" class="text-white font-semibold text-base tracking-tight hover:text-ink-100 transition-colors">
				Michael Healy
			</a>

			<!-- Desktop nav -->
			<div class="hidden md:flex items-center gap-8">
				{#each navItems as item}
					<a
						href={item.href}
						onclick={handleNavClick}
						class="text-sm transition-colors duration-200 relative"
						class:text-white={isActive(item)}
						class:font-medium={isActive(item)}
						class:text-ink-300={!isActive(item)}
						style="hover:color: #e8e8e8"
					>
						{item.label}
						{#if isActive(item)}
							<span class="absolute -bottom-1 left-0 right-0 h-px bg-accent-500 rounded-full"></span>
						{/if}
					</a>
				{/each}
			</div>

			<!-- Mobile toggle -->
			<button
				onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
				class="md:hidden p-2 text-ink-300 hover:text-white transition-colors"
				aria-label="Toggle menu"
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					{#if isMobileMenuOpen}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					{:else}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					{/if}
				</svg>
			</button>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if isMobileMenuOpen}
		<div class="md:hidden border-t" style:border-color="#1a1a1a" style:background-color="rgba(10,10,10,0.97)">
			<div class="section-container py-4 flex flex-col gap-1">
				{#each navItems as item}
					<a
						href={item.href}
						onclick={handleNavClick}
						class="py-2.5 px-3 rounded-md text-sm transition-colors"
						class:text-white={isActive(item)}
						class:bg-ink-800={isActive(item)}
						class:font-medium={isActive(item)}
						class:text-ink-300={!isActive(item)}
					>
						{item.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>
