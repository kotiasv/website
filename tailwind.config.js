/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            textColor: {
                "back": "#0a0a0c"
            },
            backgroundColor: {
                "back": "#0a0a0c",
                "header": "#141414"
            },
            fontFamily: {
                
            },
            screens: {
                "3xl": "1800px",
                "hero": "740px",
                "projects": "1103px"
            }
        },
    },
    plugins: [],
}
