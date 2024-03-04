import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import {BiCurrentLocation} from 'react-icons/bi'


export default function Recommendation() {
    const [recommendation, setRecommendation] = useState([])
   useEffect(()=>{
    axios.get("https://express-job-portal-u1uo.vercel.app/api/recommendation", 
    {
        headers:
        {
            Authorization : "bearer " + localStorage.getItem("access_token")
        }
    })
    .then((res)=>{
        console.log(res.data.recommendations);
       setRecommendation(res.data.recommendations)
    })
   }, [])
    console.log("recommendation");
    return(
        <>
          <div className="wrapper">
        <div>
        <div className="bg-back p-6 text-xl text-center font-bold">
    Recommended Jobs For You
</div>
        <div className="container">
        <div className="grid grid-cols-3 mt-6 gap-5 w-full">
         {
            recommendation.map((recommend) =>(
                <div key={recommend._id} className="border-back border-2 rounded-lg h-44 p-5 shadow-md">
                    <div className="flex gap-10">
                    <Image src={`https://express-job-portal-u1uo.vercel.app/${recommend.images[0]}`} alt='' className="w-16 h-16 rounded-[50%]" width={200} height={200}></Image>
                    <div className="grid ">
                    <span className="font-semibold text-lg">{recommend.name}</span>
                        <span className="text-gray-500">{recommend.company_name}</span>
                        <div>
                            <BiCurrentLocation className='inline mr-2 text-primary'/>
                            <p className="text-black text-xs inline">{recommend.location}</p>
                           </div>
                    </div> 
                    </div>
                    <div className="flex justify-between mt-6">
                    <div className="border outline-none rounded-lg w-24 bg-back p-1 text-center">{recommend.job_level}</div>
                    <Link href={`${recommend._id}`}><button className="border outline-none rounded-lg w-28 p-1 text-center text-white bg-primary hover:bg-[#b56d16]">View Details</button></Link>
                    </div>
                </div>
                
            ))
         }   
                </div>
        
        </div>

        </div>
        <Footer className="footer"/>
        </div>
        </>
    )
}