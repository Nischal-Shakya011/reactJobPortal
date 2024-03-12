import React from "react";
import Image from 'next/image'
import bannerImg from '../assets/banner.png'
import {BiCurrentLocation} from 'react-icons/bi'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import Link from "next/link";
import { useRouter } from 'next/router'




export default function Jobs({jobs, meta_data})
{
    const router = useRouter();
    const currentPage = router.query.page ? parseInt(router.query.page) : 1;
    const searchTerm = router.query.search_term || "";
    const jobLevel = router.query.job_level || "";
  
    const handleClick = () => {
      const nextPage = currentPage + 1;
      
      const url = `/?page=${nextPage}&search_term=${searchTerm}&job_level=${jobLevel}`;
      
      router.push(url);
    };
    return(
        
        <div className="bg-white">
            <p className="text-black font-bold text-xl text-center mt-8">All Jobs</p>
            {/* <p>total-{meta_data.total}</p> */}
            {jobs.map(job => {
                // console.log(job.images);
                
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
        <div className="text-center mt-5 mb-2">
            <button className="bg-primary text-white p-3 rounded-lg hover:bg-[#b56d16]"          
             onClick={ handleClick}>View More  <BsFillArrowRightCircleFill className="inline"/></button>
   
        </div>
        </div>
        
    )
}