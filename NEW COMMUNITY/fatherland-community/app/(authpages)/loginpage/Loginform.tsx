'use client'
import React from 'react'
import styles from '../loginpage/styles.module.css'

export default function Loginform() {
  return (
    <main className={`${styles.login_backgrounds} pt-[9rem] pb-[120px container mx-auto pb-[120px]`}>
  <div className='border border-[#1ABC94] rounded-[15px] mx-auto bg-white max-w-[51.813rem] lg:h-[41.813rem] mb-[20rem'>
        <div>
            <p className='text-[#333333] text-3xl font-bold break-words text-center pt-[4.188rem] pb-[0.5rem]'>Login to Fatherland Community</p>
            <p className='text-[#333333] text-base font-normal leading-6 break-words text-center'>Welcome back to your Afrocentric community</p>
        </div>

    <form action="" className='mt-[3.125rem] md:ms-[2.375rem] mx-[1rem] md:mx-auto'>
    <label htmlFor="" className='text-[#333333] text-base font-normal leading-6 break-words'>
    Email Address
    </label> <br />
    <input type="text" className='bg-[#F7F9FB] outline-0 w-full lg:w-[47.063rem] mb-[2.688rem] h-[5rem] mx-auto placeholder-[#666666] font-normal text-base ps-[2.688rem]' placeholder=' example@gmail.com'/>

    <label htmlFor="" className='text-[#333333] text-base font-normal leading-6 break-words'>
    Password
    </label> <br />
    <input type="password" className='bg-[#F7F9FB] outline-0 w-full lg:w-[47.063rem] mb-[2.688rem h-[5rem] mx-auto placeholder-[#666666] font-normal text-base ps-[2.688rem]' placeholder=' *************'/> <br />


<div className='flex justify-center lg:mt-[7.625rem] mb-4 mt-4'>
<button className='text-white text-base font-semibold break-words bg-[#FF8800] px-[2.375rem] py-[0.6888rem] rounded-[5px] mx-auto'>
        Login
    </button>
</div>

   


    </form>

    </div>
    </main>
  
  )
}