/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        listStyleType: {
            none: 'none',
            disc: 'disc',
            decimal: 'decimal',
            square: 'square',
            roman: 'roman'
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
                'line': '#8B9AAE'
            }
        },
    },
    plugins: []
};