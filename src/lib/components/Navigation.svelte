<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	
	let isScrolled = false;
	let isMobileMenuOpen = false;
	
	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/resume', label: 'Resume' },
		{ href: '/contact', label: 'Contact' }
	];
	
	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 20;
		};
		
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" 
     class:backdrop-blur-lg={isScrolled}
     class:border-b={isScrolled}
     class:border-primary-500={isScrolled}
     style:background-color={isScrolled ? 'rgba(2, 6, 23, 0.9)' : 'transparent'}>
	<div class="section-container">
		<div class="flex items-center justify-between h-20">
			<a href="/" class="text-2xl font-bold gradient-text neon-glow-sm">
				mHealy
			</a>
			
			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center space-x-8">
				{#each navItems as item}
					<a href={item.href} 
					   class="text-gray-300 hover:text-primary-300 transition-all duration-300 font-medium relative group"
					   class:text-primary-300={$page.url.pathname === item.href}
					   class:neon-glow-sm={$page.url.pathname === item.href}>
						{item.label}
						<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 transition-all duration-300 group-hover:w-full"
						      class:w-full={$page.url.pathname === item.href}></span>
					</a>
				{/each}
			</div>
			
			<!-- Mobile Menu Button -->
			<button 
				on:click={() => isMobileMenuOpen = !isMobileMenuOpen}
				class="md:hidden p-2 rounded-lg border border-primary-500 border-opacity-20 hover:border-primary-500 hover:border-opacity-40 hover:bg-primary-500 hover:bg-opacity-10 transition-all duration-300">
				<svg class="w-6 h-6 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					{#if isMobileMenuOpen}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					{:else}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					{/if}
				</svg>
			</button>
		</div>
		
		<!-- Mobile Menu -->
		{#if isMobileMenuOpen}
			<div class="md:hidden absolute top-full left-0 right-0 backdrop-blur-lg border-b border-primary-500"
			     style:background-color="rgba(2, 6, 23, 0.95)">
				<div class="px-4 py-6 space-y-4">
					{#each navItems as item}
						<a href={item.href} 
						   on:click={() => isMobileMenuOpen = false}
						   class="block text-lg font-medium text-gray-300 hover:text-primary-300 transition-colors"
						   class:text-primary-300={$page.url.pathname === item.href}
						   class:neon-glow-sm={$page.url.pathname === item.href}>
							{item.label}
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</nav>