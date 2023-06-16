//! tiene dos ventajas de crear un archivo de funciones 
/// La primera es que no se carga tanto tu componente y va a tener mejor orden
/// Y la segunda es que lo puedes utilizar en diferentes lugares sin necesidad de estar pasándolo por props

const formatMoney = (value) => {

    //* Para formatear el dinero utilizamos una api
    const formatter = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    });

    return formatter.format(value);
};

const calculateTotalPay = (quantity, term) => {
    let total;

    //* Mientras mayor es la cantidad solicitado menor es el interés 
    if (quantity < 5000) {
        total = quantity * 1.5;
    } else if (quantity >= 5000 && quantity < 10000) {
        total = quantity * 1.4;
    } else if (quantity >= 10000 && quantity < 15000) {
        total = quantity * 1.3;
    }else{
        total = quantity * 1.2;
    }

    //* Mas plazo mayor interés
    if ( term === 6 ){
        total = total * 1.1;
    }else if( term === 12){
        total = total * 1.2
    }else{
        total = total * 1.3;
    }

    return total;
}

/// Para exportar multiples funciones
export {
   formatMoney,
   calculateTotalPay
}