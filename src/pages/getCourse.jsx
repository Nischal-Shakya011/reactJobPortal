import axios from "axios";
import React from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import trainingImg from '../assets/training.png'

import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineHomeWork } from "react-icons/md";
import { CiClock1 } from "react-icons/ci";

export default function GetCourse() {
    const [course, setCourse] = useState([])
    useEffect(()=>{
       axios.get("https://express-job-portal-u1uo.vercel.app/api/courses")
       .then((res)=>{
           console.log(res.data);
           setCourse(res.data)
       })
    },[])
    return(
        <>
        <div className="wrapper">
            <div>
         <div className="bg-back p-6 text-xl text-center font-bold">
   Available Training
</div>
<div className="container">
        <div className="grid grid-cols-3 mt-6 gap-5 w-full">
         {
            course.map((cor) =>(
                <Link key={cor._id} href={`/course/${cor._id}`}>
                <div key={cor._id} className="border-back border-2 rounded-lg p-3 shadow-md hover:border-primary cursor-pointer">
                    <div>
                    <Image src={trainingImg} alt='' className="w-full h-60 rounded-lg" width={200} height={200}></Image> 
                    </div>
                    <div className="text-center text-xl font-semibold mt-6">{cor.name}</div>
                    <div className="flex justify-evenly mt-6">
                       <div className="flex gap-1">
                       <GiMoneyStack className="inline text-2xl mt-4"/>
                       <div>
                       <p className="text-base font-semibold">Price</p>
                        <p>{cor.price}</p>
                       </div>
                       </div>
                       <div className="flex gap-1">
                       <MdOutlineHomeWork className="inline text-2xl mt-4"/>
                       <div>
                       <p className="text-base font-semibold">Class Type</p>
                        <p>{cor.type}</p>
                       </div>
                       </div>
                       <div className="flex gap-1">
                       <CiClock1 className="inline text-2xl mt-4"/>
                       <div>
                       <p className="text-base font-semibold">Duration</p>
                        <p>{cor.duration} months</p>
                       </div>
                       </div>
                    </div>
                    <div className="text-center pb-5">
                   <Link href={`/course/${cor._id}`}> <button className="mt-5 text-lg font-semibold hover:text-primary">View Detail</button></Link>
                   </div>
                </div>
                </Link>
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