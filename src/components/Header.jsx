import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'

export default function Header(){
let redux_user = useSelector((redux_store)=>{
  return redux_store.user.value
})
    return(
<nav className="bg-secondary p-3 ">
   {/* <nav className='bg-slate-400 p-3'> */}
    <div className="container flex justify-between ">
      <p>
        <Link className="text-primary text-3xl font-bold" href={"/"}>JobsPortal</Link> 
        </p>
      <ul className='flex gap-7  p-3 '>
        <li>
          <Link href={"/login"} className='text-primary p-2 text-lg hover:text-xl cursor-pointer'>Login</Link> 
        </li>
        <li>
        <Link href={"/"} className='bg-primary text-white text-lg px-5 py-2 rounded-lg hover:bg-[#0e5949] cursor-pointer'>Post a job</Link>       
 </li>
      </ul>
    </div>
   </nav>
    )
} 
