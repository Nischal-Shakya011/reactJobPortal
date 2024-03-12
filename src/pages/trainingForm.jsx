import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useRouter } from "next/router";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    mobile_no: yup.string().required(),
    selected_course: yup.string().required(),
    message: yup.string().required(),
   
  })
  .required()

export default function Profile() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const [isSubmitting, setisSubmitting] = useState(false)
  const onSubmit = (data) => {
    console.log(data)
    setisSubmitting(true)
    axios.post("https://express-job-portal-u1uo.vercel.app/api/courses/applicant", data, 
    {
        headers:
        {
            Authorization: "bearer " + localStorage.getItem("access_token")    
        }
    }
    )
      .then((res) => {
        console.log("success");
        setisSubmitting(false)
        alert("Submitted successfully")
      })
      .catch((err) => {
        console.log(err);
        setisSubmitting(false)
      });
}

  return (
    <>
    <div className="bg-back p-6 text-xl text-center font-bold">
    Register for the Training
</div>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container border border-back rounded-lg outline-none shadow-sm p-8 mt-8 w-3/4 ">
      <label htmlFor="name" className="form-label">
              Name
            </label>
            <br />
            <input
              type="text"
              id="name"
              className="form-control mt-3"
              placeholder="Name"
              {...register("name")}
            />
            <small className="text-red-700">{errors.name?.message}</small>

            <br />
            <br />
            <label htmlFor="email" className="form-label">
             Email
            </label>
            <br />
            <input
              type="email"
              id="email"
              className="form-control mt-3"
              placeholder="email"
              {...register("email")}
            />
            <small className="text-red-700">{errors.email?.message}</small>

            <br />
            <br />

            <label htmlFor="mobile_no" className="form-label">
              Mobile No.
            </label>
            <br />
            <input
              type="text"
              id="mobile_no"
              className="form-control mt-3"
              placeholder="Mobile no"
              {...register("mobile_no")}
            />
            <small className="text-red-700">{errors.mobile_no?.message}</small>
            <br />
            <br />
           <label htmlFor="selected_course" className="form-label">
            Selected Course
            </label>
            <br />
             <select 
            className="form-control mt-3"
            id="selected_course"
            {...register("selected_course")}
            >
            <option value={"Mern Stack Training"}>Mern Stack Training</option>
            <option value={"Digital Marketing Training"}>Digital Marketing Training</option>
            <option value={"Advanced Accounting"}>Advanced Accounting</option>
            <option value={"Human Resource Training"}>Human Resource Training</option>
            <option value={"Python with Django"}>Python with Django</option>
            <option value={"Quality Assurance Training"}>Quality Assurance Training</option>
            <option value={"Advanced SEO Training"}>Advanced SEO Training</option>
            <option value={"DevOps Training"}>DevOps Training</option>
           
            </select>
            <small className="text-red-700">{errors.selected_course?.message}</small>
            <br />
            <br />
            <label htmlFor="message" className="form-label">
           Message
            </label>
            <br />
            <textarea
              type="text"
              id="message"
              className="form-control mt-3"
              rows="4" cols="30"
              {...register("message")}
            ></textarea>
            <br />
            <br />
            <input disabled={isSubmitting} type="submit" value="Submit" className="bg-primary mt-10 p-3 w-full text-white cursor-pointer rounded-lg font-semibold hover:bg-[#b56d16] disabled:bg-yellow-200"/>
            </div>
    </form>
    </>
  )
}