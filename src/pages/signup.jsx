import React from "react";
import axios from "axios";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Signup()
{

return(
<>
<Header/>
<div className="bg-back p-6 text-xl text-center font-bold">
    Register
</div>
<div className="flex justify-center">
<div className="border border-back rounded-lg outline-none shadow-sm p-6 mt-8 w-2/4 ">

    <form>
    <label htmlFor="" className="form-label">Name</label><br/>
<input type="text" className="form-control mt-3" placeholder="Name"/><br/><br/>

    <label htmlFor="" className="form-label">Username</label><br/>
<input type="text" className="form-control mt-3" placeholder="Username"/><br/><br/>

<label htmlFor="" className="form-label">Password</label><br/>
<input type="password" className="form-control mt-3" placeholder="Password"/><br/><br/>

<label htmlFor="" className="form-label">Role</label>
<select  className="form-control mt-3" placeholder="Password">
<option value="">Company</option>
<option value="">Job-Seeker</option>
</select>

<input type="submit" value="Create Account" className="bg-primary mt-10 p-3 w-full text-white cursor-pointer rounded-lg font-semibold hover:bg-[#0e5949]"/>

    </form>
</div>
</div><br/><br/>
<Footer/>
</>
)
}