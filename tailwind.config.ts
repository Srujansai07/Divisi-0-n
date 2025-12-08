import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: '#0d0d12',
                'background-alt': '#111118',
                primary: '#7c3aed',
                'primary-hover': '#8b5cf6',
                accent: '#00d4ff',
                'accent-secondary': '#06b6d4',
                success: '#22c55e',
                surface: 'rgba(255, 255, 255, 0.04)',
                'surface-hover': 'rgba(255, 255, 255, 0.08)',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Space Grotesk', 'sans-serif'],
            },
            animation: {
                'gradient-shift': 'gradient-shift 4s ease infinite',
                'hero-pulse': 'hero-pulse 8s ease-in-out infinite alternate',
                'float': 'float 3s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
                'shimmer': 'shimmer 2.5s infinite',
                'scroll-logos': 'scroll-logos 25s linear infinite',
            },
            keyframes: {
                'gradient-shift': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                'hero-pulse': {
                    '0%': { opacity: '0.9', transform: 'scale(1)' },
                    '100%': { opacity: '1', transform: 'scale(1.02)' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
                    '50%': { transform: 'translateX(-50%) translateY(-15px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 0 0 rgba(0, 212, 255, 0)' },
                    '50%': { boxShadow: '0 0 20px 2px rgba(0, 212, 255, 0.2)' },
                },
                'shimmer': {
                    '100%': { left: '100%' },
                },
                'scroll-logos': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
            boxShadow: {
                'glow-primary': '0 0 32px rgba(124, 58, 237, 0.5)',
                'glow-accent': '0 0 32px rgba(0, 212, 255, 0.4)',
                'card': '0 24px 48px rgba(0, 0, 0, 0.4)',
            },
            borderRadius: {
                '3xl': '1.5rem',
                '4xl': '2rem',
            },
        },
    },
    plugins: [],
}
export default config
