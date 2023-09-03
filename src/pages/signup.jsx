import React, { useState } from "react";
import axios from "axios";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Signup()
{
    let [name, setName] = useState("")
    let [password, setPassword] = useState("")
    let [email, setEmail] = useState("")
    let [error, setError] = useState({

    })


function handleSubmit(e)
{
    e.preventDefault();

    let validation = true;
    let temp = {}
    
    if(!name){
        temp.name = "this is required field";
        validation = false;
    }
    if(!email){
        temp.email = "this is required field";
        validation = false;
    }
    if(!password){
        temp.password = "Please enter password";
        validation = false;
    }
    
    setError(temp)

if(validation){
    axios.post("https://express-job-portal-u1uo.vercel.app/api/signup", {
        "name":name,
        "email":email,
        "password":e.target.password.value,
        "role":e.target.role.value
    })

    .catch(err=>{
        console.log(err);
    })
}
   
}


return(
<>
<Header/>
<div className="bg-back p-6 text-xl text-center font-bold">
    Register
</div>
<div className="flex justify-center">
<div className="border border-back rounded-lg outline-none shadow-sm p-6 mt-8 w-2/4 ">

    <form onSubmit={handleSubmit}>
    <label htmlFor="" className="form-label">Name</label><br/>
<input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)} className="form-control mt-3" placeholder="Name"/>
{ 
  error
  &&
  <small className="text-red-600">this is required field</small>

}


<br/><br/> <label htmlFor="" className="form-label">Email</label><br/>
<input type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="form-control mt-3" placeholder="Email"/>
{
    error
    &&
    <small className="text-red-600">{error.email}</small>
}

<br/><br/><label htmlFor="" className="form-label">Password</label><br/>
<input type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="form-control mt-3" placeholder="Password"/><br/><br/>
{
      error
      &&
      <small className="text-red-600">{error.password}</small>
}


<label htmlFor="" className="form-label">Role</label>
<select  className="form-control mt-3"  name="role">
<option value={"company"}>Company</option>
<option value={"job-seeker"}>Job-Seeker</option>
</select>

<input type="submit" value="Create Account" className="bg-primary mt-10 p-3 w-full text-white cursor-pointer rounded-lg font-semibold hover:bg-[#0e5949]"/>

    </form>
</div>
</div><br/><br/>
<Footer/>
</>
)
}