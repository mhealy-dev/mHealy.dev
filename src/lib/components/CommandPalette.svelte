<script lang="ts">
	import { tick } from 'svelte';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { profile } from '$lib/data/profile';
	import { palette, closePalette, togglePalette } from '$lib/stores/palette.svelte';
	import { toggleTheme, theme } from '$lib/stores/theme.svelte';

	interface Command {
		id: string;
		group: string;
		label: string;
		hint?: string;
		keywords: string;
		run: () => void | Promise<void>;
	}

	let query = $state('');
	let activeIndex = $state(0);
	let copied = $state(false);
	let inputEl = $state<HTMLInputElement | null>(null);
	let listEl = $state<HTMLElement | null>(null);

	// goto() alone can't handle same-page hash targets, and the palette's
	// scroll lock must be released before any scrolling — see execute().
	async function navigate(path: string) {
		const [route, hash] = path.split('#');
		const target = route || '/';
		if (window.location.pathname !== target) {
			await goto(target);
		}
		if (hash) {
			requestAnimationFrame(() => {
				document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
			});
		} else {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}

	const commands: Command[] = [
		{ id: 'home',       group: 'Navigate', label: 'Home',            hint: '/',          keywords: 'home start top index', run: () => navigate('/') },
		{ id: 'about',      group: 'Navigate', label: 'About',           hint: '/#about',    keywords: 'about bio who', run: () => navigate('/#about') },
		{ id: 'experience', group: 'Navigate', label: 'Experience',      hint: '/#experience', keywords: 'experience work history jobs career', run: () => navigate('/#experience') },
		{ id: 'skills',     group: 'Navigate', label: 'Skills',          hint: '/#skills',   keywords: 'skills stack technologies tools', run: () => navigate('/#skills') },
		{ id: 'projects',   group: 'Navigate', label: 'Projects',        hint: '/projects',  keywords: 'projects work portfolio', run: () => navigate('/projects') },
		{ id: 'resume',     group: 'Navigate', label: 'Resume',          hint: '/resume',    keywords: 'resume cv pdf document', run: () => navigate('/resume') },
		{ id: 'contact',    group: 'Navigate', label: 'Contact',         hint: '/#contact',  keywords: 'contact email message reach', run: () => navigate('/#contact') },
		{
			id: 'copy-email', group: 'Actions', label: 'Copy email address', hint: profile.contact.email,
			keywords: 'copy email address clipboard mail',
			run: async () => {
				await navigator.clipboard.writeText(profile.contact.email);
				copied = true;
				setTimeout(() => { copied = false; closePalette(); }, 900);
			}
		},
		{
			id: 'email', group: 'Actions', label: 'Send an email', hint: 'mailto',
			keywords: 'email send message mailto write',
			run: () => { window.location.href = `mailto:${profile.contact.email}`; }
		},
		{
			id: 'theme', group: 'Actions', label: 'Toggle theme', hint: 'dark / light',
			keywords: 'theme dark light mode toggle appearance color',
			run: () => toggleTheme()
		},
		{
			id: 'github', group: 'Elsewhere', label: 'GitHub', hint: `@${profile.contact.github}`,
			keywords: 'github code repos source',
			run: () => window.open(profile.contact.githubUrl, '_blank', 'noopener')
		},
		{
			id: 'linkedin', group: 'Elsewhere', label: 'LinkedIn', hint: 'profile',
			keywords: 'linkedin professional network',
			run: () => window.open(profile.contact.linkedinUrl, '_blank', 'noopener')
		}
	];

	let filtered = $derived(
		query.trim() === ''
			? commands
			: commands.filter((c) =>
					(c.label + ' ' + c.keywords).toLowerCase().includes(query.trim().toLowerCase())
				)
	);

	let groups = $derived(
		filtered.reduce<{ name: string; items: Command[] }[]>((acc, cmd) => {
			const g = acc.find((x) => x.name === cmd.group);
			if (g) g.items.push(cmd);
			else acc.push({ name: cmd.group, items: [cmd] });
			return acc;
		}, [])
	);

	async function execute(cmd: Command) {
		// copy-email closes itself after showing feedback
		if (cmd.id === 'copy-email') {
			await cmd.run();
			return;
		}
		// Close first and flush effects so the body scroll lock is
		// released before the command tries to navigate or scroll.
		closePalette();
		await tick();
		await cmd.run();
	}

	function onKeydown(e: KeyboardEvent) {
		if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
			e.preventDefault();
			togglePalette();
			return;
		}
		if (!palette.open) return;

		if (e.key === 'Escape') {
			e.preventDefault();
			closePalette();
		} else if (e.key === 'ArrowDown') {
			e.preventDefault();
			activeIndex = (activeIndex + 1) % filtered.length;
			scrollActiveIntoView();
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			activeIndex = (activeIndex - 1 + filtered.length) % filtered.length;
			scrollActiveIntoView();
		} else if (e.key === 'Enter') {
			e.preventDefault();
			const cmd = filtered[activeIndex];
			if (cmd) execute(cmd);
		}
	}

	function scrollActiveIntoView() {
		requestAnimationFrame(() => {
			listEl?.querySelector('[data-active="true"]')?.scrollIntoView({ block: 'nearest' });
		});
	}

	// Reset + focus when opened; clamp selection when the list refilters
	$effect(() => {
		if (palette.open) {
			query = '';
			activeIndex = 0;
			copied = false;
			requestAnimationFrame(() => inputEl?.focus());
		}
	});

	$effect(() => {
		if (activeIndex >= filtered.length) activeIndex = 0;
	});

	// Lock body scroll while open
	$effect(() => {
		if (!browser) return;
		document.body.style.overflow = palette.open ? 'hidden' : '';
		return () => { document.body.style.overflow = ''; };
	});
