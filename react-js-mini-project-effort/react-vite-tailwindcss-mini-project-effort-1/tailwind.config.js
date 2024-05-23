/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        'primarycolor':'#243c5a',
        'secondarycolor':'green',
        'red-200':'pink',
        'border1':'red',
        'border2':'blue',
        'border3':'purple',
      },
      backgroundImage: {
        'backgroundImg1': "url('https://wallpapers.com/images/featured/pattern-4u7ed6koskqhcez1.jpg')",
        'backgroundImg2': "url('https://static.vecteezy.com/system/resources/thumbnails/009/841/162/small/geometric-ethnic-seamless-pattern-traditional-native-striped-american-mexican-style-design-for-background-illustration-wallpaper-fabric-batik-carpet-clothing-embroidery-free-vector.jpg')",
        'backgroundImg3': "url('https://img.freepik.com/free-vector/damask-seamless-emboss-pattern-background-classical-luxury-old-damask-ornament-royal-victorian-seamless-texture-vintage-exquisite-floral-baroque-template_1217-1671.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704672000&semt=ais')",
        'backgroundImg4': "url('https://static.brusheezy.com/system/resources/previews/000/027/702/non_2x/decorative-wallpaper-pattern-photoshop-patterns.jpg')",
        'backgroundImg5': "url('https://www.mydarl.in/cdn/shop/products/my-darlin-wallpapers-squiggle-party-Desktop_2048x1366_ea0c076c-cec0-4ed0-baeb-5a90b407ce52.jpg?v=1586209663')"
      },
      fontSize:{
        // DESKTOP + TABLET
        'headTitleDT':'calc(48px + 6 * ((100vh - 768px) / 680))',
        'subHeadTitleDT':'calc(28px + 6 * ((100vh - 768px) / 680))',

        // ONLY MOBILE 
        'headTitleMOB':'calc(32px + 6 * ((100vh - 320px) / 680))',
        'subHeadTitleMOB':'calc(22px + 6 * ((100vh - 768px) / 680))',
      }
    },
  },
  plugins: [],
}