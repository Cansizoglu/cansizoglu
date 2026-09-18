import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Kurumsal lacivert
        brand: {
          50: '#eff4fb',
          100: '#dbe6f5',
          200: '#bccfea',
          300: '#8fafdb',
          400: '#5c87c7',
          500: '#3a68b0',
          600: '#2b5094',
          700: '#244178',
          800: '#1e3562',
          900: '#1b2d52',
          950: '#111d36',
        },
        // Vurgu kırmızısı
        accent: {
          50: '#fef3f2',
          100: '#fee2e1',
          200: '#fecac8',
          300: '#fca6a2',
          400: '#f7736d',
          500: '#ee4640',
          600: '#d42722',
          700: '#b81f1b',
          800: '#991d1a',
          900: '#801e1c',
          950: '#460b09',
        },
        ink: '#111d36',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        site: '1200px',
      },
    },
  },
  plugins: [],
}

export default config
