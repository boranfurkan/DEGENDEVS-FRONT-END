import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FF9277",
          200: "#FF4A1D",
          300: "#992C11",
          400: "#330F06",
        },
        "muted-grey": "#717171",
        cream: "#FFE5DE",
        brown: "#292019",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
