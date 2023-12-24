/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1350px'},
      // => @media (max-width: 1279px) { ... }

      'ls': {'max': '1170px'},
      // => @media (max-width: 1023px) { ... }
      'lg': {'max': '1023px'},
      'mxl': {'max': '920px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '750px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      'xsm': {'max': '440px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        "bg-gray":'#00000078',
        'shadowBg':"#000000af",
        'mobileShadowBg':'#00000086',
      },
      gridTemplateColumns: {
       
        'auto': 'repeat(auto-fit, minmax(300px, 1fr))',

      }
    },
  },
  plugins: [],
}