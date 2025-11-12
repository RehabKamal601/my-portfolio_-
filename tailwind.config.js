/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#ffffff",
        wheat: {
          50: '#fdfaf6',
          100: '#fbf3e6',
          200: '#f6e6cc',
          300: '#efcf99',
          400: '#e6b966',
          500: '#d9a83a',
          600: '#b07d2e',
          700: '#885f25',
          800: '#6b4a1c',
          900: '#4d3513'
        },
        accent: '#7B00D3',
        accentDark: '#4f0099',
        muted: '#6b6b6b'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      animation: {
        roll: "roll 24s linear infinite"
      },
      keyframes: {
        roll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" }
        }
      }
    },
  },
  plugins: [],
}
