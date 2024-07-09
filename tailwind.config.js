/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./src/**/*.{html,jsx,tsx,js,ts}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite.content()],
}