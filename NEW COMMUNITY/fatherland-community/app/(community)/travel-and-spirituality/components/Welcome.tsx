'use client'
import React from 'react'
import Image from 'next/image'
import man from '@/public/Group 1000003319.png'

export default function Welcome() {
  return (
    <div className='mx-auto w-full container'>

        <section className='w-full py-12 md:flex justify-around items-center'>
            
                <Image src={man} alt="" className={`lg:w-[34.938rem]`}/>

                <div className='mt-12 md:mt-0 px-5 border-[#DA5001] rounded-t-[10px] rounded-b-[10px] border-[6px] border-t-0 border-l-0 border-b-0 '>
                    <p className='text-[#14202D] text-[40px] font-bold leading-[50px] break-words mb-[1.938rem] lg:w-[29.5rem] lg:h-[6.25rem]'>Welcome to Fatherland <span className='text-[#DA5001]'>Tour</span> and <span className='text-[#DA5001]'>Spirituality</span></p>
                    <p className='lg:w-[29.5rem] lg:h-[10.125rem] text-[#14202D] text-xl font-normal leading-7 break-words'>
                    Fatherland Community organizes unique tours that explore
                     the history, spirituality, landscapes, culture, and culinary 
                     traditions of locations in Africa which is our specialization. It provides you with 
                    a travel experience that is creative, exciting, safe, and genuinely inspiring.
                    </p>

                </div>
                
            
        </section>




















    </div>
  )
}
