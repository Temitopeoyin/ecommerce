import React from 'react'
import Image from 'next/image'
// import { Button } from '@/components/ui/button'
import style  from './styles.module.css'
import Rectangle5825 from "@/public/Rectangle 5825.png"

export default function Africans() {

    const AFRICAN = [
        {
          id:"1",
          text:"Proudly Africans",
         content:'Community Hubs are local centers of activities and co-working spaces with media studio facilities strictly for Community Hub   Members in the United States and around the World.',
        
        }
      ]

  return (
    <div className='mt-32 mx-12'>
      <div className={`${style.bckg} mb-20  mt-10` } >
      {AFRICAN.map((Afro)=>(
      <div className='px-14 py-10 flex flex-rows-'>
         <div className=' mx-auto lg:ml-[3rem]'>
             <div className='text-white pt-12 font-bold text-2xl '>{Afro.text}</div>
             <div  className='text-white mt-5 font-[600] text-[16px] w-[27rem] text-cover'>{Afro.content}</div>
          </div>
          <div>
               <Image src={Rectangle5825} alt="" />
            </div>
       </div>
      ))}
       
    </div>
    </div>
  )
}
