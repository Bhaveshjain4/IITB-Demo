/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'signup-background':"url('/assets/iitbombay.jpg')"
      }
    },
  },
  plugins: [],
}

// "./index.html",
// "./src/**/*.{js,ts,jsx,tsx}",