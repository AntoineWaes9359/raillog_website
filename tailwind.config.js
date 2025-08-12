/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-text': '#040a07',
        'brand-background': '#fafdfb',
        'brand-primary': '#42c976',
        'brand-secondary': '#83e3a8',
        'brand-accent': '#64e595',
      },
    },
  },
  plugins: [],
};
