import axios from "axios";
import React from "react";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useEffect } from "react";


export default function GetProfile() {
    const [profile, setProfile] = useState([])
    useEffect(()=>{
       axios.get("https://express-job-portal-u1uo.vercel.app/api/courses/training/applicants", 
       {
           headers:
           {
               Authorization : "bearer " + localStorage.getItem("access_token")
           }
       })
       .then((res)=>{
           console.log(res.data);
           setProfile(res.data)
       })
    },[])
    return(
        <>
        <div className="wrapper">
            <div>
         <div className="bg-back p-6 text-xl text-center font-bold">
    Registered Applicants
</div>
        <div className="container border border-back shadow-lg w-full p-10 rounded-lg mt-6 grid grid-cols-2 gap-12">
            {
                profile.map(prof =>{
                  const date = prof.createdAt.split('T')
                    return<>
                     <div className=" border-2 border-back rounded-lg p-5">
                <p className="text-base font-semibold">Name: {prof.name}</p>
                <p className="text-base font-semibold">Email: {prof.email}</p>
                <p className="text-base font-semibold">Mobile Number: {prof.mobile_no}</p>
                <p className="text-base font-semibold">Selected Course: {prof.selected_course}</p>
                <p className="text-base font-semibold">Message: {prof.message}</p>
                <p className="text-base font-semibold">Registered in: {date[0]}</p>
            </div>
                    </>
                })
            }
           
        </div>
        </div>
        <Footer className="footer"/>
        </div>
        </>
    )
}