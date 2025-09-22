/** @type {import('tailwindcss').Config} */
export default {
content: [
'./index.html',
'./src/**/*.{ts,tsx}',
],
theme: {
extend: {
colors: {
brand: {
50: '#fff6f9',
100: '#ffe8ef',
200: '#ffd0e0',
300: '#ffacc6',
400: '#ff7aa7',
500: '#ff4b89', // raspberry pink
600: '#e93279',
700: '#c21c64',
800: '#97154e',
900: '#7b1441',
},
cream: '#FFF7ED', // warm background
midnight: '#0a0a0a' // accents
},
fontFamily: {
display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
},
boxShadow: {
soft: '0 10px 40px rgba(0,0,0,0.08)'
}
},
},
plugins: [],
}