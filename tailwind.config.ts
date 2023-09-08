import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        "custom1": "#525252",
        "custom2": "#414141",
        "custom3": "#313131",
        "custom4": "#EC625F"
      }
    },
  },
  plugins: [],
} satisfies Config

