/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#4169e2',
                dark: '#333',
                grayish: '#F0F0F0',
                'grayish-400': '#8F8E91',
                'grayish-600': '#49474D',
            }
        },
    },
    plugins: [],
}