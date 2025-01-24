import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: "400px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1700px",
      "4xl": "1880px",
    },
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "20px"],
      lg: ["18px", "22px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "32px"],
      "4xl": ["32px", "38px"],
      "5xl": ["40px", "48px"],
      "6xl": ["48px", "58px"],
      "7xl": ["64px", "74px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        jura: ["Jura", "sans-serif"],
        monoton: ["Monoton", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        "noto-sans": ["Noto Sans", "sans-serif"],
      },
      colors: {
        primary: "#3F9EB7",
        indigo: "#251E4E",
        accent: "#ECEEFF",
        bgprimary: "#E6F0FA",
        "primary-20": "#3F9EB72E",
        "dark-gray": "#333333",
        "sky-15": "#3F9EB726",
        "dark-indigo": "#1E183E",
        "dark-indigo-70": "#1E183EB3",
        "deep-indigo": "#1D173D",
        "light-indigo": "#3A2F79",
        "light-mint-green": "#b2fab4",
        "pastel-turquoise": "#a7ffeb",
        "light-peach": "#ffccbc",
        "white-70": "#FFFFFFB3",
        "off-white": "#FCFCFC",
        "ice-blue": "#EDF9FC",
      },
      backgroundImage: {
        default: "url(/bg-default.png)",
        "blue-gradient":
          "radial-gradient(146.52% 386.94% at 23.92% 71.99%, #92B1DC 52.5%, #8F76ED 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.49), rgba(0, 0, 0, 0.49))",
        "indigo-gradient":
          "radial-gradient(157% 182% at 3% -75%, #F7FDFF 0%, #E2E7EE 63.5%, #251E4E 99.22%)",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(calc(-100% + 250px))" },
        },
      },
      animation: {
        scroll: "scroll 15s linear forwards",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
