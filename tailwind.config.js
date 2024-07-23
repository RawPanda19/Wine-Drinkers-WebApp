/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}',
        "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],
    theme: {
        listStyleType: {
            none: 'none',
            disc: 'disc',
            decimal: 'decimal',
            square: 'square',
            roman: 'upper-roman'
        },
        extend: {
            colors: {
                'white': '#FEFCFB',
                'lightblue': '#1282A2',
                'blue': '#034078',
                'blue-er': '#001F54',
                'darkblue': '#0A1128',
                'player_red': '#FF333C',
                'player_blue': '#1EA7E3',
                'line': '#8B9AAE',
                'bgInput': '#EFEEEE',
                // The colours below are what ChatGPT gave me after asking for a colour palette
                'main_pink': '#FFB6C1',
                'second_pink': '#E6A8B8',
                'third_pink': '#FF007F',
                'dark_pink': 'rgb(214, 31, 105)',
                'gray': '#808080',
                'burgundy': '#800020',
                'gold': '#FFD700',
                'beige': '#F5F5DC'
            }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ]
};