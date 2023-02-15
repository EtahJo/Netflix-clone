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
        nexflixMX:'#564d4d',
        netflixRed2:'#831010',
      },
      margin:{
        200:'200px'
      }

    },
  },
  plugins: [],
}
