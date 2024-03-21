import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'

import Header from '@/components/Header'
import Banner from '@/components/Banner'
import AllJobs from '../components/Jobs'
import Footer from '@/components/Footer'
import { useRouter } from 'next/router'


export default function Home(props) {
  const router = useRouter()
// console.log(props.jobs);
//  function handleClick(e){
//     e.preventDefault();
// router.push("/?search_term=" + e.target.search_term.value)

//   }
  // const [jobs, setJobs] = useState([]);

  // useEffect(() => {
  //   axios.get("https://express-job-portal-u1uo.vercel.app/api/jobs")
  //     .then(res => {
  //       console.log(res)
  //     setJobs(res)
  //     })
  // }, [])
  
  return (
   <>
   <Banner/>
   <div className=' font-bold text-xl text-center mt-5'>
    Popular Job Categories
   <form>
    {
       <div className='container flex justify-evenly mt-8 border-2 border-back rounded-lg p-7 '>
<Link href={`/category/hospitality`}>
  {/* <button value={"Hospitality"} className={"bg-slate-500 p-2"} name={"search_term"} onClick={()=>{
      router.push("/?search_term=hospitality")
    }}>Hospitality</button> */}
    <button className='bg-primary text-base font-semibold p-3 rounded-lg text-white hover:bg-[#b56d16]'>Hospitality</button>
    </Link>
      
      <Link href={`/category/finance`}><button className='bg-primary text-base font-semibold p-3 rounded-lg text-white hover:bg-[#b56d16]'>Finance and Accounting</button></Link>
      <Link href={`/category/human_resource`}><button className='bg-primary text-base font-semibold p-3 rounded-lg text-white hover:bg-[#b56d16]'>Human Resource</button></Link>
      <Link href={`/category/HealthCare_Pharma_Biotech_Medical`}><button className='bg-primary text-base font-semibold p-3 rounded-lg text-white hover:bg-[#b56d16]'>Health/Medical</button></Link>
      <Link href={`/category/education`}><button className='bg-primary text-base font-semibold p-3 rounded-lg text-white hover:bg-[#b56d16]'>Education</button></Link>
      <Link href={`/category/sales_marketing`}><button className='bg-primary text-base font-semibold p-3 rounded-lg text-white hover:bg-[#b56d16]'>Sales and Marketing</button></Link>
        </div>
    }

   </form>
   </div>
   <AllJobs {...props}/>
   <Footer className="footer"/>
   </>
  )
}

  export async function getServerSideProps(ctx){
    // console.log(ctx);
    // let res = await axios.get("https://express-job-portal-u1uo.vercel.app/api/jobs")
    let url = `https://express-job-portal-u1uo.vercel.app/api/jobs?`

    let params = Object.entries(ctx.query)
    params.forEach(parameter => {
      url += `${parameter[0]}=${parameter[1]}&`
    })
    // console.log({ url });
  
    let res = await axios.get(url)
    // console.log(res);
      // console.log(res.data.jobs)

    return{

      props:{
        jobs : res.data.jobs,
        meta_data : res.data.meta_data
      }
  }
}

