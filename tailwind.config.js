/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        blueGradient: 'linear-gradient(280deg, #65B3E4 15.15%, rgba(120, 161, 187, 0.00) 171.55%);',
        redGradient: 'linear-gradient(280deg, #FF4757 15.15%, rgba(255, 255, 255, 0.00) 171.55%);',
        activeGradient: 'linear-gradient(310deg, #65B3E4 23.89%, rgba(255, 255, 255, 0.00) 100%);',
      },
      colors: {
        mainDark: '#283044',
        secondBg: '#F7F7F7',
        lightGray: 'rgba(40, 48, 68, 0.50)'
      },
      boxShadow: {
        'input': '0px 0px 20px 0px rgba(120, 161, 187, 0.30);',
      }
    },
  },
  plugins: [],

}

