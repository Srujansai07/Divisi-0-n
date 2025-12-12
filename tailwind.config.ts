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
                // Backgrounds
                'bg-primary': '#030306',
                'bg-secondary': '#080810',
                'bg-tertiary': '#0c0c18',
                'bg-elevated': '#101020',
                // Accents
                primary: '#7c3aed',
                'primary-hover': '#8b5cf6',
                accent: '#00d4ff',
                'accent-secondary': '#06b6d4',
                'accent-pink': '#ec4899',
                'accent-orange': '#f97316',
                success: '#22c55e',
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
                heading: ['Space Grotesk', 'sans-serif'],
            },
            animation: {
                'gradient-flow': 'gradient-flow 6s ease infinite',
                'aurora': 'aurora 20s ease-in-out infinite',
                'float': 'float 4s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
                'shimmer': 'shimmer 3s infinite',
                'twinkle': 'twinkle 4s ease-in-out infinite',
                'border-flow': 'border-flow 4s linear infinite',
                'scroll-logos': 'scroll-logos 20s linear infinite',
                'particle-float': 'particle-float 15s linear infinite',
            },
            keyframes: {
                'gradient-flow': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                'aurora': {
                    '0%, 100%': { transform: 'translate(0%, 0%) rotate(0deg)' },
                    '25%': { transform: 'translate(-5%, 5%) rotate(2deg)' },
                    '50%': { transform: 'translate(5%, -5%) rotate(-1deg)' },
                    '75%': { transform: 'translate(-3%, -3%) rotate(1deg)' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
                    '50%': { transform: 'translateX(-50%) translateY(-20px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 24px rgba(139, 92, 246, 0.4)' },
                    '50%': { boxShadow: '0 0 48px rgba(139, 92, 246, 0.6)' },
                },
                'shimmer': {
                    '100%': { left: '150%' },
                },
                'twinkle': {
                    '0%, 100%': { opacity: '0.5' },
                    '50%': { opacity: '1' },
                },
                'border-flow': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
                'scroll-logos': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                'particle-float': {
                    '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
                    '10%': { opacity: '0.3' },
                    '90%': { opacity: '0.3' },
                    '100%': { transform: 'translateY(-100vh) rotate(720deg)', opacity: '0' },
                },
            },
            boxShadow: {
                'glow-sm': '0 0 20px rgba(139, 92, 246, 0.3)',
                'glow-md': '0 0 40px rgba(139, 92, 246, 0.4)',
                'glow-lg': '0 0 60px rgba(139, 92, 246, 0.5)',
                'glow-xl': '0 0 100px rgba(139, 92, 246, 0.6)',
            },
            borderRadius: {
                '3xl': '1.5rem',
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
        },
    },
    plugins: [],
}
export default config
