import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';
import Update from './update';

export default function edit() {

    const router = useRouter();
    let [job, setJob] = useState({})

    useEffect(() => {

        if (router.isReady) {
            axios.get(`http://express-job-portal-u1uo.vercel.app/api/jobs/${router.query.slug}`)
                .then(res => {
                    console.log(res.data.name);
                    setJob(res.data)
                })
        }
    
    }, [router.isReady])


    return (
        <Update job={job} />
    )
}
