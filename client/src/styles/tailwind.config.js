/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "luft-blue": "#1E3A8A", // Substitua pelo código hexadecimal desejado
        "luft-blue-dark": "#1E293B", // Substitua pelo código hexadecimal desejado
      },
    },
  },
  plugins: [],
};
