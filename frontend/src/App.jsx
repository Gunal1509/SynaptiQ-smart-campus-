import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import Uploads from './components/Uploads'
import Profiles from './components/Profiles'
import TimeTable from './components/TimeTable'
import Rag from './components/Rag'
import { useState } from 'react';

import {Routes,Route} from 'react-router-dom'

function App(){
    const[user,setuser]=useState(null);

return(

<Routes>

<Route path="/" element={<Login setuser={setuser}/>}/>

<Route path="/signup" element={<Signup/>}/>

<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/Uploads" element={<Uploads/>}/>
<Route path="/Profiles" element={<Profiles user={user}/>}/>
<Route path="/TimeTable" element={<TimeTable/>}/>
<Route path="/Rag" element={<Rag/>}/>

</Routes>

)

}

export default App