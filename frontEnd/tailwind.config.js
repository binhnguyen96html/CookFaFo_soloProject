/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      height: {
        100: "35rem",
        "100vh": "180vh",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
