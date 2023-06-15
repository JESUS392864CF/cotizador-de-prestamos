/// Ya no es necesario importar de esta forma en las nuevas versiones de react
//* import React  from "react";

import Header from "./components/Header";



function App() {
    
   //! Asi renderízamos este componente para este tipo de componente se usa la primera
    return (
        <div className='my-20 max-w-lg mx-auto bg-white shadow p-10'>
            <Header />
        </div>
    );
}

export default App;
