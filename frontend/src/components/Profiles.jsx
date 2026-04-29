import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Profiles=({user})=>{
    if(!user)
    {
        return(
            <h2 className="bg-success min-vh-100">
                no user logged in
            </h2>
        )
    }
    return(
        <div>
            <div className=" flex column bg-success min-vh-100">
                <div className="d-inline-block mt-3 ms-4 fw-bold">
                    <h3>
                        Profile
                    </h3>
                </div>
                <div className="card shadow  p-3 rounded-4 mt-5 ms-4 d-inline-block">
          <h2 className="fw-bold">Email Id : {user.email}</h2>
            </div>
        </div>
        </div>
    )
}
export default Profiles
