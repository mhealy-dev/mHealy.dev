<script lang="ts">
    let typedText = $state("");
    const roles = ["Platform Engineer", "Problem Solver", "Tech Enthusiast"];
    let currentRole = $state(0);
    let isDeleting = $state(false);
    let scrollY = $state(0);
    let showScrollIndicator = $derived(scrollY < 50); // Show when at top, hide when scrolled down

    $effect(() => {
        const typeSpeed = 100;
        const deleteSpeed = 50;
        const pauseTime = 2000;

        function typeWriter() {
            const currentText = roles[currentRole];

            if (!isDeleting) {
                typedText = currentText.substring(0, typedText.length + 1);

                if (typedText === currentText) {
                    setTimeout(() => {
                        isDeleting = true;
                        typeWriter();
                    }, pauseTime);
                    return;
                }
            } else {
                typedText = currentText.substring(0, typedText.length - 1);

                if (typedText === "") {
                    isDeleting = false;
                    currentRole = (currentRole + 1) % roles.length;
                }
            }

            setTimeout(typeWriter, isDeleting ? deleteSpeed : typeSpeed);
        }

        typeWriter();

        // Handle scroll indicator visibility
        const handleScroll = () => {
            scrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });
</script>

<section
    class="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
>
    <!-- Animated background grid -->
    <div class="absolute inset-0 grid-background opacity-20"></div>

    <!-- Floating particles effect -->
    <div class="absolute inset-0">
        <div
            class="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500 bg-opacity-20 rounded-full blur-3xl animate-pulse"
        ></div>
        <div
            class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500 bg-opacity-20 rounded-full blur-3xl animate-pulse"
            style="animation-delay: 1s"
        ></div>
        <div
            class="absolute top-1/2 left-1/2 w-80 h-80 bg-accent-500 bg-opacity-10 rounded-full blur-3xl animate-pulse"
            style="animation-delay: 2s"
        ></div>
    </div>

    <div class="section-container text-center relative z-10">
        <div class="animate-fade-in">
            <h1 class="text-5xl md:text-7xl font-bold mb-6">
                Hi, I'm <span class="gradient-text neon-glow"
                    >Michael Healy</span
                >
            </h1>

            <div
                class="text-2xl md:text-4xl text-primary-200 mb-8 h-12 font-mono"
            >
                <span class="gradient-text-subtle">{typedText}</span>
                <span class="animate-pulse text-accent-400">_</span>
            </div>

            <p
                class="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
                Crafting digital experiences at the intersection of
                <span class="text-primary-300">creativity</span> and
                <span class="text-secondary-300">technology</span>
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/projects" class="btn btn-primary group">
                    <span class="relative z-10">View My Projects</span>
                    <div
                        class="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                    ></div>
                </a>
                <a href="/contact" class="btn btn-outline"> Get In Touch </a>
            </div>
        </div>
    </div>

    <!-- Scroll Indicator -->
    {#if showScrollIndicator}
        <div
            class="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-10 transition-opacity duration-300"
        >
            <svg
                class="w-6 h-6 text-primary-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
            </svg>
        </div>
    {/if}
</section>
