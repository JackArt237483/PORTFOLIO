/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image1': "url('./assets/casestudius/image.png')",
        'image2': "url('./assets/casestudius/image2.png')",
        'image3': "url('./assets/casestudius/image3.png')",
        'image4': "url('./assets/casestudius/image4.png')",
        'image5': "url('./assets/casestudius/image5.png')",
        'image6': "url('./assets/casestudius/image6.png')",
        'image': "url('./assets/background/background.png')",
        'imagebg': "url('./assets/background/backgroundtwo.png')",
        'cardbg': "url('./assets/background/cardclient.png')",
        'servies': "url('./assets/ServiesImage/servies.png')",
        'services': "url('./assets/background/backgroundServices.png')",
        'studius': "url('./assets/background/backgroundsix.png')",
        'line': "linear-gradient(270deg, rgba(218, 219, 221, 0.00) 0%, rgba(218, 219, 221, 0.50) 12.33%, #DADBDD 51.91%, rgba(218, 219, 221, 0.50) 87.85%, rgba(218, 219, 221, 0.00) 100%)"
      },
      colors: {
        'perple': "#7772F1",
        'black': "#1E212C",
        'gray': "#787A80",
        'back': "rgba(255, 255, 255, 0.12)"
      },
      boxShadow: {
        "shadow-card" : "0px 4px 4px -4px rgba(30, 33, 44, 0.03), 0px 12px 10px -6px rgba(154, 156, 165, 0.04), 0px 30px 24px -10px rgba(154, 156, 165, 0.05), 0px 80px 80px -20px rgba(154, 156, 165, 0.08)"
      }
  },
  plugins: [],
}
}
