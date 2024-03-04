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
    contact_no: yup.string().max(10).required(),
    address: yup.string().required(),
    prefered_job: yup.string().required(),
    skills: yup.string().required(),
    degree: yup.string().required(),
    field_of_study: yup.string().required(), 
    university: yup.string().required(),


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
    axios.post("https://express-job-portal-u1uo.vercel.app/api/profile", data, 
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
        router.push("/")
      })
      .catch((err) => {
        console.log(err);
        setisSubmitting(false)
      });
}

  return (
    <>
    <div className="bg-back p-6 text-xl text-center font-bold">
    Create Your Profile
</div>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container border border-back rounded-lg outline-none shadow-sm p-8 mt-8 w-3/4 ">
        <div className="bg-back p-3 text-xl text-center font-bold">Add Your Personal Details!</div><br/>
      <label htmlFor="name" className="form-label">
              Full Name
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
              placeholder="Email"
              {...register("email")}
            />
            <small className="text-red-700">{errors.email?.message}</small>

            <br />
            <br />
            <label htmlFor="contact_no" className="form-label">
              Contact
            </label>
            <br />
            <input
              type="text"
              id="contact_no"
              className="form-control mt-3"
              placeholder="98*******"
              {...register("contact_no")}
            />
            <small className="text-red-700">{errors.contact_no?.message}</small>
            <br />
            <br />
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <br />
            <input
              type="text"
              id="address"
              className="form-control mt-3"
              placeholder="Address"
              {...register("address")}
            />
            <small className="text-red-700">{errors.address?.message}</small>
            <br />
            <br />
            <label htmlFor="prefered_job" className="form-label">
            Prefered Job
            </label>
            <br />
            <input
              type="text"
              id="prefered_job"
              className="form-control mt-3"
              placeholder="Prefered Job"
              {...register("prefered_job")}
            />
            <small className="text-red-700">{errors.prefered_job?.message}</small>
            <br />
            <br />
            <label htmlFor="skills" className="form-label">
            Skills
            </label>
            <br />
            <input
              type="text"
              id="skills"
              className="form-control mt-3"
              placeholder="javascript, react.js, css"
              {...register("skills")}
            />
            <small className="text-red-700">{errors.skills?.message}</small>
            <br />
            <br />
        <div className="bg-back p-3 text-xl text-center font-bold">Add Your Education</div><br/>

            <label htmlFor="degree" className="form-label">
            Degree
            </label>
            <br />
            <select 
            className="form-control mt-3"
            id="degree"
            {...register("degree")}
            >
            <option value={"SLC/SEE"}>SLC/SEE</option>
            <option value={"Intermediate"}>Intermediate</option>
            <option value={"Bachelors-running"}>Bachelors Running</option>
            <option value={"Bachelors"}>Bachelors</option>
            <option value={"Masters"}>Masters</option>
            <option value={"MPhil"}>MPhil</option>
            <option value={"PHD"}>PHD</option>
            </select>
            <small className="text-red-700">{errors.degree?.message}</small>
            <br/>
            <br/>
            <label htmlFor="field_of_study" className="form-label">
            Field Of Study
            </label>
            <br />
            <input
              type="text"
              id="field_of_study"
              className="form-control mt-3"
              placeholder="Computer Engineering"
              {...register("field_of_study")}
            />
            <small className="text-red-700">{errors.field_of_study?.message}</small>
            <br />
            <br />
            <label htmlFor="university" className="form-label">
            University
            </label>
            <br />
            <input
              type="text"
              id="university"
              className="form-control mt-3"
              placeholder="Tribhuwan University"
              {...register("university")}
            />
            <small className="text-red-700">{errors.university?.message}</small>
            <br />
            <br />
        <div className="bg-back p-3 text-xl text-center font-bold">Add Your Experience </div><br/>

            <label htmlFor="organization" className="form-label">
            Organization
            </label>
            <br />
            <input
              type="text"
              id="organization"
              className="form-control mt-3"
              placeholder="XYZ Company"
              {...register("organization")}
            />
            <br />
            <br />
            <label htmlFor="position" className="form-label">
            Position
            </label>
            <br />
            <input
              type="text"
              id="position"
              className="form-control mt-3"
              placeholder="manager"
              {...register("position")}
            />
            <br />
            <br />
            <label htmlFor="degree" className="form-label">
            Job Level
            </label>
            <br />
            <select 
            className="form-control mt-3"
            id="job_level"
            {...register("job_level")}
            >
            <option value={"Entry-Level"}>Entry Level</option>
            <option value={"Junior-Level"}>Junior Level</option>
            <option value={"Mid-Level"}>Mid Level</option>
            <option value={"Senior-Level"}>Senior Level</option>
            </select>
            <small className="text-red-700">{errors.job_level?.message}</small>
            <br/>
            <br/>
            <label htmlFor="roles" className="form-label">
            Roles and Responsibility 
            </label>
            <br />
            <textarea
              type="text"
              id="roles"
              className="form-control mt-3"
              rows="4" cols="30"
              {...register("roles")}
            ></textarea>
            <br />
            <br />
            <label htmlFor="experience" className="form-label">
            Experience
            </label>
            <br />
            <input
              type="text"
              id="experience"
              className="form-control mt-3"
              placeholder="3 years"
              {...register("experience")}
            />
            <br />
            <br />
            <input disabled={isSubmitting} type="submit" value="Submit" className="bg-primary mt-10 p-3 w-full text-white cursor-pointer rounded-lg font-semibold hover:bg-[#0e5949] disabled:bg-green-200"/>
            </div>
    </form>
    </>
  )
}