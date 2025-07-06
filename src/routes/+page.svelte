<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import ProjectsSection from "$lib/components/ProjectsSection.svelte";
    import SkillsSection from "$lib/components/SkillsSection.svelte";
    import ContactSection from "$lib/components/ContactSection.svelte";
</script>

<svelte:head>
    <title>Michael Healy - Full Stack Developer</title>
    <meta
        name="description"
        content="Personal portfolio of Michael Healy - Full Stack Developer specializing in modern web technologies"
    />
</svelte:head>

<Hero />
<SkillsSection />
<ProjectsSection />
<ContactSection />
