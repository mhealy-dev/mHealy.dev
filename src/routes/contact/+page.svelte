<script lang="ts">
	import { enhance } from '$app/forms';
	import { browser } from '$app/environment';
	
	let isSubmitting = $state(false);
	let submitMessage = $state('');
	let messageType = $state<'success' | 'error' | ''>('');
	
	let formData = $state({
		name: '',
		email: '',
		company: '',
		subject: '',
		message: '',
		budget: '',
		timeline: ''
	});
	
	const subjects = [
		'Platform Engineering Consultation',
		'Infrastructure Architecture',
		'DevOps Implementation',
		'Full Stack Development',
		'Technical Leadership',
		'Other'
	];
	
	const budgets = [
		'Under $10k',
		'$10k - $25k',
		'$25k - $50k',
		'$50k - $100k',
		'$100k+',
		'Flexible'
	];
	
	const timelines = [
		'ASAP',
		'Within 1 month',
		'1-3 months',
		'3-6 months',
		'6+ months',
		'Flexible'
	];
	
	async function handleSubmit(event: Event) {
		event.preventDefault();
		isSubmitting = true;
		messageType = '';
		submitMessage = '';
		
		try {
			// For GitHub Pages deployment, redirect to mailto with form data
			const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
			const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not specified'}
Subject: ${formData.subject}
Budget: ${formData.budget || 'Not specified'}
Timeline: ${formData.timeline || 'Not specified'}

Message:
${formData.message}
			`);
			
			const mailtoUrl = `mailto:mhealy.dev@gmail.com?subject=${subject}&body=${body}`;
			
			// Open default email client
			window.location.href = mailtoUrl;
			
			messageType = 'success';
			submitMessage = 'Your email client should open with a pre-filled message. Please send the email to complete your contact request.';
			
			// Reset form after a delay
			setTimeout(() => {
				formData = {
					name: '',
					email: '',
					company: '',
					subject: '',
					message: '',
					budget: '',
					timeline: ''
				};
			}, 2000);
			
		} catch (error) {
			messageType = 'error';
			submitMessage = 'An error occurred. Please contact me directly via email at mhealy.dev@gmail.com';
		} finally {
			isSubmitting = false;
			// Clear message after 8 seconds
			setTimeout(() => {
				submitMessage = '';
				messageType = '';
			}, 8000);
		}
	}
	
	// Contact methods data
	const contactMethods = [
		{
			icon: 'email',
			title: 'Email',
			subtitle: 'mhealy.dev@gmail.com',
			description: 'Best for detailed project discussions',
			action: 'mailto:mhealy.dev@gmail.com',
			actionText: 'Send Email'
		},
		{
			icon: 'linkedin',
			title: 'LinkedIn',
			subtitle: 'Michael Healy',
			description: 'Professional networking and updates',
			action: 'https://linkedin.com/in/michael-healy-5aabaa161',
			actionText: 'Connect'
		},
		{
			icon: 'github',
			title: 'GitHub',
			subtitle: '@mhealy-dev',
			description: 'View my code and contributions',
			action: 'https://github.com/mhealy-dev',
			actionText: 'Follow'
		}
	];
	
	// FAQ data
	const faqs = [
		{
			question: 'What type of projects do you work on?',
			answer: 'I specialize in platform engineering, cloud infrastructure, DevOps automation, and full-stack development. This includes AWS architecture, Terraform/Terragrunt implementations, CI/CD pipelines, microservices, and monitoring solutions.'
		},
		{
			question: 'What\'s your typical project timeline?',
			answer: 'Project timelines vary based on scope and complexity. Small automation projects can be completed in 1-2 weeks, while comprehensive infrastructure overhauls may take 2-6 months. I always provide detailed timelines during initial consultations.'
		},
		{
			question: 'Do you work with remote teams?',
			answer: 'Absolutely! I have extensive experience working with distributed teams and am comfortable with remote collaboration tools. I\'m based in San Clemente, CA, but work with clients globally.'
		},
		{
			question: 'What\'s your approach to project management?',
			answer: 'I follow agile methodologies with regular check-ins, clear documentation, and transparent communication. I believe in iterative delivery and ensuring stakeholders are informed throughout the process.'
		},
		{
			question: 'Do you provide ongoing support?',
			answer: 'Yes, I offer various support packages including maintenance, monitoring, and on-call support for critical infrastructure. We can discuss ongoing support needs during our initial consultation.'
		}
	];
	
	let expandedFAQ = $state<number | null>(null);
	
	function toggleFAQ(index: number) {
		expandedFAQ = expandedFAQ === index ? null : index;
	}
</script>

<svelte:head>
	<title>Contact - Michael Healy</title>
	<meta name="description" content="Get in touch with Michael Healy for platform engineering, DevOps, and infrastructure consulting services" />
</svelte:head>

<div class="min-h-screen pt-20 pb-12">
	<div class="section-container">
		<!-- Header -->
		<section class="text-center mb-16">
			<h1 class="text-4xl md:text-5xl font-bold mb-6 gradient-text">Get In Touch</h1>
			<p class="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
				Ready to discuss your next project? I'd love to hear about your infrastructure challenges 
				and explore how we can build scalable solutions together.
			</p>
		</section>
		
		<!-- Contact Methods -->
		<section class="mb-16">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				{#each contactMethods as method, i}
					<div class="card p-6 text-center group hover:transform hover:scale-105 transition-all duration-300"
					     style="animation: fadeIn 0.5s ease-out {i * 0.1}s both">
						<div class="w-12 h-12 mx-auto mb-4 rounded-full bg-primary-500 bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition-all">
							{#if method.icon === 'email'}
								<svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
							{:else if method.icon === 'linkedin'}
								<svg class="w-6 h-6 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
								</svg>
							{:else if method.icon === 'github'}
								<svg class="w-6 h-6 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
								</svg>
							{/if}
						</div>
						<h3 class="text-lg font-semibold text-primary-200 mb-1">{method.title}</h3>
						<p class="text-sm text-secondary-300 mb-2">{method.subtitle}</p>
						<p class="text-xs text-gray-400 mb-4">{method.description}</p>
						<a href={method.action} 
						   target={method.action.startsWith('http') ? '_blank' : '_self'}
						   class="btn btn-outline text-xs">
							{method.actionText}
						</a>
					</div>
				{/each}
			</div>
		</section>
		
		<!-- Contact Form -->
		<section class="mb-16">
			<div class="max-w-4xl mx-auto">
				<div class="grid lg:grid-cols-2 gap-12">
					<!-- Form -->
					<div class="card p-8">
						<h2 class="text-2xl font-bold text-primary-100 mb-6">Send a Message</h2>
						
						<form onsubmit={handleSubmit} class="space-y-6">
							<!-- Name & Email Row -->
							<div class="grid md:grid-cols-2 gap-4">
								<div>
									<label for="name" class="block text-sm font-medium mb-2 text-primary-300">Name *</label>
									<input 
										type="text" 
										id="name" 
										bind:value={formData.name}
										required
										class="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-20 transition-all text-gray-100 placeholder-gray-500"
										placeholder="Your Name">
								</div>
								<div>
									<label for="email" class="block text-sm font-medium mb-2 text-primary-300">Email *</label>
									<input 
										type="email" 
										id="email" 
										bind:value={formData.email}
										required
										class="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-20 transition-all text-gray-100 placeholder-gray-500"
										placeholder="your@email.com">
								</div>
							</div>
							
							<!-- Company & Subject Row -->
							<div class="grid md:grid-cols-2 gap-4">
								<div>
									<label for="company" class="block text-sm font-medium mb-2 text-primary-300">Company</label>
									<input 
										type="text" 
										id="company" 
										bind:value={formData.company}
										class="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-20 transition-all text-gray-100 placeholder-gray-500"
										placeholder="Your Company">
								</div>
								<div>
									<label for="subject" class="block text-sm font-medium mb-2 text-primary-300">Subject *</label>
									<select 
										id="subject" 
										bind:value={formData.subject}
										required
										class="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-20 transition-all text-gray-100">
										<option value="">Select a subject</option>
										{#each subjects as subject}
											<option value={subject}>{subject}</option>
										{/each}
									</select>
								</div>
							</div>
							
							<!-- Budget & Timeline Row -->
							<div class="grid md:grid-cols-2 gap-4">
								<div>
									<label for="budget" class="block text-sm font-medium mb-2 text-primary-300">Budget Range</label>
									<select 
										id="budget" 
										bind:value={formData.budget}
										class="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-20 transition-all text-gray-100">
										<option value="">Select budget range</option>
										{#each budgets as budget}
											<option value={budget}>{budget}</option>
										{/each}
									</select>
								</div>
								<div>
									<label for="timeline" class="block text-sm font-medium mb-2 text-primary-300">Timeline</label>
									<select 
										id="timeline" 
										bind:value={formData.timeline}
										class="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-20 transition-all text-gray-100">
										<option value="">Select timeline</option>
										{#each timelines as timeline}
											<option value={timeline}>{timeline}</option>
										{/each}
									</select>
								</div>
							</div>
							
							<!-- Message -->
							<div>
								<label for="message" class="block text-sm font-medium mb-2 text-primary-300">Message *</label>
								<textarea 
									id="message" 
									bind:value={formData.message}
									required
									rows="6"
									class="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-20 transition-all text-gray-100 placeholder-gray-500 resize-none"
									placeholder="Tell me about your project, challenges, or questions..."></textarea>
							</div>
							
							<!-- Submit Button -->
							<button 
								type="submit" 
								disabled={isSubmitting}
								class="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed group">
								{#if isSubmitting}
									<svg class="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
										<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
										<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
									</svg>
									Sending...
								{:else}
									<span class="relative z-10">Send Message</span>
									<div class="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
								{/if}
							</button>
							
							<!-- Status Message -->
							{#if submitMessage}
								<div class="text-center p-4 rounded-lg border {messageType === 'success' 
									? 'bg-green-500 bg-opacity-10 border-green-500 border-opacity-30 text-green-400' 
									: 'bg-red-500 bg-opacity-10 border-red-500 border-opacity-30 text-red-400'}">
									{submitMessage}
								</div>
							{/if}
						</form>
					</div>
					
					<!-- Info Sidebar -->
					<div class="space-y-8">
						<!-- Response Time -->
						<div class="card p-6">
							<h3 class="text-xl font-semibold text-primary-200 mb-4">Response Time</h3>
							<div class="space-y-3">
								<div class="flex items-center">
									<div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
									<span class="text-sm text-gray-300">Usually within 24 hours</span>
								</div>
								<div class="flex items-center">
									<div class="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
									<span class="text-sm text-gray-300">Complex projects: 2-3 days for detailed proposal</span>
								</div>
							</div>
						</div>
						
						<!-- What to Expect -->
						<div class="card p-6">
							<h3 class="text-xl font-semibold text-primary-200 mb-4">What to Expect</h3>
							<ul class="space-y-3">
								<li class="flex items-start">
									<svg class="w-5 h-5 text-accent-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
									</svg>
									<span class="text-sm text-gray-300">Initial consultation call</span>
								</li>
								<li class="flex items-start">
									<svg class="w-5 h-5 text-accent-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
									</svg>
									<span class="text-sm text-gray-300">Detailed project proposal</span>
								</li>
								<li class="flex items-start">
									<svg class="w-5 h-5 text-accent-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
									</svg>
									<span class="text-sm text-gray-300">Timeline and milestone planning</span>
								</li>
								<li class="flex items-start">
									<svg class="w-5 h-5 text-accent-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
									</svg>
									<span class="text-sm text-gray-300">Regular progress updates</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		<!-- FAQ Section -->
		<section class="mb-16">
			<div class="max-w-4xl mx-auto">
				<h2 class="text-3xl font-bold text-center mb-12 gradient-text">Frequently Asked Questions</h2>
				<div class="space-y-4">
					{#each faqs as faq, i}
						<div class="card p-0 overflow-hidden">
							<button 
								onclick={() => toggleFAQ(i)}
								class="w-full p-6 text-left flex justify-between items-center hover:bg-gray-800 hover:bg-opacity-30 transition-all">
								<h3 class="text-lg font-semibold text-primary-200">{faq.question}</h3>
								<svg class="w-5 h-5 text-gray-400 transform transition-transform {expandedFAQ === i ? 'rotate-180' : ''}" 
								     fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
								</svg>
							</button>
							{#if expandedFAQ === i}
								<div class="px-6 pb-6">
									<p class="text-gray-400 leading-relaxed">{faq.answer}</p>
								</div>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		</section>
	</div>
</div>

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>