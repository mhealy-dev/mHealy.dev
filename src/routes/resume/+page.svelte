<script lang="ts">
	import { browser } from '$app/environment';
	import { profile } from '$lib/data/profile';
	import { experience, education, certifications } from '$lib/data/experience';
	import { skillGroups } from '$lib/data/skills';

	function handleDownloadPDF() {
		if (!browser) return;
		window.print();
	}
</script>

<svelte:head>
	<title>Resume — Michael Healy</title>
	<meta name="description" content="Resume of Michael Healy — Platform Engineer specializing in cloud infrastructure and DevOps" />
</svelte:head>

<div class="min-h-screen pt-16 pb-16">
	<div class="section-container max-w-3xl">

		<!-- Page header -->
		<div class="flex justify-between items-end pt-14 pb-8 border-b border-line no-print">
			<div>
				<p class="eyebrow mb-3"><span class="index">·</span> Document</p>
				<h1 class="font-display font-bold text-4xl text-fg" style="letter-spacing: -0.02em;">Resume</h1>
			</div>
			<button onclick={handleDownloadPDF} class="btn btn-primary">
				<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
				</svg>
				Download PDF
			</button>
		</div>

		<!-- Resume document -->
		<div class="resume-container py-10">

			<!-- Header -->
			<header class="mb-10">
				<h1 class="font-display font-bold text-4xl text-fg mb-1" style="letter-spacing: -0.02em;">{profile.name}</h1>
				<p class="text-lg text-muted mb-5">{profile.title}</p>
				<div class="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-subtle">
					<a href="mailto:{profile.contact.email}" class="hover:text-fg transition-colors">{profile.contact.email}</a>
					<span>{profile.contact.location}</span>
					<a href={profile.contact.githubUrl} target="_blank" rel="noopener noreferrer" class="hover:text-fg transition-colors">github.com/{profile.contact.github}</a>
					<a href={profile.contact.linkedinUrl} target="_blank" rel="noopener noreferrer" class="hover:text-fg transition-colors">{profile.contact.linkedin}</a>
				</div>
			</header>

			<!-- Summary -->
			<section class="mb-10">
				<h2 class="font-mono text-[10px] uppercase tracking-[0.25em] text-subtle mb-4 pb-2 border-b border-line">
					Summary
				</h2>
				<p class="text-muted leading-relaxed text-sm">{profile.summary}</p>
			</section>

			<!-- Experience -->
			<section class="mb-10">
				<h2 class="font-mono text-[10px] uppercase tracking-[0.25em] text-subtle mb-4 pb-2 border-b border-line">
					Experience
				</h2>
				<div class="space-y-6">
					{#each experience as job}
						<div>
							<div class="flex justify-between items-start mb-1 gap-4">
								<div>
									<h3 class="font-semibold text-fg text-sm">{job.title}</h3>
									<p class="text-subtle text-xs">{job.company} · {job.location}</p>
								</div>
								<div class="flex items-center gap-2 flex-shrink-0">
									{#if job.current}
										<span class="tag !text-accent !border-accent/40">Current</span>
									{/if}
									<span class="font-mono text-[11px] text-subtle whitespace-nowrap">{job.period}</span>
								</div>
							</div>
							<ul class="mt-2 space-y-1">
								{#each job.highlights as highlight}
									<li class="text-xs text-muted flex items-start gap-2">
										<span class="text-accent flex-shrink-0 mt-0.5">—</span>
										<span>{highlight}</span>
									</li>
								{/each}
							</ul>
						</div>
					{/each}
				</div>
			</section>

			<!-- Skills -->
			<section class="mb-10">
				<h2 class="font-mono text-[10px] uppercase tracking-[0.25em] text-subtle mb-4 pb-2 border-b border-line">
					Technical Skills
				</h2>
				<div class="grid sm:grid-cols-2 gap-4">
					{#each Object.entries(skillGroups) as [category, skills]}
						<div>
							<h3 class="font-mono text-[10px] uppercase tracking-[0.15em] text-subtle mb-2">{category}</h3>
							<div class="flex flex-wrap gap-1.5">
								{#each skills as skill}
									<span class="tag">{skill}</span>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</section>

			<!-- Education & Certifications -->
			<section>
				<h2 class="font-mono text-[10px] uppercase tracking-[0.25em] text-subtle mb-4 pb-2 border-b border-line">
					Education & Certifications
				</h2>
				<div class="space-y-3">
					{#each education as edu}
						<div>
							<h3 class="font-semibold text-fg text-sm">{edu.degree}</h3>
							<p class="text-subtle text-xs">{edu.school}</p>
							{#if edu.focus}<p class="text-faint text-xs">Focus: {edu.focus}</p>{/if}
						</div>
					{/each}
					{#each certifications as cert}
						<div>
							<h3 class="font-semibold text-fg text-sm">{cert.name}</h3>
							<p class="text-subtle text-xs">{cert.issuer}</p>
							{#if cert.description}<p class="text-faint text-xs">{cert.description}</p>{/if}
						</div>
					{/each}
				</div>
			</section>
		</div>
	</div>
</div>

<style>
	@media print {
		@page { margin: 0.75in; size: letter; }

		:global(nav), :global(footer), :global(.no-print) { display: none !important; }
		:global(.min-h-screen) { min-height: unset !important; padding: 0 !important; }
		:global(.section-container) { max-width: 100% !important; padding: 0 !important; }

		:global(.resume-container) { padding: 0 !important; }
		:global(.resume-container a) { text-decoration: none !important; }

		:global(.resume-container h1) { font-size: 22pt !important; }
		:global(.resume-container h2) { font-size: 8pt !important; }
		:global(.resume-container h3) { font-size: 10pt !important; }
		:global(.resume-container p),
		:global(.resume-container li),
		:global(.resume-container span) { font-size: 9pt !important; }

		:global(.resume-container .tag) {
			border: 1px solid #ccc !important;
			background: transparent !important;
			font-size: 8pt !important;
			padding: 1px 5px !important;
		}

		:global(.resume-container header) { margin-bottom: 8pt !important; }
		:global(.resume-container section) { margin-bottom: 8pt !important; }
		:global(.resume-container p) { margin: 0 !important; line-height: 1.4 !important; }
		:global(.resume-container header p) { margin-bottom: 4pt !important; }
	}
</style>
