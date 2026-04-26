import {useState} from 'react';
import axios from 'axios';


function Signup({switchToLogin}) {
    const[name,setName]=useState('');
    const[email,setEmail]=useState(''); 
    const[password,setPassword]=useState('');
    const handlesignup=async(e)=>{
        e.preventDefault();
        try{
        const response= await axios.post('http://localhost:5000/signup',{name,email,password});
        alert('User registered successfully');
        }
        catch(error){
            if(error.response){
                alert(error.response.data.message);
            }
            
        }
    };
return(

<div className="row vh-100">

<div className="col-md-6 bg-success text-white d-flex justify-content-center align-items-center">
<div>
<h1 className="md-4">AI Smart Campus Assistant</h1>
<h1>Create Account</h1>
<p>Join our community of students and faculty!</p>
</div>
</div>


<div className="col-md-6 bg-dark d-flex justify-content-center align-items-center">

<div className="card shadow-lg p-4 rounded-4" style={{width:"400px"}}>

<h2 className="text-center mb-4">
Sign Up
</h2>

<form onSubmit={handlesignup}>

<div className="mb-4">
<label>Name</label>
<input type="text" className="form-control" onChange={(e)=>setName(e.target.value)}/>
</div>

<div className="mb-3">
<label>Email</label>
<input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
</div>

<div className="mb-3">
<label>Password</label>
<input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
</div>

<button className="btn btn-success w-100" >
Register
</button>

<p className="text-center mt-3">
Already registered?
<button
type="button"
className="btn btn-link"
onClick={switchToLogin}
>
Login
</button>
</p>

</form>

</div>

</div>

</div>

)

}

export default Signup