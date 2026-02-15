import typography from '@tailwindcss/typography';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
            typography: {
                DEFAULT: {
                    css: {
                        color: '#111827',
                        a: {
                            color: '#ca8a04',
                            fontWeight: '600',
                            textDecoration: 'none',
                            '&:hover': { color: '#a16207', textDecoration: 'underline' },
                        },
                        'h1,h2,h3,h4': {
                            fontWeight: '800',
                            letterSpacing: '-0.02em',
                        },
                        blockquote: {
                            borderLeftColor: '#fde68a',
                            backgroundColor: '#fffbeb',
                        },
                        code: {
                            backgroundColor: '#f3f4f6',
                            padding: '0.2em 0.35em',
                            borderRadius: '0.375rem',
                        },
                        pre: {
                            backgroundColor: '#111827',
                            color: '#f9fafb',
                            padding: '1rem',
                            borderRadius: '0.75rem',
                        },
                        img: {
                            borderRadius: '1rem',
                            boxShadow: '0 10px 25px -10px rgba(0,0,0,0.2)',
                        },
                        table: { width: '100%' },
                        thead: { borderBottomColor: '#e5e7eb' },
                        'tbody tr': { borderBottomColor: '#f3f4f6' },
                    },
                },
            },
            // 这里可以添加自定义颜色，比如我们的“香蕉黄”
            colors: {
                brand: {
                    yellow: '#FACC15', // 示例
                }
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
  },
  plugins: [typography],
}
