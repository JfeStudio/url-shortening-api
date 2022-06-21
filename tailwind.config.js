const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        // center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        montserrat: ['"Montserrat", sans-serif'],
        poppins: ["'Poppins', sans-serif"],
      },
      colors: {
        holy: "#fafafa",
        "holy-blur": "#f2f2f2",
        dark: "#1e293b",
        "dark-scy": "#132c33",
        cyan: "hsl(180, 66%, 49%)",
        "dark-violet": "hsl(257, 27%, 26%)",
        "soft-red": "hsl(0, 87%, 67%)",
        "soft-gray": "hsl(0, 0%, 75%)",
        "grayish-violet": "hsl(257, 7%, 63%)",
        "very-dark-blue": "hsl(255, 11%, 22%)",
        "very-dark-violet": "hsl(260, 8%, 14%)",
      },
      boxShadow: {
        // "3xl": "0 -5px 10px rgba(0, 0, 0, 0.1)",
        "3xl": "0 5px 15px 0 rgb(0 0 0 / 8%)",
      },
      backgroundImage: {
        "hero-shorten-mobile": "url('/public/images/bg-shorten-mobile.svg')",
        "hero-boost-mobile": "url('/public/images/bg-boost-mobile.svg')",
        "hero-shorten-desktop": "url('/public/images/bg-shorten-desktop.svg')",
        "hero-boost-desktop": "url('/public/images/bg-boost-desktop.svg')",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      addComponents({
        ".bg-hover": {
          backgroundColor: "hsl(180, 66%, 49%)",
          "&:hover": {
            opacity: ".9",
          },
        },
        ".text-hover": {
          color: "hsl(0, 0%, 75%)",
          "&:hover": {
            color: "hsl(180, 66%, 49%)",
          },
        },
      });
    }),
  ],
};
