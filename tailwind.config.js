/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          "50": '#e5f4ff',
          "100": '#bfe4ff',
          "200": '#94d2ff',
          "300": '#69c0ff',
          "400": '#48b3ff',
          "500": '#28a5ff',
          "600": '#249dff',
          "700": '#1e93ff',
          "800": '#188aff',
          "900": '#0f79ff',
        },
      }
    },
  },
  plugins: [],
}
