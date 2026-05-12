/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        danger: "#DC2626",
        success: "#16A34A",
        warning: "#CA8A04",
        background: "#F9FAFB",
        card: "#FFFFFF",
        text: "#111827",
        muted: "#6B7280",
      },
    },
  },
  plugins: [],
};
