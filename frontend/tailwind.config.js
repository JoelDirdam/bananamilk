/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
        'sanggar': ['Sanggar', 'serif'],
        'winkle': ['Winkle', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
        }
      },
      colors: {
        'login': {
          DEFAULT: '#8BD7E1',
        },
        'contact': {
          DEFAULT: '#FFD146',
        },
        'wishlist1': {
          DEFAULT: '#FFAFE3',
        },
        'wishlist2': {
          DEFAULT: '#FFB8CB',
        },
        'order1': {
          DEFAULT: '#D7A9E5',
        },
        'order2': {
          DEFAULT: '#7AA9FF',
        },
        'contact1': {
          DEFAULT: '#FFD146',
        },
        'contact2': {
          DEFAULT: '#FF9696',
        },
        'banana-milk-text': {
          DEFAULT: '#FFB8CB',
          dark: '#FC589A',
          light: '#FFDEE7',
        },
      },
      backgroundImage: {
        'hbg1': "url('/src/assets/home/section1/bg1.png')",
        'hbg4': "url('/src/assets/home/section4/bg4.png')",
        'hbg5': "url('/src/assets/home/section5/bg5-1.png')",
      },
    },
  },
  plugins: [
  ],
}