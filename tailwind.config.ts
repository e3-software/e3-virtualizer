import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        cerulean: {
          '50': '#f0fbff',
          '100': '#e0f6fe',
          '200': '#baeefd',
          '300': '#7ee2fb',
          '400': '#39d5f7',
          '500': '#0fc0e8',
          '600': '#03a6d3',
          '700': '#047ca0',
          '800': '#086884',
          '900': '#0c566e',
          '950': '#083749',
        },
        astral: {
          '50': '#f1f8fa',
          '100': '#dbecf2',
          '200': '#bbdae6',
          '300': '#8bbed5',
          '400': '#559bbb',
          '500': '#3c85a9',
          '600': '#326788',
          '700': '#2e5670',
          '800': '#2d495d',
          '900': '#293e50',
          '950': '#172735',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
export default config;
