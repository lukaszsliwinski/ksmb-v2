/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
    theme: {
        minHeight: {
            'screen/2': '50vh',
            'screen': '100vh',
        },
        extend: {
            height: {
                'screen/3': '33.33vh',
                'screen/2': '50vh',
                '2screen/3': '66.66vh',
            },
        },
    },
    plugins: [
        require('tw-elements/dist/plugin')
    ],
}
