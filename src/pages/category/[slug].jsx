import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import axios from 'axios';
import {BiCurrentLocation} from 'react-icons/bi'
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function Applicants() {

    const router = useRouter();
    let [jobs, setJobs] = useState([])

    useEffect(() => {
console.log(router);

    if (router.isReady) {
         axios.get(`https://express-job-portal-u1uo.vercel.app/api/jobs?search_term=${router.query.slug}`)

            .then(res => {
                console.log(res.data.jobs);
                setJobs(res.data.jobs)
            })
            .catch(error => {
                console.error(error);

             })
            }

}, [router.isReady, router.query.slug])

    return (
        <>
        <div className="wrapper">
        <div className="bg-back p-6 text-xl text-center font-bold">Jobs For You</div> 
<div className="bg-white">
            {jobs.map(job => {
                
                let url = `https://express-job-portal-u1uo.vercel.app/${job.images[0]}`;

                return <div key={job._id} className="container w-full h-32 shadow-xl p-3 mt-4 rounded-lg  bg-[#edf2ef] flex justify-between items-center">
                <div className="flex gap-8">
                            <div className="ml-5">   
                              <Image src={url} alt='' className="w-16 h-16 rounded-[50%]" width={200} height={200}></Image>  
                               {/* <Image src={bannerImg} alt='' className="w-16 h-16 rounded-[50%]" width={200} height={200}></Image>   */}
                            </div>
                            <div>
                           <p className="text-[#3e423f] text-sm">{job.company_name}</p>  
                           <p className="text-black font-bold text-lg"> {job.name} ({job.job_level})</p>
                           <div className="flex gap-5 mt-2">
                            <span>
                            <BiCurrentLocation className='inline mr-2 text-primary'/>
                            <p className="text-black text-sm inline ">{job.location}</p>
                            </span>
                            <span className="text-black text-sm inline mt-1"><span className="font-bold">Vacancy: </span>{job.number_of_vacancy}</span>
                            <span className="text-black text-sm inline mt-1"><span className="font-bold">Job Status: </span>{job.status}</span>
                           </div>
                            </div>
                </div>  
                    <div>
                    <Link href={`/${job._id}`}> <button className="bg-primary text-white p-3 rounded-md mr-5 hover:bg-[#b56d16]">View Details</button></Link>
                    </div>              
            
                        </div>
            })
        }
        
        </div>
        <Footer className={"footer"}/>
        </div>
       </>
    )
}
