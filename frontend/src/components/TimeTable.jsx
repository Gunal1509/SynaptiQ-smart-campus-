import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const TimeTable=()=>{
    const navigate = useNavigate();
    return(
        <div className="bg-success min-vh-100">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <div className="d-flex gap-2">
        <button      
        className="btn btn-outline-light"
        onClick={()=>navigate('/dashboard')}
        >previous</button>
        </div>
        <div className="ms-auto d-flex gap-2">
<button className="btn btn-outline-light"onClick={()=>navigate('/dashboard')}>
home
</button>
</div>
        </nav>
        <div className="container pt-5">
            <h1 className="text-center fw-bold text-white">
                 Time Table
            </h1>
            <div className="table-responsive">
<div className="card shadow rounded-4 p-3">
<table className="table table-bordered table-hover table-striped text-center bg-white rounded">

<thead className="table-dark">
<tr>
<th>TimeTable</th>
<th>Semester</th>
<th>Section</th>
<th>Download</th>
</tr>
</thead>

<tbody>

<tr>
<td>Timetable</td>
<td>5</td>
<td>A</td>
<td>
<button className="btn btn-primary btn-sm">
Download
</button>
</td>
</tr>

<tr>
<td>Timetable</td>
<td>4</td>
<td>A</td>
<td>
<button className="btn btn-primary btn-sm">
Download
</button>
</td>
</tr>

<tr>
<td>Timetable</td>
<td>3</td>
<td>A</td>
<td>
<button className="btn btn-primary btn-sm">
Download
</button>
</td>
</tr>

<tr>
<td>Timetable</td>
<td>2</td>
<td>A</td>
<td>
<button className="btn btn-primary btn-sm">
Download
</button>
</td>
</tr>

<tr>
<td>Timetable</td>
<td>1</td>
<td>A</td>
<td>
<button className="btn btn-primary btn-sm">
Download
</button>
</td>
</tr>

</tbody>

</table>
</div>
</div>

        </div>
        </div>
    )
}
export default TimeTable;