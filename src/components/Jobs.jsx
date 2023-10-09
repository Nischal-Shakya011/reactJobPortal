import React from "react";
import Image from 'next/image'
import bannerImg from '../assets/banner.png'
import {BiCurrentLocation} from 'react-icons/bi'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import Link from "next/link";
import { useRouter } from 'next/router'




export default function jobs({jobs, meta_data})
{
    const router = useRouter()
    let page = 1;

    return(
        
        <div className="bg-white">
            <p className="text-black font-bold text-xl text-center mt-5">All Popular Jobs</p>
            {/* <p>total-{meta_data.total}</p> */}
            {jobs.map(job => {
                // console.log(job.images);
                let url = `http://express-job-portal-u1uo.vercel.app/${job.images[0]}`

                return <div className="container w-full h-32 shadow-xl p-3 mt-4 rounded-lg  bg-[#edf2ef] flex justify-between items-center">
                <div className="flex gap-8">
                            <div className="ml-5">   
                              <Image src={url} alt='' className="w-16 h-16 rounded-[50%]" width={200} height={200}></Image>  
                               {/* <Image src={bannerImg} alt='' className="w-16 h-16 rounded-[50%]" width={200} height={200}></Image>   */}
                            </div>
                            <div>
                           <p className="text-[#3e423f] text-sm">Company name</p>  
                           <p className="text-black font-bold text-lg"> {job.name} ({job.job_level})</p>
                           <div>
                            <BiCurrentLocation className='inline mr-2 text-primary'/>
                            <p className="text-black text-xs inline">{job.location}</p>
                           </div>
                            </div>
                </div>  
                    <div>
                    <Link href={`/${job._id}`}> <button className="bg-primary text-white p-3 rounded-md mr-5 hover:bg-[#0e5949]">View Details</button></Link>
                    </div>              
            
                        </div>
            })
        }
        <div className="text-center mt-5 mb-2">
            <button className="bg-primary text-white p-3 rounded-lg hover:bg-[#0e5949]"          
             onClick={(e) => {
// console.log(router.query) // {search_term=frontend,page=1}
let url = router.route + "?";

router.query.page = 1
let arr = Object.entries(router.query)

arr.forEach(el =>{
  url += `${el[0]}=${el[1]}&`
})

router.push(url)


}}>View More  <BsFillArrowRightCircleFill className="inline"/></button>
   
        </div>
        </div>
        
    )
}