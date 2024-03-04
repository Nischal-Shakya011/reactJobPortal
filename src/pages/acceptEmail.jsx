import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";

const schema = yup
  .object({
    email: yup.string().email().required(),
    subject: yup.string().required(),
    message: yup.string().required(),


  })
  .required()

export default function AcceptEmail() {
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
    axios.post("https://express-job-portal-u1uo.vercel.app/api/email/accept", data, 
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
     alert("email sent successfully");
      })
      .catch((err) => {
     alert("email sent successfully");
        console.log(err);
        setisSubmitting(false)
      });
}

  return (
    <>
    <div>
    <div className="bg-back p-6 text-xl text-center font-bold">
    Send Email
</div>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container border border-back rounded-lg outline-none shadow-sm p-8 mt-8 w-2/4 ">
      
            <label htmlFor="email" className="form-label">
              Email To
            </label>
            <br />
            <input
              type="email"
              id="email"
              className="form-control mt-3"
              {...register("email")}
            />
            <small className="text-red-700">{errors.email?.message}</small>

            <br />
            <br />
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <br />
            <input
              type="text"
              id="subject"
              className="form-control mt-3"
              {...register("subject")}
            />
            <small className="text-red-700">{errors.subject?.message}</small>
            <br />
            <br />
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <br />
            <textarea
            rows={4} cols={30}
              type="text"
              id="message"
              className="form-control mt-3"
              {...register("message")}
            ></textarea>
            <small className="text-red-700">{errors.message?.message}</small>
            <br />
            <br />
            <input  type="submit" value="Send" className="bg-primary mt-10 p-3 w-full text-white cursor-pointer rounded-lg font-semibold hover:bg-[#0e5949] disabled:bg-green-200"/>
            </div>
    </form>
    </div>
    <br />
    <Footer className="footer"/>
    </>
  )
}