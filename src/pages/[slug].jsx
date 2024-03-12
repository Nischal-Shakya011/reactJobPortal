import Header from '@/components/Header'
import React from 'react'
import axios from 'axios'
import Link from 'next/link';
import JOB_SEEKER from '../const/roles'

import Footer from '@/components/Footer'
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
// import Submitted from '../components/Submitted';


export default function SingleJob({job}){
    // const [showSubmitted, setShowSubmitted] = useState(false);
let router = useRouter();
let redux_user = useSelector((redux_store) => redux_store.user.value)
// console.log(redux_user); 
// const [profile, setProfile] = useState([])
//     useEffect(()=>{
//        axios.get("https://express-job-portal-u1uo.vercel.app/api/profile", 
//        {
//            headers:
//            {
//                Authorization : "bearer " + localStorage.getItem("access_token")
//            }
//        })
//        .then((res)=>{
//            console.log(res.data);
//            setProfile(res.data)
//        })
//     },[])
//     const handleOkClick = () => {
//         setShowSubmitted(false)  };
function handleClick(e){
 e.preventDefault();
 
//    console.log(job);
const requestData = {
    jobs: [{ job_id: job._id }]
    
  };
 redux_user 
 ?
//  profile.experience >= job.experience
//  ?
   
    axios.post("https://express-job-portal-u1uo.vercel.app/api/apply", requestData,

    {
                 headers: {
                    Authorization: "bearer " + localStorage.getItem("access_token")
                }
    })
    
    .then(res=>{
    console.log("applied");
    alert("applied successfully");
    router.push("/apply");
    })
    .catch(err=>{
        console.log(err);
    })

// :
// setShowSubmitted(true)
// alert("Not eligible for the job")
:
router.push("/login")
}
           
    

    return(
        <>
        {
            // showSubmitted ? 
            // ( <Submitted onOkClick={handleOkClick} />)
            // : 
            <div className='wrapper'>
<div>
        <div className='bg-[#d7d8d9] p-4 text-center'>
        <p className='text-xl font-bold'>{job.name}({job.job_level})-{job.company_name}</p>
        </div>
        <div className='text-center'>
            {
                redux_user?.role != "company"
                &&
           <button className='bg-primary p-3 rounded-lg mt-5 text-white hover:bg-[#b56d16]' onClick={handleClick}>Apply This Job</button> 
                     }
        </div>
        <div className='container mt-5'>
            <p className='text-lg font-semibold'>Number of vacancy : <span className='text-sm text-[#3e423f]'>{job.number_of_vacancy}</span> </p>
            <p className='text-lg font-semibold'>Location : <span className='text-sm text-[#3e423f]'>{job.location}</span> </p>
            <p className='text-lg font-semibold'>Offered salary : <span className='text-sm text-[#3e423f]'>{job.offered_salary}</span> </p>
            <p className='text-lg font-semibold'>Deadline : <span className='text-sm text-[#3e423f]'>{job.deadline}</span> </p>
            <p className='text-lg font-semibold'>Status : <span className='text-sm text-[#3e423f]'>{job.status}</span> </p>
            <p className='text-lg font-semibold'>About us : <span className='text-sm text-[#3e423f]'>{job.company_website}</span> </p>
        </div>
        <div className='container mt-5'>
        <p className='text-lg font-bold'>Job Description</p>
        <p>{job.description}</p>
        </div>
</div>
        <Footer className="footer"/>
        </div>
    }
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