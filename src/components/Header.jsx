//* La extension tiene que ser jsx en vite


//! Los componentes se declaran en mayúsculas
function Header() {
    return (
        <h1 className='text-4xl font-extrabold text-gray-500 text-center'>
            ¿Cuanto <span className='text-indigo-600'>dinero </span> necesitas?
        </h1>
    );
}

//* Para utilizarlo
export default Header;