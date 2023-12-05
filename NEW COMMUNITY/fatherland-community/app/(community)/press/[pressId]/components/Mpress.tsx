import React from 'react'
import Image from 'next/image'
// import imag1 from "@/public/assets/imag1.png";
// import imag2 from "@/public/assets/imag2.png";
// import imag3 from "@/public/assets/imag3.png";

// import imag7 from "@/public/assets/imag7.png";
// import imag8 from "@/public/assets/imag8.png";
// import imag9 from "@/public/assets/imag9.png";
import Group from "@/public/assets/Group.png";
import Link from 'next/link';
import { GoClock } from "react-icons/go"
// import { link } from 'fs';
import { Entertainment } from '@/lib/data';



export default function Mpress() {

  return (
    <div className='mx-auto max-w-[90rem]'>
        <div className=''>
            <Image 
            src={Group} alt="" width={0} height={0} sizes='100vw' />
        </div>
        <div className=' mx-auto container'>
           <div className='mx-auto container'>
               <p className=' text-2xl font-[700] mt-14 mx-auto text-center  lg:text-start lg:ps-[0.5rem]'>Entertainment</p>
               <div className='mt-5 mx-auto'>
                   <div className=' w-full grid lg:grid-cols-3 gap-4 max-w-7xl  mx-auto'>
                   {Entertainment.map((enter)=>(
                      <div className=' bg-white border border-red-200 rounded-[10px]  hover:border-primary  active:border-primary shadow-lg shadow-blue-100 mx-auto w-full lg:w-[23.625rem'>
                        <Image src={enter.image} alt='' className='object-cover mx-auto pt-[1.75rem] pb-[0.563rem] px-3 lg:px-0 lg:w-[21.5rem' ></Image>


                        <div className='font-[650] text-base  text-start md:pl-[2.5rem pl-1 lg:text-lg mx-auto lg:w-[21.375rem] lg:h-[60px]'>
                          {enter.text}</div>
                        <div  className='flex justifyaround items-center px5 '>
                        <Link href={`/press/${enter.id}`} className='lg:pl-[2.5rem] pl-[0.5rem] mt-3 mb-3 ps2 pl6 font-[600] text inline text-amber-500 underline decoration-orange-40'>{enter.goto}</Link>
                        <div className='ml-14 text-xs md:font-[00] flex flex-row mt-4 items-center pb-3'><span className='pr-1'><GoClock/></span> {enter.date}</div>
                        </div>
                        </div>
                      ))}
                   </div>
                  </div>
           </div>

        </div>
    </div>
  )
}
