import React from 'react'
import style from './styles.module.css'
import { ADVERTISE } from '@/lib/data'

export default function Advertising() {
  return (
    
        <div className={`${style.bckg}`}>
            {ADVERTISE.map((advert)=>(
              <div>
                {/* <div className=''>{advert.id}</div> */}
                <div className='text-white text-2xl w-[39rem] font-bold px-28 pt-28'>{advert.text}</div>
                <div className='text-white px-28 w-[52rem] font-[500] mt-5'>{advert.text1}</div>
                
            </div>
               
              
            ))}
         </div>
    
  )
}
