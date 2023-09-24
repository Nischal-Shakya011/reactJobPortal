import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'

import Header from '@/components/Header'
import Banner from '@/components/Banner'
import AllJobs from '../components/Jobs'
import Footer from '@/components/Footer'


export default function Home(props) {
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
   <AllJobs {...props}/>
   <Footer/>
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
    console.log(res);
      // console.log(res.data.jobs)

    return{

      props:{
        jobs : res.data.jobs,
        meta_data : res.data.meta_data
      }
  }
}

