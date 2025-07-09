<script lang="ts">
    let currentImageIndex = $state(0);
    let isImageLoading = $state(true);

    // Timeline data
    const timeline = [
        {
            year: "2019",
            title: "Started Tech Career",
            description:
                "Began working on a service desk for Taco Bell, driven by a passion for gaming and troubleshooting.",
            icon: "🖥️",
        },
        {
            year: "2020",
            title: "Reliability Engineering",
            description:
                "Joined Staffmark and supported reliability of the NextGen POS system; built foundational documentation and training.",
            icon: "🔧",
        },
        {
            year: "2021-2023",
            title: "POS Infrastructure Lead",
            description:
                "Promoted to PSA I–III roles at Taco Bell, leading automation and dashboard work for FOH/NGPOS initiatives.",
            icon: "📊",
        },
        {
            year: "2024",
            title: "Automation Specialist",
            description:
                "Joined Yum! Brands, built tools, dashboards, and incident response systems; led internal enablement efforts.",
            icon: "⚙️",
        },
        {
            year: "2025",
            title: "Platform Engineer",
            description:
                "Transitioned to one of three Platform Engineers on the Byte team, focused on internal developer platform and temporal workflows.",
            icon: "🚀",
        },
    ];

    // Interests/hobbies
    const interests = [
        {
            name: "Automation",
            icon: "⚡",
            description: "If it's manual, it can be automated",
        },
        {
            name: "Innovation",
            icon: "🔬",
            description: "Finding new ways to solve old problems",
        },
        {
            name: "Problem-Solving",
            icon: "🧠",
            description: "Debugging code and life puzzles",
        },
        {
            name: "Second Breakfast",
            icon: "🍳",
            description: "And elevenses, when debugging",
        },
    ];

    // Fun facts or stats
    const stats = [
        { label: "Years Experience", value: "5+", suffix: "in tech" },
        { label: "Global Teams", value: "50k+", suffix: "restaurants supported" },
        { label: "Tools Built", value: "25+", suffix: "automation solutions" },
        { label: "Incidents", value: "100s", suffix: "resolved" },
    ];

    $effect(() => {
        // Simulate image loading
        setTimeout(() => {
            isImageLoading = false;
        }, 500);
    });
</script>

<svelte:head>
    <title>About - Michael Healy</title>
    <meta
        name="description"
        content="Learn more about Michael Healy - Platform Engineer, problem solver, and technology enthusiast"
    />
</svelte:head>

