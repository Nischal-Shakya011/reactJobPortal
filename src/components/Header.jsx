import React from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { logout, setReduxUser } from '@/redux/slice/userSlice';
import {BiUserCircle} from 'react-icons/bi'
import { COMPANY } from '@/const/roles';


export default function Header(){
const dispatch = useDispatch();

let redux_user = useSelector((redux_store)=>
 redux_store.user.value)
    return(
<nav className="bg-secondary p-3 ">
   {/* <nav className='bg-slate-400 p-3'> */}
    <div className="container flex justify-between ">
      <p>
        <Link className="text-primary text-3xl font-bold" href={"/"}>JobHunt</Link> 
        </p>
      <ul className='flex gap-7  p-3 '>
        {/* <li>{redux_user?.name}</li>  */}
        
        <li>
        <Link href={"/jobStatus"} className='bg-primary text-white text-lg px-5 py-2 rounded-lg hover:bg-[#b56d16] cursor-pointer'>Charts</Link>       
        </li>
       {
        
        redux_user
        ?
        
        <>
        <li>
          <Link href="/getProfile" className='bg-primary text-white text-lg px-3 py-2  rounded-lg hover:bg-[#b56d16] cursor-pointer'><BiUserCircle className="inline"/> {redux_user.name}</Link>
        </li>
       { redux_user.role != COMPANY
       ?
       <>
        <li>
          <Link href={"/apply"} className='bg-primary text-white text-lg px-3 py-2  rounded-lg hover:bg-[#b56d16] cursor-pointer'>Applied Jobs</Link>
        </li>
        <li>
          <Link href={"/recommendation"} className='bg-primary text-white text-lg px-3 py-2  rounded-lg hover:bg-[#b56d16] cursor-pointer'>Recommended Jobs</Link>
        </li>
        </>
        :
        <>
        <li>
      <Link href={"/company/create"} className='bg-primary text-white text-lg px-5 py-2 rounded-lg hover:bg-[#b56d16] cursor-pointer'>Post a job</Link>       
</li>
        <li>
          <Link href={"/company"} className='bg-primary text-white text-lg px-3 py-2  rounded-lg hover:bg-[#b56d16] cursor-pointer'>Posted Jobs</Link>
        </li>
        </>
        }
        <li>
        <Link href={"/"} className='text-primary p-2 text-lg hover:text-xl cursor-pointer' onClick={()=>{
          // dispatch(setReduxUser(null))
          dispatch(logout())
        }}>Logout</Link>
          </li>
          </>
        
        
        :
        <>
        <li>
        <Link href={"/login"} className='text-primary p-2 text-lg hover:text-xl cursor-pointer'>Login</Link> 
      </li>
     

        </>
        
      }
        
    
      </ul>
    </div>
   </nav>
    )
} 
