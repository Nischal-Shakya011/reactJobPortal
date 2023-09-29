import React from "react";


export default function Create(){

    return<>
    <div className="wrapper">
        <div>
<div className="bg-back p-6 text-xl text-center font-bold">
    Create a Job
</div> 
<form className="container">
<div className="border-2 border-back rounded-lg outline-none shadow-sm w-full mt-3 p-5 grid grid-cols-2 gap-12">
    <div>
    <label htmlFor="" className="form-label">Company Name</label>
<input type="text" name="title" value={""} className="form-control" /><br/><br/>

    <label htmlFor="" className="form-label">Job Title</label>
<input type="text" name="title" value={""} className="form-control" /><br/><br/>

<label htmlFor="" className="form-label ">Vacancy</label>
<input type="number" name="title" value={""} className="form-control" /><br/><br/>

<label htmlFor="" className="form-label">Location</label>
<input type="text" name="title" value={""} className="form-control" /><br/><br/>

<label htmlFor="" className="form-label">Application Start Date</label>
<input type="Date" name="title" value={""} className="form-control" /><br/><br/>
    </div>
<div>
<label htmlFor="" className="form-label">Salary</label>
<input type="number" name="title" value={""} className="form-control" /><br/><br/>

<label htmlFor="" className="form-label">Job Level</label>
<input type="text" name="title" value={""} className="form-control" /><br/><br/>

<label htmlFor="" className="form-label">Company Website</label>
<input type="text" name="title" value={""} className="form-control" /><br/><br/>

<label htmlFor="" className="form-label">Contact no.</label>
<input type="text" name="title" value={""} className="form-control" /><br/><br/>

<label htmlFor="" className="form-label">Application Deadline</label>
<input type="Date" name="title" value={""} className="form-control" /><br/><br/>
</div>
</div>
</form>
</div>
<div className="footer">
{/* <footer/> */}
</div>
</div>
   </>
}