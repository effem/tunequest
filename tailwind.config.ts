import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({addVariant}) {
      addVariant('progress-unfilled', ['&::-webkit-progress-bar', '&']);
      addVariant('progress-filled', ['&::-webkit-progress-value', '&::-moz-progress-bar']);
    })
  ],
};
export default config;
