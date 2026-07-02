<script lang="ts">
	import { profile } from '$lib/data/profile';
	import { reveal } from '$lib/actions/reveal';

	let formData = $state({ name: '', email: '', message: '' });
	let isSubmitting = $state(false);
	let submitMessage = $state('');
	let copied = $state(false);

	function handleSubmit(e: Event) {
		e.preventDefault();
		isSubmitting = true;

		const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
		const body = encodeURIComponent(
			`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
		);
		window.location.href = `mailto:${profile.contact.email}?subject=${subject}&body=${body}`;

		submitMessage = 'Your email client should open with a pre-filled message.';
		isSubmitting = false;
		setTimeout(() => { submitMessage = ''; }, 6000);
	}

	async function copyEmail() {
		await navigator.clipboard.writeText(profile.contact.email);
		copied = true;
		setTimeout(() => { copied = false; }, 1500);
	}
</script>

<section id="contact" class="py-24">
	<div class="section-container">
		<div class="hairline mb-14"></div>

		<div class="grid md:grid-cols-[1fr_1fr] gap-x-16 gap-y-10 items-start">
			<!-- Left: big invitation -->
			<div class="reveal" use:reveal>
				<p class="eyebrow mb-4"><span class="index">05</span> Contact</p>
				<h2 class="font-display font-bold text-fg mb-6" style="font-size: clamp(2.5rem, 6vw, 4rem); letter-spacing: -0.02em; line-height: 1.0;">
					Let's build<br />something<span class="text-accent">.</span>
				</h2>
				<p class="text-muted text-base leading-relaxed mb-10 max-w-sm">
					Open to interesting problems, collaborations, and conversations about platform engineering.
				</p>

				<div class="space-y-3 font-mono text-xs">
					<button onclick={copyEmail} class="flex items-center gap-3 text-muted hover:text-fg transition-colors group">
						<span class="text-faint w-16 text-left">Email</span>
						<span class="link-line">{profile.contact.email}</span>
						<span class="text-accent transition-opacity duration-200" class:opacity-0={!copied}>copied ✓</span>
					</button>
					<a href={profile.contact.githubUrl} target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-muted hover:text-fg transition-colors">
						<span class="text-faint w-16">GitHub</span>
						<span>@{profile.contact.github} ↗</span>
					</a>
					<a href={profile.contact.linkedinUrl} target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-muted hover:text-fg transition-colors">
						<span class="text-faint w-16">LinkedIn</span>
						<span>michael-healy ↗</span>
					</a>
				</div>
			</div>

			<!-- Right: form -->
			<form onsubmit={handleSubmit} class="reveal space-y-5" use:reveal={{ delay: 120 }}>
				<div>
					<label for="name" class="block font-mono text-[10px] uppercase tracking-[0.2em] text-subtle mb-2">Name</label>
					<input
						type="text"
						id="name"
						bind:value={formData.name}
						required
						placeholder="Your name"
						class="field"
					/>
				</div>

				<div>
					<label for="email" class="block font-mono text-[10px] uppercase tracking-[0.2em] text-subtle mb-2">Email</label>
					<input
						type="email"
						id="email"
						bind:value={formData.email}
						required
						placeholder="your@email.com"
						class="field"
					/>
				</div>

				<div>
					<label for="message" class="block font-mono text-[10px] uppercase tracking-[0.2em] text-subtle mb-2">Message</label>
					<textarea
						id="message"
						bind:value={formData.message}
						required
						rows="5"
						placeholder="What would you like to talk about?"
						class="field resize-none"
					></textarea>
				</div>

				<button
					type="submit"
					disabled={isSubmitting}
					class="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
				>
					{isSubmitting ? 'Opening email client…' : 'Send Message'}
				</button>

				{#if submitMessage}
					<p class="text-sm text-muted text-center">{submitMessage}</p>
				{/if}
			</form>
		</div>
	</div>
</section>
