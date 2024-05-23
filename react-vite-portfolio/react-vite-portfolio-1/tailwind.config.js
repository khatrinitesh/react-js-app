/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#5d49b2',
        'grey':'#7C7C7C',
        'lila':'#e6e5ec',
        'darkgrey':'#929293',
        'lightgrey':"#D8D8D8",
        "lightpurple":'#f4f3f8'
      },
      fontFamily: {
        'raleway':['Raleway'],
        'ralewayM':['RalewayM'],
        'opensans':['OpenSans'],
        'opensanssb':['OpenSansSemiBold'],
        'opensansb':['OpenSansBold'],
      },
      backgroundImage: theme => ({
        'hero': "url('./src/assets/img/bg-hero.jpg')",
        'hero2': "url('./src/assets/img/bg-hero.jpg')",
        'coverpattern':"url('./src/assets/img/experience-figure.png')",
      }),
       // Define gradient colors
       gradientColorStops: theme => ({
        'cyan-700': '#047857',
        'blue-500': '#3B82F6',
        'indigo-600': '#4F46E5',
        // Define your hero gradient colors here
        'hero-gradient-from': theme('colors.cyan.700'), // You can customize this
        'hero-gradient-to': theme('colors.indigo.600'), // You can customize this
      }),
      fontSize: {
        // Define font sizes based on your variables
        'bodyBase': '2vh',
        'fs1': '0.11vh',
        'fs2': '0.21vh',
        'fs4': '0.42vh',
        'fs8': '0.85vh',
        'fs10': '1.06vh',
        'fs12': '1.27vh',
        'fs14': '1.48vh',
        'fs16': '1.69vh',
        'fs18': '1.90vh',
        'fs20': '2.11vh',
        'fs22': '2.32vh',
        'fs24': '2.54vh',
        'fs26': '2.75vh',
        'fs28': '2.97vh',
        'fs30': '3.17vh',
        'fs32': '3.39vh',
        'fs34': '3.60vh',
        'fs36': '3.81vh',
        'fs38': '4.02vh',
        'fs40': '4.23vh',
        'fs42': '4.44vh',
        'fs44': '4.66vh',
        'fs46': '4.87vh',
        'fs48': '5.08vh',
        'fs50': '5.29vh',
      },
    },
  },
  plugins: [],
}

