import Img from '../assets/files.png';
import pro from '../assets/profiles.png';
import tim from '../assets/timetable.png';
import rag1 from '../assets/rag1.png';
import {useNavigate} from 'react-router-dom';
function Dashboard() {
    const navigate=useNavigate();
    return(
        <div className="bg-success min-vh-100">
<nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
<div className="d-flex gap-2">
<button
className="btn btn-outline-light dropdown-toggle"
data-bs-toggle="dropdown"
>
☰
</button>
<ul className="dropdown-menu">
<li>
<a className="dropdown-item" href="/dashboard">
Dashboard
</a>
</li>
<li>
<a className="dropdown-item" href="#">
Settings
</a>
</li>
</ul>
<a className="navbar-brand fw-bold" href="#">
CampusCopilot
</a>
</div>

<div className="ms-auto d-flex gap-2">
<button className="btn btn-outline-light"onClick={()=>navigate('/')}>
Logout
</button>
<a className="btn btn-outline-light " href="#">
Profile
</a>
</div>
</nav>

<div className="card p-4 rounded-4 d-inline-block mt-3 ms-4 fw-bold">
<h1> SynapticQ</h1>
<span>
    <p>one portal for all your needs</p>
</span>
</div>
<div className="d-flex align-items-start gap-4 mt-4 ms-4">
<button
className="border-0 bg-transparent p-0"
onClick={()=>navigate('/uploads')}>
<div 
className="card shadow rounded-4 mt-4 ms-4"
style={{width:"290px",backgroundColor:"#006234"}}
>

<img
src={Img}
className="card-img-top"
alt="Syllabus"
/>

<div className="card-body">

<h5 className="card-title fw-bold text-white">
Upload Syllabus
</h5>

<p className="card-text text-white">
Upload your files to share data and notes
</p>
</div>
</div>
</button>

  <button className="border-0 bg-transparent p-0"
onClick={()=>navigate('/Profiles')}>
    <div className="card shadow rounded-4 mt-4 ms-4" style={{width:"290px",backgroundColor:"#006234"}}>
        <img
src={pro}
className="card-img-top"
alt="profile"
/>
<div className="card-body">

<h5 className="card-title fw-bold text-white">
        Profile</h5>

<p className="card-text text-white">Manage your profile and settings</p>

</div>
    </div>
    </button>
    <button className="border-0 bg-transparent p-0"
onClick={()=>navigate('/timetable')}>
    <div className="card shadow rounded-4 mt-4 ms-4" style={{width:"290px",backgroundColor:"#006234"}}>
    <img
src={tim}
className="card-img-top"
alt="profile"/>
<div className="card-body">

<h5 className="card-title fw-bold text-white">
        TimeTable</h5>

<p className="card-text text-white">Manage your timetable with our portal</p>

</div>
    </div>
    </button>
    <button
className="border-0 bg-transparent p-0"
onClick={()=>navigate('/Rag')}>
<div 
className="card shadow rounded-4 mt-4 ms-4"
style={{width:"290px",backgroundColor:"#006234"}}
>

<img
src={rag1}
className="card-img-top"
alt="rag"
/>

<div className="card-body">

<h5 className="card-title fw-bold text-white">
Rag
</h5>

<p className="card-text text-white">
Upload files and ask query from document
</p>
</div>
</div>
</button>

</div>
</div>



    )}
export default Dashboard;