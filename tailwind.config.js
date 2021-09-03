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
          "50": "#CEDCF8",
          "100": "#9db8f1",
          "200": "#6c95ea",
          "300": "#3b71e3",
          "400": "#2d5cc0",
          "500": "#1e479d",
          "600": "#0F327A",
          "700": "#001C56",
          "800": "#000E2B",
          "900": "#000716",
        },
        secondary: {
          "50": "#c0f7e3",
          "100": "#80EFC7",
          "200": "#40e7ab",
          "300": "#00df8f",
          "400": "#00d186",
          "500": "#00c27d",
          "600": "#00a56a",
          "700": "#006b45",
          "800": "#003623",
          "900": "#001b12",
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



