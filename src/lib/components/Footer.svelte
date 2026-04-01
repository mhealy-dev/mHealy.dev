<script lang="ts">
	import { profile } from '$lib/data/profile';
	const currentYear = new Date().getFullYear();
</script>

<footer class="border-t py-10" style="border-color: #1a1a1a;">
	<div class="section-container">
		<div class="flex flex-col sm:flex-row justify-between items-center gap-4">
			<p class="text-xs text-ink-500 font-mono">
				© {currentYear} {profile.name}
			</p>
			<div class="flex items-center gap-6">
				<a
					href={profile.contact.githubUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="text-xs text-ink-400 hover:text-white transition-colors"
				>
					GitHub
				</a>
				<a
					href={profile.contact.linkedinUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="text-xs text-ink-400 hover:text-white transition-colors"
				>
					LinkedIn
				</a>
				<a href="/resume" class="text-xs text-ink-400 hover:text-white transition-colors">
					Resume
				</a>
			</div>
		</div>
	</div>
</footer>
