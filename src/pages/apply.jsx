import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Applied(){
    const [apply, setApply] = useState([])

    useEffect(()  =>{
        axios.get("https://express-job-portal-u1uo.vercel.app/api/apply",
        {
                     headers: {
                        Authorization: "bearer " + localStorage.getItem("access_token")
                    }
        })
        .then((res) =>{
        console.log(res);
        setApply(res.data)
        })   
     },[])


    return<>
<Header/>
<div className="bg-back p-6 text-xl text-center font-bold">
    Applied Jobs
</div>
<table className=" container border border-back rounded-lg outline-none shadow-sm p-10  w-3/4">
            <tr className="border-y-2">
                <th>Title</th>
                <th>Deadline</th>
                <th>Applied Date</th>
                <th>Offered Salary</th>
                <th>Action</th>

            </tr>
            
            {
    apply.map(app =>{
        // return <div>{app.jobs[0].name}</div>
        const part = app.jobs[0].deadline.split('T')
        const datePart = part[0]

        const create = app.createdAt.split('T')
        const dateCreate = create[0]

        return<>
       <tr>
        <td>{app.jobs[0].name}</td>
        <td>{datePart}</td>
        <td>{dateCreate}</td>
        <td>{app.jobs[0].offered_salary}</td>
        <td>action</td>

       </tr>
        </>
    })
    }
        </table>
    
    <Footer/>
    </>
}