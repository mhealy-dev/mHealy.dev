<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import AboutSection from '$lib/components/AboutSection.svelte';
	import ExperienceSection from '$lib/components/ExperienceSection.svelte';
	import SkillsSection from '$lib/components/SkillsSection.svelte';
	import ProjectsSection from '$lib/components/ProjectsSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
</script>

<svelte:head>
	<title>Michael Healy — Platform Engineer</title>
	<meta
		name="description"
		content="Platform Engineer specializing in automation, cloud infrastructure, and internal developer platforms. Based in New Zealand."
	/>
</svelte:head>

<Hero />
<AboutSection />
<ExperienceSection />
<SkillsSection />
<ProjectsSection />
<ContactSection />
