'use client'
import React from 'react'
import Image from 'next/image'
import k1 from '@/public/joingroup.png'
import style from './styles.module.css'

export default function Join() {
  return (
    <div className=' max-w-[90rem] bg-[#fcf1e5] mx-auto container pb-[5rem] lg:flex justify-between items-center'>
        
       
       
        <Image src={k1} alt='' className='mx-auto pt-12 '></Image>
        
        
        <div className={`${style.bleft} mx-auto lg:w-[45rem] h[23.125rem] mb5`}>
            <p className='text-black text-5xl font-extrabold leading-10 break-words pb-[1.375rem]'>Join Fatherland Community</p>
            <p className='lg:w-[35.688rem] text-[14202Drem] font-normal leading-6 break-words pb-[2.25rem]'> Our community delivers exclusive benefits and brands to the global members of African Descent and Non-Africans, targeting over 100 million members. Enjoy exclusive benefits across travel, lifestyle, heritage, history, spirituality, culture, entertainment, education, investment,
                 social & business networking & attractive tangible business possibilities when you join.</p>
                 <button className='bg-[#FF8800] text-white font-semibold text-base break-words px-[10px] rounded-[5px] py-[18px]'>Join Fatherland Community</button>
        </div>
        
       
        
        

        
        
        
    </div>
  )
}