<div class="min-h-screen pt-20 pb-12">
    <div class="section-container">
        <!-- Hero Section -->
        <section class="mb-20">
            <div class="max-w-6xl mx-auto">
                <h1
                    class="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text"
                >
                    About Me
                </h1>

                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <!-- Image/Avatar Section -->
                    <div class="relative group">
                        <div
                            class="aspect-square max-w-md mx-auto relative overflow-hidden rounded-2xl"
                        >
                            {#if isImageLoading}
                                <div
                                    class="absolute inset-0 bg-primary-500 bg-opacity-10 animate-pulse"
                                ></div>
                            {/if}
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 opacity-20"
                            ></div>
                            <div
                                class="absolute inset-0 flex items-center justify-center"
                            >
                                <div class="text-9xl">👨‍💻</div>
                            </div>
                            <!-- Decorative elements -->
                            <div
                                class="absolute -top-4 -right-4 w-24 h-24 bg-secondary-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"
                            ></div>
                            <div
                                class="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"
                            ></div>
                        </div>
                    </div>

                    <!-- Bio Section -->
                    <div class="space-y-6">
                        <h2 class="text-3xl font-bold text-primary-100">
                            Hi, I'm Michael Healy
                        </h2>
                        <div class="space-y-4 text-gray-300 leading-relaxed">
                            <p>
                                I'm a <span class="text-primary-300 font-semibold">Platform Engineer</span> at Yum! Brands, where I'm one of three engineers building our Internal Developer Portal. I specialize in <span class="text-secondary-300 font-semibold">workflow automation</span> using Go and Temporal, creating tools that empower developers across our global organization.
                            </p>
                            <p>
                                My engineering philosophy was shaped by starting on the service desk—I've seen firsthand how bad code impacts real people. This drives me to build <span class="text-secondary-300 font-semibold">reliable, scalable systems</span> that just work. From Terraform infrastructure to monitoring dashboards, I focus on solutions that reduce operational burden.
                            </p>
                            <p>
                                Currently, I'm working on automating infrastructure provisioning, building self-service developer tools, and implementing Temporal workflows for complex orchestration. My approach: <span class="text-primary-300 font-semibold">be curious, not judgmental</span>—it's how I tackle legacy systems and find elegant solutions to complex problems.
                            </p>
                        </div>

                        <!-- Quick stats -->
                        <!-- <div class="grid grid-cols-2 gap-4 pt-4">
                            {#each stats as stat, i}
                                <div
                                    class="text-center p-4 rounded-lg bg-primary-500 bg-opacity-10 border border-primary-500 border-opacity-20"
                                    style="animation: fadeIn 0.5s ease-out {i *
                                        0.1}s both"
                                >
                                    <div
                                        class="text-2xl font-bold gradient-text"
                                    >
                                        {stat.value}
                                    </div>
                                    <div class="text-xs text-gray-400">
                                        {stat.label}
                                        {stat.suffix}
                                    </div>
                                </div>
                            {/each}
                        </div> -->
                    </div>
                </div>
            </div>
        </section>

        <!-- Timeline Section -->
        <section class="mb-20">
            <h2 class="text-3xl font-bold text-center mb-12 gradient-text">
                My Journey
            </h2>
            <div class="max-w-4xl mx-auto">
                <div class="relative">
                    <!-- Timeline line -->
                    <div
                        class="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-400 opacity-30"
                    ></div>

                    <!-- Timeline items -->
                    <div class="space-y-12">
                        {#each timeline as item, i}
                            <div
                                class="relative flex items-start group"
                                style="animation: slideIn 0.5s ease-out {i *
                                    0.1}s both"
                            >
                                <!-- Icon -->
                                <div
                                    class="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 border-2 border-primary-500 group-hover:border-secondary-400 transition-colors"
                                >
                                    <span class="text-2xl">{item.icon}</span>
                                </div>

                                <!-- Content -->
                                <div
                                    class="ml-8 flex-1 card p-6 group-hover:transform group-hover:translate-x-2 transition-all duration-300"
                                >
                                    <div
                                        class="flex items-center justify-between mb-2"
                                    >
                                        <h3
                                            class="text-xl font-semibold text-primary-100"
                                        >
                                            {item.title}
                                        </h3>
                                        <span
                                            class="text-sm text-secondary-300 font-mono"
                                            >{item.year}</span
                                        >
                                    </div>
                                    <p class="text-gray-400">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </section>

        <!-- Interests Section -->
        <section class="mb-20">
            <h2 class="text-3xl font-bold text-center mb-12 gradient-text">
                What Drives Me
            </h2>
            <div
                class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
            >
                {#each interests as interest, i}
                    <div
                        class="card p-6 text-center group hover:transform hover:scale-105 transition-all duration-300"
                        style="animation: bounceIn 0.6s ease-out {i *
                            0.1}s both"
                    >
                        <div class="text-4xl mb-4 group-hover:animate-bounce">
                            {interest.icon}
                        </div>
                        <h3 class="text-lg font-semibold text-primary-200 mb-2">
                            {interest.name}
                        </h3>
                        <p class="text-sm text-gray-400">
                            {interest.description}
                        </p>
                    </div>
                {/each}
            </div>
        </section>

        <!-- Values/Philosophy Section -->
        <section class="mb-20">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-3xl font-bold mb-8 gradient-text">
                    My Philosophy
                </h2>
                <div class="card p-8 md:p-12 relative overflow-hidden">
                    <div
                        class="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full blur-3xl opacity-10"
                    ></div>
                    <div
                        class="absolute bottom-0 left-0 w-64 h-64 bg-secondary-500 rounded-full blur-3xl opacity-10"
                    ></div>
                    <blockquote
                        class="relative z-10 text-xl md:text-2xl text-gray-300 font-light italic leading-relaxed"
                    >
                        "The best infrastructure is invisible to those who use
                        it, yet empowers them to build amazing things."
                    </blockquote>
                    <div class="mt-6 text-gray-400">
                        — My approach to Platform Engineering
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="text-center">
            <h2 class="text-2xl font-bold mb-6 text-primary-100">
                Let's Build Something Together
            </h2>
            <p class="text-gray-400 mb-8 max-w-2xl mx-auto">
                Whether you need help with cloud infrastructure, DevOps
                practices, or full-stack development, I'm always excited to
                tackle new challenges.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" class="btn btn-primary"> Get in Touch </a>
                <a href="/projects" class="btn btn-outline"> View My Work </a>
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

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes bounceIn {
        0% {
            opacity: 0;
            transform: scale(0.3);
        }
        50% {
            transform: scale(1.05);
        }
        70% {
            transform: scale(0.9);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
</style>
