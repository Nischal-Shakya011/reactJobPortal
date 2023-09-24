import Header from '@/components/Header'
import React from 'react'
import axios from 'axios'
import Link from 'next/link';

import Footer from '@/components/Footer'



export default function SingleJob({job}){
    function handleClick(e){
 e.preventDefault();
 
//    console.log(job);
const requestData = {
    jobs: [{ job_id: job._id }]
    
  };
 
 axios.post("https://express-job-portal-u1uo.vercel.app/api/apply", requestData,

{
             headers: {
                Authorization: "bearer " + localStorage.getItem("access_token")
            }
})

.then(res=>{
console.log("applied");
})
.catch(err=>{
    console.log(err);
})
}
           
    

    return(
        <>
        <div className='bg-[#d7d8d9] p-4 text-center'>
        <p className='text-xl font-bold'>{job.name}({job.job_level})-CompanyName</p>
        </div>
        <div className='text-center'>
           <button className='bg-primary p-3 rounded-lg mt-5 text-white hover:bg-[#0e5949]' onClick={handleClick}>Apply This Job</button> 
        </div>
        <div className='container'>
            <p className='text-lg font-semibold'>Number of vacancy : <span className='text-sm text-[#3e423f]'>{job.number_of_vacancy}</span> </p>
            <p className='text-lg font-semibold'>Location : <span className='text-sm text-[#3e423f]'>{job.location}</span> </p>
            <p className='text-lg font-semibold'>Offered salary : <span className='text-sm text-[#3e423f]'>{job.offered_salary}</span> </p>
            <p className='text-lg font-semibold'>Deadline : <span className='text-sm text-[#3e423f]'>{job.deadline}</span> </p>
            <p className='text-lg font-semibold'>Status : <span className='text-sm text-[#3e423f]'>{job.status}</span> </p>
            <p className='text-lg font-semibold'>Job type : <span className='text-sm text-[#3e423f]'>{job.job_type}</span> </p>
        </div>
        <div className='container mt-5'>
        <p className='text-lg font-bold'>Job Description</p>
        <p>{job.description}</p>
        </div>
        <Footer/>

        </>
    )
}
export async function getServerSideProps(ctx) {
// console.log(ctx);
    let job = null
    try {
        let res = await axios.get(`https://express-job-portal-u1uo.vercel.app/api/jobs/${ctx.query.slug}`)
        // console.log(res.data);
        job = res.data

    } catch (err) {

        return {
            notFound: true,
            props: {

            }
        }

    }

    return {
        props: {
            job
        }
    }
}