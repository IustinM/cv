/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'tall': { 'raw': '(max-height: 700px)' },
      // 'tall': { 'mediun': '(max-height: 700px)' },
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1350px'},
      // => @media (max-width: 1279px) { ... }

      'ls': {'max': '1210px'},
      // => @media (max-width: 1023px) { ... }
      'lg': {'max': '1023px'},
      'mxl': {'max': '920px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '750px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      'lsm': {'max': '500px'},
      'xsm': {'max': '440px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        "bg-gray":'#00000078',
        "greyCard":'#5a5a5a',
        "greyBg":'#e0e0e0',
        'shadowBg':"#000000af",
        'mainBg':'#d9d9d919',
        'mobileShadowBg':'#00000086',
      },
      gridTemplateColumns: {
       
        'auto': 'repeat(auto-fit, minmax(250px, 1fr))',

      }
    },
  },
  plugins: [],
}