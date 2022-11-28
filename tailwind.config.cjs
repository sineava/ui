/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)', // 基础色(如标题)
          light: 'var(--color-text-sub)' // 次级颜色(如文本)
        }
      }
    }
  },
  variants: {
    extend: {
      textOpacity: ['dark'],
      backgroundColor: ['dark']
    }
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss-dark-mode')()
  ]
}
