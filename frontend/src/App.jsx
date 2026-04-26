import {useState} from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'

function App(){

const [page,setPage]=useState('Login');

return(
<div>

{page==='Login' && <Login switchToSignup={()=>setPage('Signup')}
switchToDashboard={()=>setPage('Dashboard')}
/>}

{page==='Signup' && <Signup switchToLogin={()=>setPage('Login')} />}

{page==='Dashboard' && <Dashboard switchToLogin={()=>setPage("Login")}/>}

</div>

)}

export default App