import React from 'react'
import Image from 'next/image'
import { BLOG } from '@/lib/data'
import { Montserrat } from 'next/font/google'
import { ArrowRightIcon } from '@radix-ui/react-icons'
// import { Raleway } from 'next/font/google'
// const rale = Raleway({
//    subsets:['latin']
// })

const monserat= Montserrat({
   subsets:['latin']
})

export default function Bloog() {
   
  return (
       <div className=' mx-auto container mt-20'>
           <div className='mx-auto container'>
               <p className={`text-2xl font-[800] mt-10 mx-auto text-center  lg:text-start lg:ps-[0.5rem]`} >Blog</p>
               <div className='mt-5 mx-auto'>
                   
                  <div className=' w-full grid lg:grid-cols-3 gap-4 max-w7xl  mx-auto'>
                      {BLOG.map((entt)=>(
                          <div className={`bgwhite border  mx-auto wfull lg:w[23.625rem rounded-[10px] hover:border-primary  active:border-primary shadow-lg shadow-blue-100`}>
                             <Image src={entt.image} alt='' className='mb-6 w-full' ></Image>
                             <div className={`${monserat.className}text-[#26499D] ml-5 bg-[#dce0e6]  mb-4 inline text-sm px-5 py-2 font-[550] rounded-full`}>
                                {entt.text1}</div>
                               <div className=' text-2xl font-[700] mt-2 mx-auto text-center ml-3 lg:text-start lg:ps-[0.5rem]'>{entt.text2}</div>
                               <div className='lg:pl[2.5rem] pl[0.5rem] mt-3 font-[300] mb-3 ps2 ml-5 text-sm pl6'>{entt.loream}</div>
                               <div className={`${monserat.className} flex items-center text-[#26499D] text-sm font-[650] mb-5 mt-5 ml-5`}>
                                  <p className='mt5'>{entt.more} </p>
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