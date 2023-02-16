/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        netflixBG:'#000000',
        netflixRed:'#db0000',
        netflixMX:'#564d4d',
        netflixRed2:'#831010',
        transBlack:'rgba(0,0,0,0.7)',
        netflixGray:'rgba(255,255,255,0.3)'
      },
      margin:{
        200:'200px',
        100:'100px',
        150:'150px'
      },
      padding:{
        200:'200px',
        100:'100px',
        150:'150px'
      },
      width:{
        300:'100px'
      },
      backgroundImage:{
        hero:"url('https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg') bg-cover bg-no-repeat"
      },
      height:{
        15:'60px'
      },
      width:{
        400:'400px'
      }

    },
  },
  plugins: [],
}
