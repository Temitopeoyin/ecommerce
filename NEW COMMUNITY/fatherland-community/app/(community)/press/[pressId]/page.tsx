// import Press from '@/app/pressRelease/component/Press'
import { PRESS } from '@/lib/data';
import { GoClock } from "react-icons/go";
import Image from 'next/image'
// import Group from "@/public/assets/Group.png";
import Link from 'next/link';
import { Entertainment } from '@/lib/data';


import React from 'react'

    export default function PressPage({ params }: { params: { pressId: string } }) {

      const renderPress = PRESS.find(item => item.id === params.pressId)
      console.log(renderPress)
      const renderEnt = Entertainment.find(enter => enter.id === params.pressId)
      console.log (renderEnt)

  return (
        <div className='mx-auto h-full max-w7xl bg-white  my-auto-full'>
          <div>
             <Image className='mx-auto max-w-7xl' 
              src={renderPress?.image!!} alt="" />
            </div>
            <p className='bg-[#f6e8d8] inline text-[#FF8800] text-l px-7 py-3 mb font-[550] ml-28 mt-2 rounded-full'>{renderPress?.text}</p>
            <div className='ml-14 px-2 mt-5 py-3'><span className='text-[#26D44B] md:text-4xl  ml-12 font-[590]'>{renderPress?.title}</span></div>
             <div className='ml-28 md:font-[00] flex flex-row mt-4 items-center pb-3'><span className='text-2xl'><GoClock /></span><p className='text-sm text-[#6f6d6d] ml-1'>30 May 2021</p></div>
           <div className={`px-20 mt-5 ml-8 text-lg`}>
                <p className='mt-5 '>
                    {renderPress?.content}
               </p>
            </div>

            <div>
              <p className='font-[700] text-3xl ml-24 mt-9'>{renderPress?.text1}</p>
              <div className='mt-1 fontbold ml-24' ><Image src={renderPress?.image1!!} alt="" /></div>
            </div>

             <div className='mt-5 mx-auto pb-32'>
                   <div className=' w-full grid lg:grid-cols-3 gap-4 max-w-7xl  mx-auto'>
                   {Entertainment.map((enter)=>(
                      <div className=' bg-white border border-red-200 rounded-[10px] mx-auto w-full lg:w-[23.625rem'>
                        <Image src={enter.image} alt='' className='object-cover mx-auto pt-[1.75rem] pb-[0.563rem] px-3 lg:px-0 lg:w-[21.5rem' ></Image>


                        <div className='font-[650] text-start lg:pl-[2.5rem pl-1 text-lg mx-auto lg:w-[21.375rem] lg:h-[60px]'>
                          {enter.text}</div>
                        <div  className='flex justifyaround items-center px5 '>
                        <Link href={`/press/${3}`} className='lg:pl-[2.5rem] pl-[0.5rem] mt-3 mb-3 ps2 pl6 font-[600] text inline text-amber-500 underline decoration-orange-40'>{enter.goto}</Link>
                        <div className='ml-14 text-xs md:font-[00] flex flex-row mt-4 items-center pb-3'><span className='pr-1'><GoClock/></span> {enter.date}</div>
                        </div>

                        



                      </div>
                      ))}
                   </div>
   
               </div>
          </div>

          
  )
}
   
