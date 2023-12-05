import React from 'react'
import Image from 'next/image'
import { EVENT } from '@/lib/data'
import { Montserrat } from 'next/font/google'
import { ArrowRightIcon } from '@radix-ui/react-icons'


const monserat= Montserrat({
   subsets:['latin']
})

export default function Event() {
   
  return (
       <div className=' mx-auto container mt-20'>
           <div className='mx-auto container'>
               <p className=' text-2xl font-[700] mt-10 mx-auto text-center  lg:text-start lg:ps-[0.5rem]'>Events & Webinars</p>
               <div className='mt-5 mx-auto'>
                   
                  <div className=' w-full grid lg:grid-cols-3 gap-4 max-w7xl box-border mx-auto'>
                      {EVENT.map((vent)=>(
                          <div className={`bgwhite border  mx-auto wfull lg:w[23.625rem  rounded-[10px] upcoming_events_card hover:border hover:border-primary active:border active:border-primary cursor-pointer`}>
                             <Image src={vent.image} alt='' className='mb-6 w-full' ></Image>
                             <div className={`${monserat.className} ml-5 bg-[#f1e3bd] text-[#FFB612]  mb-4 inline text-sm px-5 py-2 font-[400] rounded-full`}>
                                {vent.text1}</div>
                               <div className=' text-2xl font-[700] mt-2 mx-auto text-center ml-3 lg:text-start lg:ps-[0.5rem]'>{vent.text2}</div>
                               <div className='lg:pl[2.5rem] pl[0.5rem] mt-3 font-[300] mb-3 ps2 ml-5 text-sm pl6'>{vent.loream}</div>
                               <div className={`${monserat.className} flex items-center text-[#26499D] text-sm font-[650] mb-5 mt-5 ml-5`}>
                                  <p className='mt5'>{vent.more} </p>
                                 <p className='py5 ml-1 font-[900] '> 
                                          <ArrowRightIcon /></p>
                               </div>
                           </div>
                         ))}
                   </div>
                </div>
           </div>

        </div>
  )
}
