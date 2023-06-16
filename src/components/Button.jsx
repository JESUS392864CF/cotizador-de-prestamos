//! Pasando props desde donde se esta usando el componente, para renderizar componentes más dinámicos
const Button = ({ operador, handleClickOperation }) => {
    /// Se puede hacer destructuring desde aca por que es un array y ya no hay que poner props.operador sino solo operador
    //! Es un array al cual se le pueden asignar multiple elementos como desees
    // console.log(props);
    return (
        <button
            type='button'
            className='h-10 w-10 flex items-center justify-center font-bold text-white
                    text-2xl bg-lime-500 rounded-full hover:outline-none hover:ring-2
                    hover:ring-offset-2 hover:ring-lime-500'
            onClick={() => handleClickOperation(operador)}
        >
            {operador}
        </button>
    );
};

export default Button;
