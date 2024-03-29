import React from "react";
import axios from "axios";
import { useEffect } from "react";
  import { useRouter } from "next/router";
    import { useState, useRef } from "react";
    import Footer from "@/components/Footer";


export default function Create(){

    const router = useRouter();

    const companyNameRef = useRef();
    const nameRef = useRef();
    const vacancyRef = useRef();
    const companyWebsiteRef = useRef();
    const levelRef = useRef();
    const contactRef = useRef();
    const locationRef = useRef();
    const salaryRef = useRef();
    const applicationDeadlineRef = useRef();
    const descriptionRef = useRef();
    const applicationStartRef = useRef();

    const [data, setData] = useState({
        "name":"",
        "experience":"",
        "cname":"",
        "web":"",
        "vacancy":"",
        "level":"",
        "contact":"",
        "location":"",
        "deadline":"",
        "salary":"",
        "description":"",
        "start":"",
        "category":[],
        "images":[]
        
       
        
    })

    let [error, setError] = useState({
    })
    const [wholeError, setWholeError] = useState("")

  
    function handleChange(e) {
            console.log(e);
            console.log(e.target.value);

            const { name, value, type, checked } = e.target;

            if (type === "checkbox") {
              // Handle checkboxes separately
              let updatedCategory;
          
              if (checked) {
                // Checkbox is checked, add the value to the array
                updatedCategory = [...data.category, value];
              } else {
                // Checkbox is unchecked, remove the value from the array
                updatedCategory = data.category.filter((cat) => cat !== value);
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
      
        // function handleChange(e) {
        //     // console.log(data);
        //     console.log(e);
        //     // console.log(e.target.type);
        //     // console.log(e.target.files);
        //     console.log(e.target.value);
        //     e.preventDefault();
              
        //   setData({...data, [e.target.name]: e.target.type == "file" ? e.target.files : e.target.value})
        // }
        // function handleChange(e) {
        //     if (e.target.type === "file") {
        //       const selectedImages = Array.from(e.target.files);
        //       console.log(selectedImages);
        //       setData({ ...data, images: selectedImages });
        //     } else {
        //       setData({ ...data, [e.target.name]: e.target.value });
        //     }
        //   }

    function handleSubmit(e){
        e.preventDefault();
        let validation = true;
       let temp = {};

        if(!data.name){
            temp.name = "required field";
            validation = false;
        }
        if(!data.cname){
            temp.cname = "required field";
            validation = false;
        } 
    if(!data.web){
            temp.web = "required field";
            validation = false;
        } if(!data.vacancy){
            temp.vacancy = "required field";
            validation = false;
        } if(!data.contact){
            temp.contact = "required field";
            validation = false;
        } if(!data.location){
            temp.location = "required field";
            validation = false;
        } if(!data.deadline){
            temp.deadline = "required field";
            validation = false;
        } if(!data.category){
            temp.category = "required field";
            validation = false;
        }
        if(!data.salary){
            temp.salary = "required field";
            validation = false;
        }if(!data.description){
            temp.description = "required field";
            validation = false;
        }
        setError(temp)

    if (error.cname) {
        companyNameRef.current.scrollIntoView({ behavior: "smooth" });
      }
      if (error.name) {
        nameRef.current.scrollIntoView({ behavior: "smooth" });
      } 
      if (error.vacancy) {
        vacancyRef.current.scrollIntoView({ behavior: "smooth" });
      } 
      if (error.salary) {
        salaryRef.current.scrollIntoView({ behavior: "smooth" });
      } 
      if (error.contact) {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
      } 
      if (error.level) {
        levelRef.current.scrollIntoView({ behavior: "smooth" });
      } 
      if (error.web) {
        companyWebsiteRef.current.scrollIntoView({ behavior: "smooth" });
      } 
      if (error.start) {
        applicationStartRef.current.scrollIntoView({ behavior: "smooth" });
      } 
      if (error.deadline) {
        applicationDeadlineRef.current.scrollIntoView({ behavior: "smooth" });
      } 
      if (error.description) {
        descriptionRef.current.scrollIntoView({ behavior: "smooth" });
      } 
      if (error.location) {
        locationRef.current.scrollIntoView({ behavior: "smooth" });
      }

    // console.log(data.category);
    let form_data = new FormData();
    form_data.append("name", data.name)
    form_data.append("company_name",data.cname)
    form_data.append("company_website",data.web)
    form_data.append("contact_no",data.contact)
    form_data.append("offered_salary",data.salary)
    form_data.append("number_of_vacancy",data.vacancy)
    form_data.append("location",data.location)
    form_data.append("deadline",data.deadline)
    form_data.append("job_level",data.level)
    form_data.append("description",data.description)
    form_data.append("application_start",data.start)
    form_data.append("experience",data.experience)
    form_data.append("images[]", data.images);
    form_data.append("categories[]", data.category);



    // let tempo = [...data.category]

    // tempo.forEach(cat =>{
    //     form_data.append("categories[]", cat)
    // })

    // let temp = [...data.images]
    // let photo = []

    // temp.forEach(img =>{
    //     photo.push(img)
    // })
    // form_data.append("images[]",photo)

    // temp.forEach((img, index) =>{
    //     console.log(img);
        // form_data.append(`images[${index}]`, img)
    //     form_data.append(`images[${index}]`, img, img.name);
    // })
    // data.images.forEach((img, index) => {
    //     form_data.append(`images[]`, img);
    //   });
   

     axios.post("https://express-job-portal-u1uo.vercel.app/api/jobs",form_data,
    {
        headers:
        {
            Authorization: "bearer " + localStorage.getItem("access_token")    
        }
    },
    {
        timeout:10000,
             }
    )
    .then(res =>{
        console.log("posted successfully");
        router.push("/company")
    })

    .catch(err =>{
        console.log(err);
        setWholeError(err?.response?.data.msg);
    })


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
<input type="text" name="cname" value={data.cname}  ref={companyNameRef} className="form-control" onChange={handleChange} placeholder="Company Name*"/><br/><br/>

    <label htmlFor="" className="form-label" >Job Title</label>
<input type="text" name="name" value={data.name} ref={nameRef} onChange={handleChange
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
<input type="number" name="vacancy" value={data.vacancy} ref={vacancyRef} className="form-control" onChange={handleChange} placeholder="Vacancy no.*"/><br/><br/>

<label htmlFor="" className="form-label">Location</label>
<input type="text" name="location" value={data.location} ref={locationRef} className="form-control" onChange={handleChange} placeholder="Location*"/><br/><br/>

<label htmlFor="" className="form-label">Application Start Date</label>
<input type="Date" name="start" value={data.start} ref={applicationStartRef} className="form-control" onChange={handleChange} /><br/><br/>

<label htmlFor="" className="form-label">Job Category</label><br/>
<select name="category" className="form-control" onChange={handleChange} value={data.category}>
<option value={"Bank_and_Financial"}>Bank/Financial Institution</option>
            <option value={"Architecture_Interior_Design"}>Architecture/Interior Design</option>
            <option value={"Hospitality"}>Hospitality</option>
            <option value={"NGO_INGO_Social_Work"}>NGO/INGO/Social Work</option>
            <option value={"IT_and_Telecommununication"}>IT and Telecommununication</option>
            <option value={"Construction_Engineering_Architects"}>Construction/Engineering/Architects</option>
            <option value={"Teaching_and_Education"}>Teaching/Education</option>
            <option value={"HealthCare_Pharma_Biotech_Medical"}>HealthCare/Pharma/Biotech/Medical</option>
            <option value={"Human_Resource_Organization_Development"}>Human Resource/ Organization Development</option>
            <option value={"Sales_Marketing"}>Sales/Marketing/Advertising</option>
            <option value={"Accounting_Finance"}>Accounting/Finance</option>
    </select><br/><br/>
    <label htmlFor="" className="form-label">Experience required</label>
<input type="Number" name="experience" value={data.experience} className="form-control" onChange={handleChange} placeholder="Number of years"/><br/><br/>
{/* <div className="mt-3 grid">
    <span>
        <label htmlFor="" className="font-semibold">Bank/Financial Institution</label>
<input type="checkbox" name="category" value="Bank/Financial Institution"  className="ml-1" onChange={handleChange} checked={data.category.includes("Bank/Financial Institution")}/>
</span>

<span>
<label htmlFor="" className="font-semibold">Architecture/Interior Design</label>
<input type="checkbox" name="category" value="Architecture/Interior Design"  className="ml-1" onChange={handleChange} checked={data.category.includes("Architecture/Interior Design")} />
</span>
<span>
<label htmlFor="" className="font-semibold">Hospitality</label>
<input type="checkbox" name="category" value="Hospitality"  className="ml-1" onChange={handleChange} checked={data.category.includes("Hospitality")} />
</span>
<span>
<label htmlFor="" className="font-semibold">NGO/INGO/Social Work</label>
<input type="checkbox" name="category" value="NGO/INGO/Social Work"  className="ml-1" onChange={handleChange} checked={data.category.includes("NGO/INGO/Social Work")} />
</span>
<span>
<label htmlFor="" className="font-semibold">IT and Telecommununication</label>
<input type="checkbox" name="category" value="IT and Telecommununication"  className="ml-1" onChange={handleChange} checked={data.category.includes("IT and Telecommununication")} />
</span>
<span>
<label htmlFor="" className="font-semibold">Construction/Engineering/Architects</label>
<input type="checkbox" name="category" value="Construction/Engineering/Architects"  className="ml-1" onChange={handleChange} checked={data.category.includes("Construction/Engineering/Architects")} />
</span>
<span>
<label htmlFor="" className="font-semibold">Teaching/Education</label>
<input type="checkbox" name="category" value="Teaching/Education"  className="ml-1" onChange={handleChange} checked={data.category.includes("Teaching/Education")} />
</span>
<span>
<label htmlFor="" className="font-semibold">HealthCare/Pharma/Biotech/Medical</label>
<input type="checkbox" name="category" value="HealthCare/Pharma/Biotech/Medical"  className="ml-1" onChange={handleChange} checked={data.category.includes("HealthCare/Pharma/Biotech/Medical")} />
</span>
<span>
<label htmlFor="" className="font-semibold">Human Resource/ Organization Development</label>
<input type="checkbox" name="category" value="Human Resource/ Organization Development"  className="ml-1" onChange={handleChange} checked={data.category.includes("Human Resource/ Organization Development")} />
</span>
<span>
<label htmlFor="" className="font-semibold">Sales/Marketing/Advertising</label>
<input type="checkbox" name="category" value="Sales/Marketing/Advertising"  className="ml-1" onChange={handleChange} checked={data.category.includes("Sales/Marketing/Advertising")} />
</span>
<span>
<label htmlFor="" className="font-semibold">Accounting/Finance</label>
<input type="checkbox" name="category" value="Accounting/Finance"  className="ml-1" onChange={handleChange} checked={data.category.includes("Accounting/Finance")} />
</span>
</div><br /><br /> */}

<label htmlFor="" className="form-label" >Upload Image</label> <br /><br />
<input name="images" type="file" multiple onChange={handleChange}/>

{
wholeError
&&
<p className="bg-red-400 text-white text-center p-3 rounded-lg mt-20">Review your post</p>

}
    </div>
<div>
<label htmlFor="" className="form-label">Salary</label>
<input type="number" name="salary" value={data.salary} ref={salaryRef} className="form-control" onChange={handleChange} placeholder="Salary*"/><br/><br/>

<label htmlFor="" className="form-label">Job Level</label>
<select name="level" className="form-control" onChange={handleChange} value={data.level} ref={levelRef}>
    <option value = {null} ></option>
    <option value="intern">Intern</option>
    <option value="fresher">Fresher</option>
    <option value="junior">Junior</option>
    <option value="mid">Mid</option>
    <option value="senior">Senior</option>
    </select><br/><br/>

<label htmlFor="" className="form-label">Company Website</label>
<input type="text" name="web" value={data.web} ref={companyWebsiteRef} className="form-control" onChange={handleChange} placeholder="Company Website*"/><br/><br/>

<label htmlFor="" className="form-label">Contact no.</label>
<input type="text" name="contact" value={data.contact} ref={contactRef} className="form-control" onChange={handleChange} placeholder="Contact no.*"/><br/><br/>

<label htmlFor="" className="form-label">Application Deadline</label>
<input type="Date" name="deadline" value={data.deadline} ref={applicationDeadlineRef} className="form-control" onChange={handleChange}/><br/><br/>


    <label htmlFor="" className="form-label">Job Description</label><br />
    <textarea name="description" rows="8" cols="50" onChange={handleChange} ref={descriptionRef} value={data.description} placeholder="Enter the job description here" className="border rounded-lg border-back p-2 w-full"></textarea><br />

    <div className="text-right">
    <input type="submit" value="Post Job" className="bg-primary mt-8  p-3 w-1/4 text-white cursor-pointer rounded-lg font-semibold hover:bg-[#b56d16] "/>
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