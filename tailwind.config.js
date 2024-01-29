/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontSize: {
      smaller: [ '10px', '16px' ],
      small : [ '12px', '17px' ],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '2xl': ['36px', '44px'],
      '3xl' : ['64px', '72px']
    },
    colors: {
      'primary' : '#fe716c',
      'secondary' : '#dd3333',
      'white' : '#ffffff',
      'black' : '#000000',
      'gray' : '#555',
      
    },
    extend: {},
  },
  plugins: [
  ],
}

