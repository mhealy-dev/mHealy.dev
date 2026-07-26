<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import AboutSection from '$lib/components/AboutSection.svelte';
	import ExperienceSection from '$lib/components/ExperienceSection.svelte';
	import SkillsSection from '$lib/components/SkillsSection.svelte';
	import ProjectsSection from '$lib/components/ProjectsSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
</script>

<svelte:head>
	<title>Michael Healy | Staff Solutions Architect</title>
	<meta
		name="description"
		content="Staff Solutions Architect at Pizza Hut, setting org-wide technical standards and leveraging AI to help engineering teams do more. Based in New Zealand."
	/>
</svelte:head>

<Hero />
<AboutSection />
<ExperienceSection />
<SkillsSection />
<ProjectsSection />
<ContactSection />
