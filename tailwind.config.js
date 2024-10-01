/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:[ {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
         },
       },
            {
              fontFamily:{
                lato:['lato','sans-serif']
              }
            }
  ]
  },
  // eslint-disable-next-line
  plugins: [ require('daisyui'),],
}

