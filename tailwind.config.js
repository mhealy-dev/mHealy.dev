/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      // Semantic tokens backed by CSS variables — see src/app.css for
      // the light/dark values. RGB triplets so Tailwind alpha works.
      colors: {
        bg:            'rgb(var(--c-bg) / <alpha-value>)',
        surface:       'rgb(var(--c-surface) / <alpha-value>)',
        raised:        'rgb(var(--c-raised) / <alpha-value>)',
        line:          'rgb(var(--c-line) / <alpha-value>)',
        'line-strong': 'rgb(var(--c-line-strong) / <alpha-value>)',
        fg:            'rgb(var(--c-fg) / <alpha-value>)',
        muted:         'rgb(var(--c-muted) / <alpha-value>)',
        subtle:        'rgb(var(--c-subtle) / <alpha-value>)',
        faint:         'rgb(var(--c-faint) / <alpha-value>)',
        accent:        'rgb(var(--c-accent) / <alpha-value>)',
        'accent-hover':'rgb(var(--c-accent-hover) / <alpha-value>)',
        'on-accent':   'rgb(var(--c-on-accent) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Cabinet Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Switzer', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out both',
        'fade-in': 'fadeIn 0.4s ease-out both',
        'pulse-dot': 'pulseDot 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.35' },
        },
      },
    },
  },
  plugins: [],
}
