/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image': "url('./assets/background/background.png')",
        'imagebg': "url('./assets/background/backgroundtwo.png')",
      },
      colors: {
        'perple': "#7772F1",
        'black': "#1E212C",
        'gray': "#787A80"
      }
  },
  plugins: [],
}
}
