import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Props from './Proto'



ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <Props title="s" descripton="Soy la prop description" value={`soy la prop value: ${1+1}`} />
    </React.StrictMode> 
)