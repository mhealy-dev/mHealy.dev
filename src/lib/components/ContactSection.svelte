<script lang="ts">
	let formData = $state({
		name: '',
		email: '',
		message: ''
	});
	
	let isSubmitting = $state(false);
	let submitMessage = $state('');
	
	async function handleSubmit(e: Event) {
		e.preventDefault();
		isSubmitting = true;
		
		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});
			
			if (response.ok) {
				submitMessage = 'Message sent successfully!';
				formData = { name: '', email: '', message: '' };
			} else {
				submitMessage = 'Failed to send message. Please try again.';
			}
		} catch (error) {
			submitMessage = 'An error occurred. Please try again later.';
		} finally {
			isSubmitting = false;
			setTimeout(() => {
				submitMessage = '';
			}, 5000);
		}
	}
</script>

<section id="contact" class="py-20 relative">
	<div class="section-container max-w-2xl relative z-10">
		<h2 class="text-4xl font-bold text-center mb-4 gradient-text">Get In Touch</h2>
		<p class="text-center text-gray-400 mb-12">Let's create something amazing together</p>
		
		<form onsubmit={handleSubmit} class="space-y-6">
			<div>
				<label for="name" class="block text-sm font-medium mb-2 text-primary-300">Name</label>
				<input 
					type="text" 
					id="name" 
					bind:value={formData.name}
					required
					style="background-color: rgba(15, 23, 42, 0.5);"
					class="w-full px-4 py-3 rounded-lg border border-primary-500 border-opacity-20 text-gray-100 placeholder-gray-500 focus:border-primary-500 focus:border-opacity-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-20 transition-all duration-300"
					placeholder="Your Name">
			</div>
			
			<div>
				<label for="email" class="block text-sm font-medium mb-2 text-primary-300">Email</label>
				<input 
					type="email" 
					id="email" 
					bind:value={formData.email}
					required
					style="background-color: rgba(15, 23, 42, 0.5);"
					class="w-full px-4 py-3 rounded-lg border border-primary-500 border-opacity-20 text-gray-100 placeholder-gray-500 focus:border-primary-500 focus:border-opacity-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-20 transition-all duration-300"
					placeholder="your@email.com">
			</div>
			
			<div>
				<label for="message" class="block text-sm font-medium mb-2 text-primary-300">Message</label>
				<textarea 
					id="message" 
					bind:value={formData.message}
					required
					rows="5"
					style="background-color: rgba(15, 23, 42, 0.5);"
					class="w-full px-4 py-3 rounded-lg border border-primary-500 border-opacity-20 text-gray-100 placeholder-gray-500 focus:border-primary-500 focus:border-opacity-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-20 transition-all duration-300 resize-none"
					placeholder="Tell me about your project..."></textarea>
			</div>
			
			<button 
				type="submit" 
				disabled={isSubmitting}
				class="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed group">
				<span class="relative z-10">
					{isSubmitting ? 'Sending...' : 'Send Message'}
				</span>
			</button>
			
			{#if submitMessage}
				<div class="text-center p-4 rounded-lg border bg-opacity-10 border-opacity-30"
				     class:bg-green-500={submitMessage.includes('success')}
				     class:border-green-500={submitMessage.includes('success')}
				     class:text-green-400={submitMessage.includes('success')}
				     class:bg-red-500={!submitMessage.includes('success')}
				     class:border-red-500={!submitMessage.includes('success')}
				     class:text-red-400={!submitMessage.includes('success')}>
					{submitMessage}
				</div>
			{/if}
		</form>
	</div>
</section>