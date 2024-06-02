/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    screens: {
      sm: '498Spx',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors:{
        primaryDark: '#1E293B',
        secondaryDark: '#323B48',
      },
      height: {
        'sidebar': 'calc(100vh - 4rem)',
      },
      overflowY: {
        'auto': 'auto',
      },
      // Define a new utility class for hiding the scrollbar
      utilities: {
        '.hide-scrollbar': {
          /* WebKit */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* Firefox */
          'scrollbarWidth': 'none',
        },
      },
    },
  },
  plugins: [],
  darkMode: "class"
}

