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
		<div class="flex justify-between items-center py-10 border-b no-print" style="border-color: #1a1a1a;">
			<div>
				<p class="section-label mb-1">Document</p>
				<h1 class="text-2xl font-bold text-white" style="letter-spacing: -0.02em;">Resume</h1>
			</div>
			<button
				onclick={handleDownloadPDF}
				class="btn btn-primary"
			>
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
				</svg>
				Download PDF
			</button>
		</div>

		<!-- Resume document -->
		<div class="resume-container py-10">

			<!-- Header -->
			<header class="mb-10">
				<h1 class="text-4xl font-bold text-white mb-1" style="letter-spacing: -0.03em;">{profile.name}</h1>
				<p class="text-lg text-ink-300 mb-5">{profile.title}</p>
				<div class="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-400">
					<a href="mailto:{profile.contact.email}" class="hover:text-white transition-colors">{profile.contact.email}</a>
					<span>{profile.contact.location}</span>
					<a href={profile.contact.githubUrl} target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">github.com/{profile.contact.github}</a>
					<a href={profile.contact.linkedinUrl} target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">{profile.contact.linkedin}</a>
				</div>
			</header>

			<!-- Summary -->
			<section class="mb-10">
				<h2 class="text-xs font-semibold text-ink-500 uppercase tracking-widest font-mono mb-4 pb-2 border-b" style="border-color: #1e1e1e;">
					Summary
				</h2>
				<p class="text-ink-200 leading-relaxed text-sm">{profile.summary}</p>
			</section>

			<!-- Experience -->
			<section class="mb-10">
				<h2 class="text-xs font-semibold text-ink-500 uppercase tracking-widest font-mono mb-4 pb-2 border-b" style="border-color: #1e1e1e;">
					Experience
				</h2>
				<div class="space-y-6">
					{#each experience as job}
						<div>
							<div class="flex justify-between items-start mb-1 gap-4">
								<div>
									<h3 class="font-semibold text-white text-sm">{job.title}</h3>
									<p class="text-ink-400 text-xs">{job.company} · {job.location}</p>
								</div>
								<div class="flex items-center gap-2 flex-shrink-0">
									{#if job.current}
										<span class="text-xs px-2 py-0.5 rounded border font-mono" style="color: #4ade80; border-color: rgba(74,222,128,0.2); background-color: rgba(74,222,128,0.05);">Current</span>
									{/if}
									<span class="text-xs text-ink-500 font-mono whitespace-nowrap">{job.period}</span>
								</div>
							</div>
							<ul class="mt-2 space-y-1">
								{#each job.highlights as highlight}
									<li class="text-xs text-ink-300 flex items-start gap-2">
										<span class="text-accent-600 flex-shrink-0 mt-0.5">—</span>
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
				<h2 class="text-xs font-semibold text-ink-500 uppercase tracking-widest font-mono mb-4 pb-2 border-b" style="border-color: #1e1e1e;">
					Technical Skills
				</h2>
				<div class="grid sm:grid-cols-2 gap-4">
					{#each Object.entries(skillGroups) as [category, skills]}
						<div>
							<h3 class="text-xs font-semibold text-ink-400 uppercase tracking-wider font-mono mb-2">{category}</h3>
							<div class="flex flex-wrap gap-1.5">
								{#each skills as skill}
									<span class="tag text-xs">{skill}</span>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</section>

			<!-- Education & Certifications -->
			<section>
				<h2 class="text-xs font-semibold text-ink-500 uppercase tracking-widest font-mono mb-4 pb-2 border-b" style="border-color: #1e1e1e;">
					Education & Certifications
				</h2>
				<div class="space-y-3">
					{#each education as edu}
						<div>
							<h3 class="font-semibold text-white text-sm">{edu.degree}</h3>
							<p class="text-ink-400 text-xs">{edu.school}</p>
							{#if edu.focus}<p class="text-ink-500 text-xs">Focus: {edu.focus}</p>{/if}
						</div>
					{/each}
					{#each certifications as cert}
						<div>
							<h3 class="font-semibold text-white text-sm">{cert.name}</h3>
							<p class="text-ink-400 text-xs">{cert.issuer}</p>
							{#if cert.description}<p class="text-ink-500 text-xs">{cert.description}</p>{/if}
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

		:global(body) { background: white !important; color: #111 !important; }
		:global(nav), :global(.no-print) { display: none !important; }
		:global(.min-h-screen) { min-height: unset !important; padding: 0 !important; }
		:global(.section-container) { max-width: 100% !important; padding: 0 !important; }

		:global(.resume-container) { padding: 0 !important; }
		:global(.resume-container *) { color: #111 !important; }
		:global(.resume-container a) { text-decoration: none !important; }
		:global(.resume-container [class*="text-ink-"]) { color: #444 !important; }
		:global(.resume-container [style*="border-color"]) { border-color: #ddd !important; }

		:global(.resume-container h1) { font-size: 22pt !important; }
		:global(.resume-container h2) { font-size: 8pt !important; color: #555 !important; }
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
