//! Importándolo
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Button from './components/Button';
import { formatMoney, calculateTotalPay } from './helpers';

function App() {
    const [cantidad, setCantidad] = useState(10000);
    const [months, setMonths] = useState(6);
    const [totalPay, setTotalPay] = useState();
    const [PayMonthly, setPayMonthly] = useState(0);

    useEffect(() => {
        const resultTotalPay = calculateTotalPay(cantidad, months);
        setTotalPay(resultTotalPay);
    },[cantidad, months]);
    //! o SE PUEDE DIVIDIR DE ESTA FORMA POR QUE CUANDO SE TIENE UN ARRAY MUY GRANDE DE DEPENDENCIAS EL USE EFFECT SE ESTARÁ EJECUTANDO TODO EL TIEMPO 
    useEffect(()=>{
        /// Calcular pago mensual
        setPayMonthly(totalPay / months);
    },[totalPay]);

    const MIN = 0;
    const MAX = 20000;
    const STEP = 100;

    function handleChange(e) {
        setCantidad(Number(e.target.value));
    }

    function handleClickOperation(value) {
        let valor = 0;

        if (value === '+') {
            valor = cantidad + STEP;
            if (valor > MAX) {
                alert('Cantidad no valida');
                return;
            }
        }

        if (value === '-') {
            valor = cantidad - STEP;
            if (valor < MIN) {
                alert('Cantidad no valida');
                return;
            }
        }

        setCantidad(valor);
    }

    

    //! Bueno operador seria el nombre del props y se le accina el valor de una
    return (
        <div className='my-20 max-w-lg mx-auto bg-white shadow p-10'>
            <Header />

            <div className='flex justify-between my-6'>
                <Button
                    operador={'-'}
                    handleClickOperation={handleClickOperation}
                />
                <Button
                    operador='+'
                    handleClickOperation={handleClickOperation}
                />
            </div>

            <input
                type='range'
                className='w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600'
                onChange={handleChange}
                min={MIN}
                max={MAX}
                step={STEP}
                value={cantidad}
            />

            <p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>
                {formatMoney(cantidad)}
            </p>

            <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
                Elige un <span className='text-indigo-600'>Plazo</span> a pagar
            </h2>

            <select
                className='mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500'
                value={months}
                onChange={e => setMonths(+e.target.value)}
            >
                <option value='6'>6 Meses</option>
                <option value='12'>12 Meses</option>
                <option value='24'>24 Meses</option>
            </select>

            <div className='my-5 space-y-3 bg-gray-50 p-5'>
                <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
                    Resumen <span className='text-indigo-600'>de pagos</span>
                </h2>

                <p className='text-xl text-gray-500 text-center font-bold'>{months} Meses</p>
                <p className='text-xl text-gray-500 text-center font-bold'>Total a pagar: {formatMoney(totalPay)}</p>
                <p className='text-xl text-gray-500 text-center font-bold'>{formatMoney(PayMonthly)} Mensuales</p>

            </div>
        </div>
    );
}

export default App;
