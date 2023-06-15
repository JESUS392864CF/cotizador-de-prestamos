/// El archivo más impotente de react
//! Este es el archivo principal el que se encarga de importar react, de montarlo en el HTML y de agregar todos los componentes

//* Importa React
import React from 'react'
//* Importa ReactDOM es la versión de react que se utiliza en la parte de HTML
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//* Se importa la hoja de estilos
import './index.css'


/// Esta es la forma de renderizar componentes en react
ReactDOM.createRoot(document.getElementById('root')).render( //- Aca busca un elemento HTML con el id de root
  //- y agrega aquí nuestra aplicación
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