</script>

<svelte:window onkeydown={onKeydown} />

{#if palette.open}
	<div
		class="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[16vh]"
		role="dialog"
		aria-modal="true"
		aria-label="Command palette"
	>
		<!-- Backdrop -->
		<button
			class="absolute inset-0 bg-bg/70 backdrop-blur-sm animate-fade-in cursor-default"
			style="animation-duration: 0.15s"
			onclick={closePalette}
			aria-label="Close command palette"
			tabindex="-1"
		></button>

		<!-- Panel -->
		<div
			class="relative w-full max-w-lg bg-surface border border-line shadow-2xl animate-fade-up"
			style="animation-duration: 0.2s"
		>
			<!-- Input -->
			<div class="flex items-center gap-3 px-4 border-b border-line">
				<span class="font-mono text-accent text-sm select-none" aria-hidden="true">&gt;</span>
				<input
					bind:this={inputEl}
					bind:value={query}
					type="text"
					placeholder="Type a command or search…"
					class="w-full py-3.5 bg-transparent font-mono text-sm text-fg placeholder:text-faint focus:outline-none"
					spellcheck="false"
					autocomplete="off"
				/>
				<kbd class="font-mono text-[10px] text-subtle border border-line px-1.5 py-0.5 select-none">esc</kbd>
			</div>

			<!-- Results -->
			<div bind:this={listEl} class="max-h-[46vh] overflow-y-auto py-2">
				{#if filtered.length === 0}
					<p class="px-4 py-8 text-center font-mono text-xs text-subtle">No matching commands.</p>
				{:else}
					{#each groups as group}
						<p class="px-4 pt-3 pb-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-subtle select-none">
							{group.name}
						</p>
						{#each group.items as cmd}
							{@const idx = filtered.indexOf(cmd)}
							<button
								class="w-full flex items-center justify-between gap-4 px-4 py-2.5 text-left transition-colors duration-100"
								class:bg-raised={idx === activeIndex}
								data-active={idx === activeIndex}
								onclick={() => execute(cmd)}
								onmouseenter={() => (activeIndex = idx)}
							>
								<span class="text-sm" class:text-fg={idx === activeIndex} class:text-muted={idx !== activeIndex}>
									{#if cmd.id === 'copy-email' && copied}
										<span class="text-accent">Copied ✓</span>
									{:else}
										{cmd.label}
									{/if}
								</span>
								{#if cmd.hint}
									<span class="font-mono text-[11px] text-subtle truncate">{cmd.hint}</span>
								{/if}
							</button>
						{/each}
					{/each}
				{/if}
			</div>

			<!-- Footer -->
			<div class="flex items-center gap-4 px-4 py-2.5 border-t border-line font-mono text-[10px] text-subtle select-none">
				<span><kbd class="border border-line px-1 py-0.5">↑↓</kbd> navigate</span>
				<span><kbd class="border border-line px-1 py-0.5">↵</kbd> select</span>
				<span class="ml-auto">{theme.current} mode</span>
			</div>
		</div>
	</div>
{/if}
