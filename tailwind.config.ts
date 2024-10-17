import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
          "--rounded-btn": "12px", // border radius rounded-btn utility class, used in buttons and similar element
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
