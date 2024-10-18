import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "brand-primary": {
        50: "#eeedf5",
        100: "#c9c6df",
        200: "#afaacf",
        300: "#8b84b9",
        400: "#8b84b9",
        500: "#524797",
        600: "#4b4189",
        700: "#3a326b",
        800: "#2d2753",
        900: "#221e3f",
      },
      "brand-secondary": {
        50: "#fef6e9",
        100: "#FCE2BC",
        200: "#fbd49c",
        300: "#f9c16e",
        400: "#f8b552",
        500: "#f6a227",
        600: "#e09323",
        700: "#af731c",
        800: "#875915",
        900: "#674410",
      },
      "brand-neutral": {
        50: "#f6f6f7",
        100: "#e4e4e5",
        200: "#d7d7d8",
        300: "#c5c5c6",
        400: "#bababb",
        500: "#a9a9aa",
        600: "#9a9a9b",
        700: "#787879",
        800: "#5d5d5e",
        900: "#474747",
      },
      "brand-negative": "#DE1135",
      "brand-positive": "#0E8345",
      "brand-warning": "#F6BC2F",
      "brand-light-blue": "#EFF4FE",
      "brand-blue": "#175BCC",
      "brand-light-green": "#E7F3EC",
      "brand-green": "#166C3B",
      "brand-light-yellow": "#FEF8EA",
      "brand-yellow": "#E0AB2B",
      "brand-light-red": "#FCE7EB",
      "brand-red": "#BB032A",
      "brand-black": "#000000",
      "brand-white": "#ffffff",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: ".5rem",
        sm: "1rem",
        lg: "1rem",
        xl: "3rem",
        "2xl": "8rem",
      },
    },
    backgroundImage: {
      "hero-bg": "url('/assets/images/hero-bg.png')",
      "hero-bg-overlay":
        "linear-gradient(135deg, rgba(82,71,151,1) 0%, rgba(95,83,171,1) 10%, rgba(247,247,251,1) 100%)",
      "special-offer":
        "linear-gradient(45deg, rgba(184, 107, 248, 1) 0%,  rgba(127, 93, 217, 1) 100%)",
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "22px",
      "3xl": "24px",
      "4xl": "26px",
      "5xl": "28px",
      "6xl": "32px",
      "7xl": "36px",
    },

    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#524797", // primary-500
          "primary-content": "#eeedf5", // primary-50
          secondary: "#faa227", // secondary-500
          "secondary-content": "#fef6e9", // secondary-50
          accent: "#a9a9aa", //neutral-500
          neutral: "#a9a9aa", //neutral-500
          "base-100": "#ffffff",
          "base-200": "#f8fafc", // slate-50
          "base-300": "#f1f5f9", // slate-100
          info: "#175bcc",
          success: "#0e8345",
          warning: "#f6bc2f",
          error: "#de1135",
          //other customizations
          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "4px", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
    ],
  },
};
export default config;
