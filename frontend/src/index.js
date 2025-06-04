import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import React from 'react'
import { createRoot } from 'react-dom/client'
import 'react-multi-carousel/lib/styles.css'
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'
const root = createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
