import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
import {AiFillEye} from 'react-icons/ai'




export default function Jobs(){
   
    const [jobs, setJobs] = useState([])

    useEffect(()=>{
    async function fetchJobs(){
        try{
            // let url = "https://express-job-portal-u1uo.vercel.job/api/jobs/posted"

        await axios.get("https://express-job-portal-u1uo.vercel.app/api/jobs/posted",
            {
                headers: {
                    Authorization: "bearer " + localStorage.getItem("access_token")
                }
        })
        .then(res => {
           console.log(res.data[0]);
           setJobs(res.data)
         
        })
        }
       catch(err){
        console.log(err);
       }
    };
    
  

    
    fetchJobs();
    },[])

    return<>
    <div className="wrapper">
        <div>
<div className="bg-back p-6 text-xl text-center font-bold">
    Posted Jobs
</div>
<div className="container">
<div className="border-2 border-back rounded-lg outline-none shadow-sm p-1 w-full mt-3">
            <div className="grid grid-cols-5 border-black border-b-2 h-16 p-6 shadow-md font-bold">
            
                <span>Title</span>
                <span>Deadline</span>
                <span>Posted Date</span>
                <span>Offered Salary</span>
                <span>Action</span>

            </div>
            {
    jobs.map(job =>{
        // return <div>{job.jobs[0].name}</div>
        const part = job.deadline.split('T')
        const datePart = part[0]

        const create = job.createdAt.split('T')
        const dateCreate = create[0]

        return<>
       <div className="grid grid-cols-5 border-back border-b-2 h-20 p-6 shadow-sm" >
        <span>{job.name}</span>
        <span>{datePart}</span>
        <span>{dateCreate}</span>
        <span>{job.offered_salary}</span>
        <Link href={`/${job._id}`}><AiFillEye/></Link>
        {/* <span>action</span> */}
       </div>
        </>
    })
    }
        </div>
</div>

    </div>
    <Footer/>
    </div>
    </>
}