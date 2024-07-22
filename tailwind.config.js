/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        telegram: {
          DEFAULT: "#2da5dc"
        },
        primary: {
          DEFAULT: "#e31e78",
          start: "#e31e78",
          end: "#5e298e"
        },
        bg: {
          DEFAULT: "#ffffff",
        },
        lightbg: {
          DEFAULT: "#f8f8f8"
        },
        darkbg: {
          DEFAULT: "#333333"
        },
        login: {
          gradientstart: "#f26c13",
          gradiendstop: "#f4a919",
          lgradientstart: "#f12911",
          lgradiendstop: "#f36915"
        }
      },
      borderRadius: {
        login: "70px",
        navbar: "30px 10px 30px 10px"
      },
      minHeight: {
        login: "60vh"
      }, 
      fontFamily: {
        vazir: "'Vazirmatn'"
      },
      backgroundSize: {
        sbuttonanime: "300% 100%",
      },
      backgroundPosition: {
        pbuttonanime: "100% 0",
      },
      backgroundImage: {
        ibuttonanime: "linear-gradient(to left, #f36915, #e31e78, #00000000, #00000000)",
        brightbefore: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)" 
      },
      gridTemplateColumns: {
        mdstart: "250px 1fr 250px"
      },
      transitionDuration: {
        my: "1s"
      }
    },
  },
  plugins: [],
}