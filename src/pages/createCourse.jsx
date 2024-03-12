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
    duration: yup.number().required(),
    type: yup.string().max(10).required(),
    price: yup.string().required(),
    description: yup.string().required(),
   
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
    axios.post("https://express-job-portal-u1uo.vercel.app/api/courses", data, 
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
        alert("course created successfully")
      })
      .catch((err) => {
        console.log(err);
        setisSubmitting(false)
      });
}

  return (
    <>
    <div className="bg-back p-6 text-xl text-center font-bold">
    Create a Course
</div>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container border border-back rounded-lg outline-none shadow-sm p-8 mt-8 w-3/4 ">
      <label htmlFor="name" className="form-label">
              Name of Course
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
            <label htmlFor="duration" className="form-label">
             Course Duration
            </label>
            <br />
            <input
              type="number"
              id="duration"
              className="form-control mt-3"
              placeholder="Duration"
              {...register("duration")}
            />
            <small className="text-red-700">{errors.duration?.message}</small>

            <br />
            <br />
            <label htmlFor="type" className="form-label">
            Course Type
            </label>
            <br />
             <select 
            className="form-control mt-3"
            id="type"
            {...register("type")}
            >
            <option value={"Physical"}>Physical</option>
            <option value={"Online"}>Online</option>
            <option value={"Physical_and_Online"}>Both Physical and Online</option>
           
            </select>
            <small className="text-red-700">{errors.type?.message}</small>
            <br />
            <br />
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <br />
            <input
              type="text"
              id="price"
              className="form-control mt-3"
              placeholder="price"
              {...register("price")}
            />
            <small className="text-red-700">{errors.price?.message}</small>
            <br />
            <br />
           
            <label htmlFor="description" className="form-label">
           Course Description
            </label>
            <br />
            <textarea
              type="text"
              id="description"
              className="form-control mt-3"
              rows="4" cols="30"
              {...register("description")}
            ></textarea>
            <br />
            <br />
            <input disabled={isSubmitting} type="submit" value="Submit" className="bg-primary mt-10 p-3 w-full text-white cursor-pointer rounded-lg font-semibold hover:bg-[#b56d16] disabled:bg-yellow-200"/>
            </div>
    </form>
    </>
  )
}