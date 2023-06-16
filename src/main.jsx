import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


/// Esta es la forma de renderizar componentes en react
ReactDOM.createRoot(document.getElementById('root')).render(
  //! Para ello de quita el modo estricto de react 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

