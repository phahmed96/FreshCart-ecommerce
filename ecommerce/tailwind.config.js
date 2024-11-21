/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 

    //دا نكتبة في حالة ال container not working in tailwindcss
    container: {
      center: true,  // Automatically center the container
      padding: '6rem',  // Add default padding to container
    },

    
    extend: {},
  },
  plugins: [],
}

