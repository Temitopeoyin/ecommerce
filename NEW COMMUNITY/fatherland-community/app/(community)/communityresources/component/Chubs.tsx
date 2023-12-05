import React from 'react'
import style from './styles.module.css'
// import Image from 'next/image'
// import fffrr from '@/public/fffrr.png'
import { Button } from '@/components/ui/button'
// import {Raleway } from 'next/font/google'
// import { Poppins } from 'next/font/google'


// const rale = Raleway({
//    subsets:['latin']
// });

// const rale = Raleway({
//    subsets:['latin']
// });
const CHUB = [
  {
    id:"1",
    text:"COMMUNITY HUBS",
    text1:'We are in exciting locations in all parts of the world',
     content:'Community Hubs are local centers of activities and co-working spaces with media studio facilities strictly for Community Hub   Members in the United States and around the World. FCH will provide flexible solutions, inspiring, safety-focused spaces, and unmatched community experiences for its   members. The Fatherland Community Hub operates physical and online activities.',
     button:'View all Locations',
  }
]



export default function Chubs() {
  return (
    <div className={`${style.bgg}  mb-32 mt-40 bg-red-500 lg:h[578px]` } >
      {CHUB.map((chum)=>(
      <main className='lg:flex items-center justifyaround container'>
        <div className='mx-auto container'>
         <div className='  border-[10px] border-primary ps-[2.438rem] border-t-0 border-b-0 border-r-0 rounded-t-[10px] rounded-b-[10px] lg:h-[23.125rem] container mx-auto lg:ml-[3rem'>
             <div className='text-white pt-12  '>{chum.text}</div>
             <div  className={`text-primary font-bold lg:text-2xl mt-3 ml28 mb-5 `}> <p className='mt-3'>{chum.text1}</p></div>
             <div  className='text-white ml28 font-[600] text-[16px] leading-7 break-words py-[1.063rem] lg:w-[45rem]'>{chum.content}</div>

             <Button className='border bg-transparent border-white'>{chum.button}</Button>
          </div>
          
       </div>
        {/* <Image src=} alt="" className=''/> */}
      </main>
      ))}
       
    </div>
  )
}
