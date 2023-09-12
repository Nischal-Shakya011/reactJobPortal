import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Signup()
{
    let [password, setPassword] = useState("")
    let [email, setEmail] = useState("")
    let [error, setError] = useState("")
    let [indi_error, setIndiError] = useState({

    })


function handleSubmit(e)
{
    e.preventDefault();

    let validation = true;//not to let server call if field is empty
    let temp = {}
    if(!email){
        temp.email = "this is required field";
        validation = false;
    }
    if(!password){
        temp.password = "please enter password";
        validation = false;
    }
    setIndiError(temp)
    

if(validation){
    axios.post("https://express-job-portal-u1uo.vercel.app/api/login", {
        "email":email,
        "password":password,
    })
    .then(res=>{

    })

    .catch(err=>{
        console.log(err);
         setError(err.response.data.msg)
        
    })
}
   
}


return(
<>
<Header/>
<div className="bg-back p-6 text-xl text-center font-bold">
    Login
</div>
<div className="flex justify-center">
<div className="border border-back rounded-lg outline-none shadow-sm p-6 mt-8 w-2/4 ">

    <form onSubmit={handleSubmit}>
 {
    error
    &&
    <p className="bg-red-400 text-white text-center p-3 rounded-lg">{error}</p>
 }

<label htmlFor="" className="form-label">Email</label><br/>
<input type="email" name="email" value={email} onChange={(e)=> {
    setEmail(e.target.value) 
    if(e.target.value)//to remove error message when changing the field
    {
        setIndiError({...indi_error, email:""})
    }
    else{
        setIndiError({...indi_error, email:"this is required field"})
    }
}} 
className="form-control mt-3" placeholder="Email"/>
{
indi_error
&&
<small className="text-red-600">{indi_error.email}</small>
}



<br/><br/><label htmlFor="" className="form-label">Password</label><br/>
<input type="password" name="password" value={password} onChange={(e)=>{
setPassword(e.target.value)
if(e.target.value)
{
    setIndiError({...indi_error, password:""})
}
else{
    setIndiError({...indi_error, password:"please enter password"})
}
}} className="form-control mt-3" placeholder="Password"/>
{
indi_error
&&
<small className="text-red-600">{indi_error.password}</small>
}

<input type="submit" value="Login" className="bg-primary mt-10 p-3 w-full text-white cursor-pointer rounded-lg font-semibold hover:bg-[#0e5949]"/>
<br/><br/><p className=" text-center">Not a Member?  <Link href={"/signup"} className="font-bold text-center"> Register</Link></p>
    </form>
</div>
</div><br/><br/>
<Footer/>
</>
)
}