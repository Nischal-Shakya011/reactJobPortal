import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import axios from 'axios';
import {BiCurrentLocation} from 'react-icons/bi'
import Image from 'next/image';
import Footer from '@/components/Footer';
import { useSelector } from 'react-redux';
import trainingImg from '../../assets/training.png'


export default function Applicants() {

    const router = useRouter();
let redux_user = useSelector((redux_store) => redux_store.user.value)
    let [course, setCourse] = useState([])

    useEffect(() => {
console.log(router);

    if (router.isReady) {
         axios.get(`https://express-job-portal-u1uo.vercel.app/api/courses/${router.query.slug}`)

            .then(res => {
                console.log(res.data);
                setCourse(res.data)
            })
            .catch(error => {
                console.error(error);

             })
            }

}, [router.isReady, router.query.slug])
function hanldleClick(){
    redux_user
    ?
    router.push('/trainingForm')
    :
    router.push('/login')

}
    return (
        <>
        <div className="wrapper">
            <div>
        <div className="bg-back p-6 text-xl text-center font-bold">Course Description</div> 
<div className="container">
    <div className='container border-back rounded-lg bg-back mt-6 p-6 flex'>
           <div className='w-1/2'>
           <p className=' text-xl font-semibold'>{course.name}</p><br />
        <p className=' text-xl font-medium'>Type: {course.type}</p>
        <p className=' text-xl font-medium'>Duration: {course.duration} months</p>
        <p className=' text-xl font-medium'>Price: {course.price}</p><br />
        {
        
            <>      
               {/* <Link href={'/trainingForm'}> */}
                <button className='bg-primary hover:bg-[#b56d16] p-3 text-white text-base rounded-lg mt-6' onClick={hanldleClick}>Register for Training</button>
                {/* </Link> */}
                <br/><br/>
               
            </>

        }
        <p className=' text-xl font-medium'>Course Description:</p>
        <p className='text-lg'>{course.description}</p>
           </div>
           <div className='w-1/2'>
           <Image src={trainingImg} alt='' className="w-full h-96 rounded-lg" width={200} height={200}></Image> 
           </div>
           </div>
           
           </div>
        </div>
        <Footer className={"footer"}/>
        </div>
       </>
    )
}
