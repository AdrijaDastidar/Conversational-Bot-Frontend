/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  './pages/**/*.{js,jsx}',
	  './components/**/*.{js,jsx}',
	  './app/**/*.{js,jsx}',
	  './src/**/*.{js,jsx}',
	],
	theme: {
	  extend: {
		animation: {
		  'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
		},
	  },
	},
	plugins: [require('tailwindcss-animate'), require('tailwind-scrollbar')],
  }
  
  