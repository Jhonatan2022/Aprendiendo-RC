// Importamos React de react
import React from 'react'

// Importamos la funcion createRoot de react-dom/client
import ReactDOM from 'react-dom/client'

// Importamos la aplicacion
import App from './App'

// Importamos los estilos globales
import './index.css'

// Importamos los componentes globales
import { TaskContextProvider } from './context/TaskContext'



// Renderizamos la aplicacion
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <TaskContextProvider>
    <App />
    </TaskContextProvider>

  </React.StrictMode>,
)
