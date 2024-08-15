/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#D4C1DD',
        'custom-beige': '#d7cebd',
        'custom-black': '#000000',
        'custom-violet': '#8C69BA',
        'custom-orange': '#e17739',
        'custom-blue': '#6cc1e5',
      },
      backgroundImage: {
        'custom-bohemian': "url('/src/Assets/bohemian-line-art-design-background.png')",
        'custom-bw':"url('/src/Assets/Bndwhite.jpg')",
        'custom-vector':"url('/src/Assets/illustration.jpg')"
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  variants: {},
  plugins: [],
}