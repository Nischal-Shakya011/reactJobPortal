import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import {AiFillEye} from 'react-icons/ai'

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Applied(){
    const [apply, setApply] = useState([])

    useEffect(()  =>{
        axios.get("https://express-job-portal-u1uo.vercel.app/api/apply",
        {
                     headers: {
                        Authorization: "bearer " + localStorage.getItem("access_token")
                    }
        })
        .then((res) =>{
        console.log(res);
        setApply(res.data)
        })   
     },[])


    return<>
<Header/>
<div className="bg-back p-6 text-xl text-center font-bold">
    Applied Jobs
</div>
<div className="container">
<table className="border-2 border-back rounded-lg outline-none shadow-sm p-3 w-full mt-3">
            <div className="grid grid-cols-5 border-black border-b-2 h-16 p-6">
            
                <span>Title</span>
                <span>Deadline</span>
                <span>Applied Date</span>
                <span>Offered Salary</span>
                <span>Action</span>

            </div>
            {
    apply.map(app =>{
        // return <div>{app.jobs[0].name}</div>
        const part = app.jobs[0].deadline.split('T')
        const datePart = part[0]

        const create = app.createdAt.split('T')
        const dateCreate = create[0]

        return<>
       <div className="grid grid-cols-5 border-back border-b-2 h-20 p-6" >
        <span>{app.jobs[0].name}</span>
        <span>{datePart}</span>
        <span>{dateCreate}</span>
        <span>{app.jobs[0].offered_salary}</span>
        <Link href={`/${app.jobs[0].job_id}`}><AiFillEye/> View</Link>
       </div>
        </>
    })
    }
        </table>
</div>

    
    <Footer/>
    </>
}