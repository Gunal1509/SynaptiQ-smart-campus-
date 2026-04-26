function Dashboard({switchToLogin}) {
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
<a className="dropdown-item" href="#">
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
<button className="btn btn-outline-light"onClick={switchToLogin}>
Logout
</button>
<a className="btn btn-outline-light " href="#">
Profile
</a>
</div>
</nav>

<div className="card p-4 rounded-4 d-inline-block mt-3 ms-3 fw-bold">
<h1> SynapticQ</h1>
<span>
    <p>one portal for all your needs</p>
</span>
</div>
</div>


    )}
export default Dashboard;