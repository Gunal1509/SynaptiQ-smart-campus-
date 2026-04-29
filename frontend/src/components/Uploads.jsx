import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Uploads=()=>{
    const navigate=useNavigate();
    const[fileName,setFileName]=useState("");
    const[email,setEmail]=useState("");
    const[userId,setUserId]=useState('')
    const[fileType,setFileType]=useState('')
    const[file,setFile]=useState(null);
    const [showToast,setShowToast]=useState(false)
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append("fileName",fileName);
        formData.append("email",email);
        formData.append("userId",userId);
        formData.append("fileType",fileType);
        formData.append("file",file);
        try{
            await axios.post(
'http://localhost:8000/upload',
formData
)
      setShowToast(true);
      setTimeout(()=>{setShowToast(false)},3000)
    }
    catch(err){
        console.error(err);
        alert("Error uploading file");
    }
}
    return(
         <div className="bg-success min-vh-100">
        {showToast && (<div className="toast show position-fixed end-0 m-4 text-white"
style={{top:"80px",backgroundColor:"#282525fe"}}>

<div className="toast-body rounded-3">

    File uploaded successfully
    <button
className="btn-close btn-close-white ms-3"
onClick={()=>setShowToast(false)}>
</button>

</div>

</div>

)}
<nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
    <div className="d-flex gap-2">
        <button      
        className="btn btn-outline-light"
        onClick={()=>navigate('/dashboard')}
        >previous</button>
        </div>
</nav>
    
     <div className="container pt-5">

<div className="card shadow p-4 rounded-4 mx-auto"
style={{width:"500px"}}
>

<h2 className="text-center mb-4">
Upload Form
</h2>

<form onSubmit={handleSubmit} className="needs-validation mt-5 pt-5" noValidate>

<div className="mb-3">
<label className="form-label">
Name of the file
</label>

<input
type="text"
className="form-control"
onChange={(e)=>setFileName(e.target.value)}
/>
</div>


<div className="mb-3">
<label className="form-label">
Email
</label>

<input
type="email"
className="form-control"
onChange={(e)=>setEmail(e.target.value)}
/>
</div>
<div className="mb-3">
<label className="form-label">
    User ID
</label>
<input 
type="text"
className="form-control"
onChange={(e)=>setUserId(e.target.value)}
/>
</div>
<div className="mb-3">

<label className="form-label">
File Type
</label>

<select className="form-select" onChange={(e)=>setFileType(e.target.value)}>

<option value="">
Select file type
</option>

<option value="pdf">
PDF
</option>

<option value="docx">
DOCX
</option>

<option value="txt">
TXT
</option>
<option value="pptx">
PPTX
</option>
<option value="others">
    Others
</option>
</select>

</div>
<div className="mb-3">
<label className="form-label">
Upload PDF
</label>

<input
type="file"
className="form-control"
onChange={(e)=>setFile(e.target.files[0])}
/>
</div>


<button className="btn btn-primary w-100">
Submit
</button>

</form>

</div>

</div>
</div>
    )

}
export default Uploads;