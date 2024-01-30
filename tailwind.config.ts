import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "modal-open": {
          "0%": { transform: "scale(0%)" },
          "10%": { transform: "scale(10%)" },
          "20%": { transform: "scale(20%)" },
          "30%": { transform: "scale(30%)" },
          "40%": { transform: "scale(40%)" },
          "50%": { transform: "scale(50%)" },
          "60%": { transform: "scale(60%)" },
          "70%": { transform: "scale(70%)" },
          "80%": { transform: "scale(80%)" },
          "90%": { transform: "scale(90%)" },
          "100%": { transform: "scale(100%)" },
        },
      },
      animation: {
        "modal-open": "modal-open .3s linear",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
