module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'proxima-nova': 'proxima-nova',
        'proxima-nova-condensed': 'proxima-nova-condensed'
      },
      colors: {
        'palette-0': '#95D7AE',
        'palette-1': '#6EC28E',
        'palette-2': '#023047',
        'palette-3': '#048BA8',
        'palette-4': '#F56960',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
