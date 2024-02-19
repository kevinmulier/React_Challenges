import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          'primary': '#f3f4f6',
          'secondary': '#b71f72',
          'accent': '#ffffff',
          'neutral': '#2A2565',
          'base-100': '#422976',
          'info': '#d9dddc',
          'success': '#86efac',
          'warning': '#fde68a',
          'error': '#fca5a5',
        },
      },
    ],
  },
};
