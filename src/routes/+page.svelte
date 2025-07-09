<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import ProjectsSection from "$lib/components/ProjectsSection.svelte";
    import SkillsSection from "$lib/components/SkillsSection.svelte";
    import ContactSection from "$lib/components/ContactSection.svelte";
</script>

<svelte:head>
    <title>Michael Healy - Platform Engineer</title>
    <meta
        name="description"
        content="Personal portfolio of Michael Healy - Platform Engineer specializing in automating everything"
    />
</svelte:head>

<Hero />
<SkillsSection />
<ProjectsSection />
<ContactSection />
