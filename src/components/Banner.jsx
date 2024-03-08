import React, { Fragment } from 'react'
import Image from 'next/image'
import bannerImg from '../assets/banner.png'
import { useRouter } from 'next/router'



export default function Banner(){
    const router = useRouter()


    function handleSearch(e){
e.preventDefault();
// router.push("/?search_term=" + e.target.search_term.value)
router.push(`/?search_term=${e.target.search_term.value}&job_level=${e.target.job_level.value}`)
    }
    return(
            <>
            <div className='p-3 bg-[#d7d8d9]'>
                <div className='container flex justify-between'>
                <div>
<p className='text-black text-5xl font-extrabold font-sans mt-7' >Find A <span className='text-primary'>Job</span>  That <br/> <span className='text-primary'>Matches</span> Your <br/> Passion</p>
<p className='text-[#3e423f] mt-5'>Hand-picked opportunities to work from home, remotely, freelance,<br/> full-time, part-time, contract and internships.</p>
<form className=' mt-20' onSubmit={handleSearch}>
          <div className='flex'><input type="text" name='search_term' className=' bg-white border w-72 h-18 outline-none px-2 rounded-lg' placeholder='Search by Keyword'  />
            <button className='bg-primary text-white px-5 py-3 inline rounded-lg hover:bg-[#b56d16]'>
             Search
            </button>
            </div>
            <p className='mt-3 font-semibold text-lg'>Job Level</p>
            <select name="job_level" className='w-48 h-11 rounded-lg outline-none'>
                <option value=""></option>
                <option value="intern">Intern</option>
                <option value="fresher">Fresher</option>
                <option value="junior">Junior</option>
                <option value="mid">Mid</option>
                <option value="senior">Senior</option>
            </select>
          </form>
          </div>
            
            <div className=' p-3 w-3/6'>
                <Image src={bannerImg} alt='' className='w-5/6 bg-[#d7d8d9]' height={200} width={200}></Image>
            </div>
            </div>
            </div>
            
            </>
        )
    }
