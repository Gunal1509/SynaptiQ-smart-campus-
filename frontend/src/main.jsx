import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css' 
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {BrowserRouter} from 'react-router-dom'


ReactDOM.createRoot(
document.getElementById('root')
).render(

<BrowserRouter>
<App/>
</BrowserRouter>

)