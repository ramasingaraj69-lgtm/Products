/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src//*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                accent: '#7f0a18ac',
                dark: '#0b0b0b'
            },
            fontFamily: {
                sans: ["Inter", "ui-sans-serif", "system-ui"],
            },
        },
    },
    plugins: [],
}