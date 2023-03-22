/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cgrey: {
          50: "#F9F9F9",
          60: "#F3EFEF",
          100: "#D9D9D9",
        },
        cblue: "#2F269F",
        cgreen: "#11C30D",
        cred: "#F24E1E",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
