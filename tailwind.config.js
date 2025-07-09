/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // Blue-purple harmony palette  
        primary: {
          50: '#f0f4ff',
          100: '#e5edff',
          200: '#d0ddff',
          300: '#adc0ff',
          400: '#7a95ff',
          500: '#6484ff', // Consistent blue with purple undertones
          600: '#5970e6',
          700: '#4c5fb3',
          800: '#3e4d8f',
          900: '#354174',
          950: '#1f2545',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#b673ff', // Purple accent
          600: '#a855f7',
          700: '#9333ea',
          800: '#7c3aed',
          900: '#6b21a8',
          950: '#581c87',
        },
        accent: {
          50: '#f0fdff',
          100: '#ccf7fe',
          200: '#99effd',
          300: '#60e2fa',
          400: '#39dbf9', // Cyan accent
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          950: '#083344',
        },
        mint: {
          50: '#f0fdf9',
          100: '#ccfbef',
          200: '#99f6e0',
          300: '#5eead4',
          400: '#57eaa0', // Mint accent
          500: '#20d486',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        // Background colors
        background: {
          gradient: '#161820',
          primary: '#0c0f1d',
          secondary: '#161a2d',
          tertiary: '#1e253d',
          card: 'rgba(30, 35, 60, 0.5)',
          elevated: '#383e47',
        },
        // Text colors  
        text: {
          primary: 'rgba(255, 255, 255, 0.95)',
          secondary: 'rgba(255, 255, 255, 0.65)',
          muted: 'rgba(255, 255, 255, 0.45)',
          accent: '#64b5f6',
        },
        // Border colors
        border: {
          primary: '#4a5568',
          secondary: '#2d3748',
          accent: '#64b5f6',
          card: 'rgba(129, 155, 245, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'bounce-in': 'bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}