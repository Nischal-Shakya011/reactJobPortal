import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";

export default function Update({job}){

    const router = useRouter();

    // const [data, setData] = useState({
    //     "name":"",
    //     "company_name":"",
    //     "company_website":"",
    //     "number_of_vacancy":"",
    //     "job_level":"",
    //     "contact_no":"",
    //     "location":"",
    //     "deadline":"",
    //     "offered_salary":"",
    //     "description":"",
    //     "application_start":"",
    //     "categories":[],
    //     "images":[]
        
    // })

    const [data, setData] = useState(job)

    useEffect(() => {
        console.log(job);
        setData(job)
        // setData({
        // "name":job.name,
        // "company_name":job.company_name,
        // "company_website":job.company_website,
        // "number_of_vacancy":job.number_of_vacancy,
        // "job_level":job.job_level,
        // "contact_no":job.contact_no,
        // "location":job.location,
        // "deadline":job.deadline,
        // "offered_salary":job.offered_salary,
        // "description":job.description,
        // "application_start":job.application_start,
        // "categories":[job.categories],
        // "images":[]
        // })
    }, [job])

    // let [error, setError] = useState({

    // })

    function handleSubmit(e){
        e.preventDefault();
    //     let validation = true;
    //    let temp = {};

    //     if(!name){
    //         temp.name = "required field";
    //         validation = false;
    //     }
    //     if(!cname){
    //         temp.cname = "required field";
    //         validation = false;
    //     } if(!web){
    //         temp.web = "required field";
    //         validation = false;
    //     } if(!vacancy){
    //         temp.vacancy = "required field";
    //         validation = false;
    //     } if(!contact){
    //         temp.contact = "required field";
    //         validation = false;
    //     } if(!location){
    //         temp.location = "required field";
    //         validation = false;
    //     } if(!deadline){
    //         temp.deadline = "required field";
    //         validation = false;
    //     } if(!category){
    //         temp.category = "required field";
    //         validation = false;
    //     }
    //     if(!salary){
    //         temp.salary = "required field";
    //         validation = false;
    //     }if(!description){
    //         temp.description = "required field";
    //         validation = false;
    //     }
    //     setError(temp)

    // console.log(data.name);
    let form_data = new FormData();
    form_data.append("name", data.name)
    form_data.append("company_name",data.company_name)
    form_data.append("company_website",data.company_website)
    form_data.append("contact_no",data.contact_no)
    form_data.append("offered_salary",data.offered_salary)
    form_data.append("number_of_vacancy",data.number_of_vacancy)
    form_data.append("location",data.location)
    form_data.append("deadline",data.deadline)
    form_data.append("job_level",data.job_level)
    form_data.append("description",data.description)
    form_data.append("application_start",data.application_start)
    form_data.append("images[]", data.images);


    let tempo = [...data.categories]

    tempo.forEach(cat =>{
        form_data.append("categories[]", cat)
    })

    let url = "https://express-job-portal-u1uo.vercel.app/api/jobs"

    if (router.query.slug) {
url = "https://express-job-portal-u1uo.vercel.app/api/jobs/"+ router.query.slug
        axios.put(url, form_data, {
            headers: {
                Authorization: "bearer " + localStorage.getItem("access_token")
            }
        })
        .then(res =>{
            console.log("posted successfully");
        })
    
        .catch(err =>{
            console.log(err);
        })
        return;
    }


    }
  
    function handleChange(e) {
        e.preventDefault();
            console.log(e);
            console.log(e.target.value);

            const { name, value, type, checked } = e.target;

            if (type === "checkbox") {
              // Handle checkboxes separately
              let updatedCategory;
          
              if (checked) {
                // Checkbox is checked, add the value to the array
                updatedCategory = [...data.categories, value];
              } else {
                // Checkbox is unchecked, remove the value from the array
                updatedCategory = data.categories.filter((cat) => cat !== value);
              }
          
              setData({ ...data, [name]: updatedCategory });
            } else if (type === "file") {
              // Handle file input
              setData({ ...data, [name]: e.target.files });
            } else {
              // Handle other input types
              setData({ ...data, [name]: value });
    }
}
      

    

    return<>
    <div className="wrapper">
        <div>
<div className="bg-back p-6 text-xl text-center font-bold">
    Create a Job
</div> 
<form className="container" onSubmit={handleSubmit}>
<div className="border-2 border-back rounded-lg outline-none shadow-sm w-full mt-3 p-5 grid grid-cols-2 gap-12">
    <div>
    <label htmlFor="" className="form-label">Company Name</label>
<input type="text" name="company_name" value={data.company_name}  className="form-control" onChange={handleChange} placeholder="Company Name*"/><br/><br/>

    <label htmlFor="" className="form-label" >Job Title</label>
<input type="text" name="name" value={data.name} onChange={handleChange
    // if(e.target.value)
    // {
    //     setError({...error, name:""})
    // }
    // else{
    //     setError({...error, name:"this is required field"})
    // }
} className="form-control" placeholder="Job Title*"/>

{/* { 
  error
  &&
  <small className="text-red-600">{error.name}</small>

} */}
<br/><br/>
<label htmlFor="" className="form-label ">Vacancy</label>
<input type="number" name="number_of_vacancy" value={data.number_of_vacancy} className="form-control" onChange={handleChange} placeholder="Vacancy no.*"/><br/><br/>

<label htmlFor="" className="form-label">Location</label>
<input type="text" name="location" value={data.location} className="form-control" onChange={handleChange} placeholder="Location*"/><br/><br/>

<label htmlFor="" className="form-label">Application Start Date</label>
<input type="text" name="applicaton_start" value={data.application_start} className="form-control" onChange={handleChange} /><br/><br/>

<label htmlFor="" className="form-label">Job Category</label><br/>
<div className="mt-3 flex gap-7">
    <span>
        <label htmlFor="" className="font-semibold">Frontend</label>
{/* <input type="checkbox" name="categories" value="frontend"  className="ml-1"  onChange={handleChange} checked={data.categories.includes("frontend")}/> */}
<input type="checkbox" name="categories" value="frontend"  className="ml-1"  onChange={handleChange}/>
</span>

<span>
<label htmlFor="" className="font-semibold">Backend</label>
<input type="checkbox" name="categories" value="backend"  className="ml-1"  onChange={handleChange} />
{/* <input type="checkbox" name="categories" value="backend"  className="ml-1"  onChange={handleChange} checked={data.categories.includes("backend")} /> */}
</span>
</div><br /><br />

<label htmlFor="" className="form-label" >Upload Image</label> <br /><br />
<input name="images" type="file" multiple onChange={handleChange}/>
    </div>
<div>
<label htmlFor="" className="form-label">Salary</label>
<input type="number" name="offered_salary" value={data.offered_salary} className="form-control" onChange={handleChange} placeholder="Salary*"/><br/><br/>

<label htmlFor="" className="form-label">Job Level</label>
<select name="job_level" className="form-control" onChange={handleChange} value={data.job_level}>
    <option value = {null} ></option>
    <option value="fresher">Fresher</option>
    <option value="junior">Junior</option>
    <option value="mid">Mid</option>
    <option value="senior">Senior</option>
    </select><br/><br/>

<label htmlFor="" className="form-label">Company Website</label>
<input type="text" name="company_website" value={data.company_website} className="form-control" onChange={handleChange} placeholder="Company Website*"/><br/><br/>

<label htmlFor="" className="form-label">Contact no.</label>
<input type="text" name="contact_no" value={data.contact_no} className="form-control" onChange={handleChange} placeholder="Contact no.*"/><br/><br/>

<label htmlFor="" className="form-label">Application Deadline</label>
<input type="text" name="deadline" value={data.deadline}  className="form-control" onChange={handleChange}/><br/><br/>


    <label htmlFor="" className="form-label">Job Description</label><br />
    <textarea name="description" rows="8" cols="50" onChange={handleChange} value={data.description} placeholder="Enter the job description here" className="border rounded-lg border-back p-2 w-full"></textarea><br />

    <div className="text-right">
    <input type="submit" value="Post Job" className="bg-primary mt-8  p-3 w-1/4 text-white cursor-pointer rounded-lg font-semibold hover:bg-[#0e5949] "/>
</div>

</div>
</div>
</form>
</div>
<div className="footer">
<Footer className="footer"/>
</div>
</div>
   </>
}