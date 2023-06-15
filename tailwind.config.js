/** @type {import('tailwindcss').Config} */
export default {
    //! Aca se dice en que archivos vamos a utilizar clases de tailwindcss
    content: [
        './index.html', //* Seleccionamos el index
        './src/**/*.{js,ts,jsx,tsx}', //* estamos escaneando todas las carpetas y archivos de la carpeta src que tienen esta sintaxis {js,ts,jsx,tsx} y los agregamos
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};

