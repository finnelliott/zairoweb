module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
     'sans': ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"'
     ],
    },
    extend: {
      colors: {
        cool: {
          "black": "#111827",
          "white": "#f9fafb"
        },
        gray: {
          "1": "#1f2937",
          "2": "#4b5563",
          "3": "#6b7280",
          "4": "#9ca3af",
          "5": "#e5e7eb",
        },
        primary: {
          "light": "#3b71e3",
          "dark": "#001C56"
        },
        secondary: {
          "light": "#00df8f",
          "dark": "#006B45"
        },
        tertiary: {
          "light": "#ff8b2d",
          "dark": "#abcdef"
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}



