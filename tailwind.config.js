/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"], // Example: Add Roboto if needed
        inter: ["Inter", "sans-serif"], // Example: Add Inter if needed
      },
    },
  },
  plugins: [],
};


