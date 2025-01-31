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
                'line': '#8B9AAE',
                'bgInput': '#EFEEEE',
                // The colours below are what cooler.co suggested for the website and thus saved
                'main': '#d741a7',
                'header': '#3a1772',
                'header_text': '#5398be'
            }
        },
    },
    plugins: []
}; 