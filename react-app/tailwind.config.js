/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // to center text on mobile, and left align it on screens 640px and wider use <div class="text-center sm:text-left"></div>
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },

    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        cuisines: {
          blue: "#1fb6ff",
          purple: "#7e5bef",
          pink: "#ff49db",
          orange: "#ff7849",
          green: "#13ce66",
          yellow: "#ffc82c",
          "gray-dark": "#273444",
          gray: "#8492a6",
          "gray-light": "#d3dce6",
        },
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
