import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
import {AiFillEye, AiFillDelete} from 'react-icons/ai'
import {AiFillEdit} from 'react-icons/ai'
import { useRouter } from "next/router";


export default function Jobs(){
   const router = useRouter();
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
        //    console.log(res.data[0]);
           setJobs(res.data)
         
        })
        }
       catch(err){
        console.log(err);
       }
    };
    
    fetchJobs();
    },[])

    const handleDelete = async (jobId) => {
        console.log(jobId);
        if (window.confirm('Are you sure you want to delete this job?')) {
    
          try {
            await axios.delete(`https://express-job-portal-u1uo.vercel.app/api/jobs/${jobId}`, {
              headers: {
                Authorization: 'bearer ' + localStorage.getItem('access_token'),
              },
            });
            // alert('Job deleted successfully');
router.push("./delete")
            // You can also navigate to another page or update the UI as needed
          }
           catch (error) {
            console.log('Error deleting job:', error);
            alert('Error deleting job: ' + error.message); 
          } 
        }
    }

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
       <div key={job._id} className="grid grid-cols-5 border-back border-b-2 h-20 p-6 shadow-sm" >
        <span>{job.name}</span>
        <span>{datePart}</span>
        <span>{dateCreate}</span>
        <span>{job.offered_salary}</span>
        <span className="flex gap-4">
        <Link href={`/company/${job._id}`}>See</Link>
        <Link href={`/${job._id}`}><AiFillEye/></Link>
        <Link href={`/company/edit/${job._id}`}><AiFillEdit/></Link>
        <span onClick={()=>handleDelete(job._id) } className="cursor-pointer"><AiFillDelete/></span>
        </span>
        
        {/* <span>action</span> */}
       </div>
        </>
    })
    }
        </div>
</div>

    </div>
    <Footer className="footer"/>
    </div>
    </>
}