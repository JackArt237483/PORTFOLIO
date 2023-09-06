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
        'cardbg': "url('./assets/background/cardclient.png')",
      },
      colors: {
        'perple': "#7772F1",
        'black': "#1E212C",
        'gray': "#787A80"
      },
      boxShadow: {
        "shadow-card" : "0px 4px 4px -4px rgba(30, 33, 44, 0.03), 0px 12px 10px -6px rgba(154, 156, 165, 0.04), 0px 30px 24px -10px rgba(154, 156, 165, 0.05), 0px 80px 80px -20px rgba(154, 156, 165, 0.08)"
      }
  },
  plugins: [],
}
}
