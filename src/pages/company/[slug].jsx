import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import axios from 'axios';

export default function Applicants() {

    const router = useRouter();
    let [applicants, setApplicants] = useState([])
    let [isSubmitting, setisSubmitting] = useState(false)

    useEffect(() => {
        setisSubmitting(true)
// console.log(router);
        if (router.isReady) {
            axios.get(`https://express-job-portal-u1uo.vercel.app/api/apply/applicants/${router.query.slug}`,{
                headers: {
                   Authorization: "bearer " + localStorage.getItem("access_token")
               }
   })
                .then(res => {
                    console.log(res.data.applicants);
                    setApplicants(res.data.applicants)
                    setisSubmitting(false)
                })
                .catch(error => {
                    console.error("Error fetching applicants:", error);
                    setisSubmitting(false)

                 });
        }
    
    }, [router.isReady, router.query.slug])


    return (
        <>
        <div className="bg-back p-6 text-xl text-center font-bold">
    Applicants of this job
</div> 
       <div>
        {
            applicants.map(appli =>{
                return(
                <div key={appli.profile._id} className='container border-2 border-back rounded-lg outline-none shadow-sm p-8 mt-8'>
                        <div className='grid grid-cols-2 gap-8 p-6'> 
                        <div className='border border-back p-4'>
                    <div className="bg-back p-3 text-xl text-center font-bold w-full">Personal Details!</div><br/>   
               <p className='text-lg font-semibold'>Name: {appli.profile.name}</p> 
               <p className='text-lg font-semibold'>Email: {appli.profile.email}</p> 
               <p className='text-lg font-semibold'>Contact: {appli.profile.contact_no}</p> 
               <p className='text-lg font-semibold'>Address: {appli.profile.address}</p> 
               <p className='text-lg font-semibold'>Prefered Job: {appli.profile.prefered_job}</p>    
               <p className='text-lg font-semibold'>Skills: {appli.profile.skills}</p> 
                    </div>
                    <div className='border border-back p-4'>
                    <div className="bg-back p-3 text-xl text-center font-bold w-full">Education</div><br/>   
               <p className='text-lg font-semibold'>University: {appli.profile.university}</p> 
               <p className='text-lg font-semibold'>Degree: {appli.profile.degree}</p> 
               <p className='text-lg font-semibold'>Field of Study: {appli.profile.field_of_study}</p>  
                    </div>
                    </div> 

                    <div className='grid grid-cols-2 gap-8 p-6'> 
                    <div className='border border-back p-4'>
                    <div className="bg-back p-3 text-xl text-center font-bold w-full">Experience</div><br/>   
               <p className='text-lg font-semibold'>Organization: {appli.profile.organization}</p> 
               <p className='text-lg font-semibold'>Position: {appli.profile.position}</p> 
               <p className='text-lg font-semibold'>Job Level: {appli.profile.job_level}</p>  
               <p className='text-lg font-semibold'>Roles and Responsibility: {appli.profile.roles}</p>  
               <p className='text-lg font-semibold'>Experience: {appli.profile.experience}</p>  
                    </div>
                    <div className='text-center mt-24'>
                     <Link href={'/acceptEmail'}><button className='border p-2 w-20 outline-none bg-green-600 rounded-xl mr-8  text-white text-base hover:bg-green-400' >Accept</button></Link>
                     <Link href={'/rejectEmail'}><button className='border p-2 w-20 outline-none bg-red-600 rounded-xl text-white text-base hover:bg-red-400 disabled:bg-red-400' >Reject</button></Link>
                        {/* <button disabled={isSubmitting} className='border p-2 w-20 outline-none bg-red-600 rounded-xl text-white text-base hover:bg-red-400 disabled:bg-red-400' onClick={()=>{
                             axios.post("https://express-job-portal-u1uo.vercel.app/api/email/reject", {
                                "email": appli.profile.email,
                             },
   
                             {
                                 headers:
                                 {
                                     Authorization: "bearer " + localStorage.getItem("access_token")    
                                 }
                             }
                             )
                               .then((res) => {
                                 console.log("success");
                              alert("email sent successfully");
                               })
                               .catch((err) => {
                              alert("email sent successfully");
                                 console.log(err);
                               });
                        }}>Reject</button> */}
                    </div>
                    </div>
                    </div>
                )
            })
        }
       </div>
       </>
    )
}
