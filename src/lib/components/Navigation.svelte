<script lang="ts">
    import { page } from "$app/stores";

    let isScrolled = $state(false);
    let isMobileMenuOpen = $state(false);
    let scrollY = $state(0);

    // Function to handle navigation clicks
    function handleNavClick(href: string) {
        // Close mobile menu if open
        isMobileMenuOpen = false;
        // Scroll to top immediately
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    }

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/resume", label: "Resume" },
        { href: "/contact", label: "Contact" },
    ];

    $effect(() => {
        const handleScroll = () => {
            scrollY = window.scrollY;
            isScrolled = scrollY > 50;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    // Fixed scale value based on scroll state - less aggressive shrinking
    let scaleValue = $derived(isScrolled ? 0.92 : 1.0);
</script>

<nav
    class="fixed left-1/2 z-50 transition-all duration-700 ease-out"
    class:top-0={!isScrolled}
    class:top-4={isScrolled}
    class:rounded-2xl={isScrolled}
    class:backdrop-blur-lg={isScrolled}
    class:shadow-2xl={isScrolled}
    style:transform="translateX(-50%) scale({scaleValue})"
    style:width="90%"
    style:max-width="75rem"
    style:background-color={isScrolled ? "rgba(2, 6, 23, 0.95)" : "transparent"}
    style:box-shadow={isScrolled ? "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(100, 132, 255, 0.1)" : "none"}
>
    <div class="transition-all duration-700 ease-out px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between transition-all duration-700 ease-out" class:h-20={isScrolled} class:h-24={!isScrolled}>
            <a href="/" class="font-bold gradient-text transition-all duration-700 ease-out" class:text-2xl={isScrolled} class:text-3xl={!isScrolled}>
                Michael Healy
            </a>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center transition-all duration-700 ease-out" class:space-x-8={isScrolled} class:space-x-10={!isScrolled}>
                {#each navItems as item}
                    <a
                        href={item.href}
                        onclick={() => handleNavClick(item.href)}
                        class="text-gray-300 transition-all duration-500 ease-out font-medium relative group transform hover:scale-105"
                        class:gradient-text={$page.url.pathname === item.href}
                        class:hover:gradient-text={$page.url.pathname !== item.href}
                        class:text-lg={isScrolled}
                        class:text-xl={!isScrolled}
                    >
                        {item.label}
                        <span
                            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 transition-all duration-500 ease-out group-hover:w-full rounded-full"
                            class:w-full={$page.url.pathname === item.href}
                        ></span>
                    </a>
                {/each}
            </div>

            <!-- Mobile Menu Button -->
            <button
                onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
                class="md:hidden rounded-lg border border-primary-500 border-opacity-20 hover:border-primary-500 hover:border-opacity-40 hover:bg-primary-500 hover:bg-opacity-10 transition-all duration-400 ease-out transform hover:scale-105 active:scale-95"
                class:p-2={isScrolled}
                class:p-3={!isScrolled}
            >
                <svg
                    class="text-primary-300 transition-all duration-400 ease-out"
                    class:w-6={isScrolled}
                    class:h-6={isScrolled}
                    class:w-7={!isScrolled}
                    class:h-7={!isScrolled}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    {#if isMobileMenuOpen}
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    {:else}
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    {/if}
                </svg>
            </button>
        </div>

        <!-- Mobile Menu -->
        {#if isMobileMenuOpen}
            <div
                class="md:hidden absolute top-full left-1/2 backdrop-blur-lg rounded-2xl mt-2 shadow-2xl transition-all duration-700 ease-out"
                style:transform="translateX(-50%) scale({scaleValue})"
                style:width="100%"
                style:background-color="rgba(2, 6, 23, 0.95)"
                style:box-shadow="0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(100, 132, 255, 0.1)"
            >
                <div class="px-6 py-4 space-y-3">
                    {#each navItems as item}
                        <a
                            href={item.href}
                            onclick={() => handleNavClick(item.href)}
                            class="block font-medium text-gray-300 transition-all duration-400 ease-out py-2 px-3 rounded-lg hover:bg-primary-500 hover:bg-opacity-10 transform hover:translate-x-1"
                            class:gradient-text={$page.url.pathname === item.href}
                            class:hover:gradient-text={$page.url.pathname !== item.href}
                            class:text-lg={isScrolled}
                            class:text-xl={!isScrolled}
                        >
                            {item.label}
                        </a>
                    {/each}
                </div>
            </div>
        {/if}
    </div>
</nav>
