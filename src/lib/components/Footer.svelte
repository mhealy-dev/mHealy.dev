<script lang="ts">
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: "GitHub",
            href: "https://github.com/mhealy-dev",
            icon: "github",
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/michael-healy-5aabaa161/",
            icon: "linkedin",
        },
        {
            name: "Twitter",
            href: "https://twitter.com/mhealy",
            icon: "twitter",
        },
    ];
</script>

<footer class="border-t border-primary-500 border-opacity-20 backdrop-blur-sm">
    <div class="section-container py-12">
        <div
            class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
            <div class="text-gray-400 text-sm">
                © {currentYear}
                <span class="gradient-text-subtle">mHealy.dev</span>. All rights
                reserved.
            </div>

            <div class="flex items-center space-x-6">
                {#each socialLinks as link}
                    <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-gray-400 hover:text-primary-300 transition-all duration-300 group"
                    >
                        <span class="sr-only">{link.name}</span>
                        <div class="relative">
                            <span class="text-sm font-medium">{link.name}</span>
                            <span
                                class="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-primary-400 to-secondary-400 transition-all duration-300 group-hover:w-full"
                            ></span>
                        </div>
                    </a>
                {/each}
            </div>
        </div>

        <!-- Optional: Add a subtle gradient line at the bottom -->
        <div
            class="mt-8 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50"
        ></div>
    </div>
</footer>
