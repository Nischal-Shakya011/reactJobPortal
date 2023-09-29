import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Signup()
{
    const router = useRouter()
    let [name, setName] = useState("")
    let [password, setPassword] = useState("")
    let [email, setEmail] = useState("")
    let [error, setError] = useState({

    })
    let [isSubmitting, setisSubmitting] = useState(false)


function handleSubmit(e)
{
    e.preventDefault();

    let validation = true;//not to let server call if field is empty
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
    setisSubmitting(true)
    axios.post("https://express-job-portal-u1uo.vercel.app/api/signup", {
        "name":name,
        "email":email,
        "password":password,
        "role":e.target.role.value
    })
    .then(res => {
        setisSubmitting(false)

router.push("/login")
    })

    .catch(err=>{
        setisSubmitting(false)

        console.log(err);
        let temp = {}
          if (err.response.data.errors && err.response.data.errors?.length > 0) {
            err.response.data.errors.forEach(indi_error => {
              temp[indi_error.params] = indi_error.msg
            })

            setError(temp)
          }
        
    })
}
   
}


return(
<>
<div className="bg-back p-6 text-xl text-center font-bold">
    Register
</div>
<div className="flex justify-center">
<div className="border border-back rounded-lg outline-none shadow-sm p-6 mt-8 w-2/4 ">

    <form onSubmit={handleSubmit}>
    <label htmlFor="" className="form-label">Name</label><br/>
<input type="text" name="name" value={name} onChange={(e)=>{
     setName(e.target.value)
    if(e.target.value)
    {
        setError({...error, name:""})
    }
    else{
        setError({...error, name:"this is required field"})
    }
}} 
className="form-control mt-3" placeholder="Name"/>
{ 
  error
  &&
  <small className="text-red-600">{error.name}</small>

}


<br/><br/> <label htmlFor="" className="form-label">Email</label><br/>
<input type="email" name="email" value={email} onChange={(e)=> {
    setEmail(e.target.value)

 if(e.target.value)
 {
     setError({...error, email:""})
 }
 else{
     setError({...error, email:"this is required field"})
 }
}} 
className="form-control mt-3" placeholder="Email"/>
{
    error
    &&
    <small className="text-red-600">{error.email}</small>
}

<br/><br/><label htmlFor="" className="form-label">Password</label><br/>
<input type="password" name="password" value={password} onChange={(e)=>{
setPassword(e.target.value)

if(e.target.value)
 {
     setError({...error, password:""})
 }
 else{
     setError({...error, password:"please enter password"})
 }
}} className="form-control mt-3" placeholder="Password"/>
{
      error
      &&
      <small className="text-red-600">{error.password}</small>
}


<br/><br/><label htmlFor="" className="form-label">Role</label>
<select  className="form-control mt-3"  name="role">
<option value={"company"}>Company</option>
<option value={"job-seeker"}>Job-Seeker</option>
</select>

<input disabled={isSubmitting} type="submit" value="Create Account" className="bg-primary mt-10 p-3 w-full text-white cursor-pointer rounded-lg font-semibold hover:bg-[#0e5949] disabled:bg-green-200"/>

<br/><br/><p className="text-center">Already a user? <Link href={"/login"} className="font-bold">Login</Link></p>

    </form>
</div>
</div><br/><br/>
{/* <Footer/> */}
</>
)
}