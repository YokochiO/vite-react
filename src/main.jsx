import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './assets/css/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HashRouter basename={import.meta.env.BASE_URL}>
            <App />
        </HashRouter>
    </React.StrictMode>
)
