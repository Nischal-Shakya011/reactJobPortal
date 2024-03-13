import axios from "axios";
import React from "react";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export default function GetProfile() {
    const [profile, setProfile] = useState([])
    useEffect(()=>{
       axios.get("https://express-job-portal-u1uo.vercel.app/api/profile", 
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
    Profile
</div>
        <div className="container border border-back shadow-lg w-full p-10 rounded-lg mt-6">
            <div className="grid grid-cols-2 gap-12">
                <div>
                    <div className="border border-back shadow-sm p-3 rounded-md">
                    <div className="flex gap-12">
                    <span ><FaRegUser className="inline text-5xl" /></span>
                    <div className="grid">
                    <span className="text-lg font-semibold">{profile.name}</span>
                    <span className="text-gray-600"><MdEmail className="inline" />  {profile.email}</span>
                    </div>
                    </div>
                    </div>
                    <div className="grid gap-5 border border-back shadow-sm p-3 rounded-md mt-6">
                        <div className="flex gap-4">
                        <span><CiLocationOn className="inline text-3xl font-bold"/></span>
                          <div className="grid">
                        <span className="font-semibold">Location</span>
                        <span>{profile.address}</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                        <span><MdEmail className="inline text-3xl font-bold"/></span>
                          <div className="grid">
                        <span className="font-semibold">Email</span>
                        <span>{profile.email}</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                        <span><FaPhoneAlt className="inline text-3xl font-bold"/></span>
                          <div className="grid">
                        <span className="font-semibold">Contact Number</span>
                        <span>{profile.contact_no}</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                        <span><LuGraduationCap className="inline text-3xl font-bold"/></span>
                          <div className="grid">
                        <span className="font-semibold">Experience</span>
                        <span>{profile.experience}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="border border-back shadow-sm p-6 rounded-md">
                        <p className="font-semibold text-lg">Prefered Job</p>
                        <span className="text-lg">{profile.prefered_job}</span>
                    </div>
                    <div className="border border-back shadow-sm p-6 rounded-md mt-6">
                        <p className="font-bold text-lg">Education</p>
                        <p className="text-lg"><span className="font-semibold">University: </span>{profile.university}</p>
                        <p className="text-lg"><span className="font-semibold">Study Field: </span>{profile.field_of_study}</p>
                        <p className="text-lg"><span className="font-semibold">Degree: </span>{profile.degree}</p>
                    </div>
                    <div className="border border-back shadow-sm p-6 rounded-md mt-6">
                        <p className="font-bold text-lg">Experience</p>
                        <p className="text-lg"><span className="font-semibold">Organization: </span>{profile.organization}</p>
                        <p className="text-lg"><span className="font-semibold">Job Level: </span>{profile.job_level}</p>
                        {/* <p className="text-lg"><span className="font-semibold">Roles and Responsibility</span>{profile.roles}</p> */}
                        <p className="text-lg"><span className="font-semibold">Experience: </span>{profile.experience}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <Footer className="footer"/>
        </div>
        </>
    )
}