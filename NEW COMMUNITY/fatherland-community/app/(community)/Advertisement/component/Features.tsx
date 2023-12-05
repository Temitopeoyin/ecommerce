import React from 'react'
import Image from 'next/image'
import { FEATURE } from '@/lib/data'
export default function Features() {
  return (
     <div>
       <div className='mt-5 font-bold px-20 text-2xl '>Feature Your Adverts on:</div>

       {FEATURE.map((feat)=>(
        <div className=' mx-12 flex justify-around max-w-7xl overflow-x-auto'>
         
          
             <Image src={feat.t1.image} alt=''  className='  '/>
             <Image src={feat.t2.image} alt=''  className='  '/>
             <Image src={feat.t3.image} alt=''  className='  '/>
             <Image src={feat.t4.image} alt=''  className='  '/>
             <Image src={feat.t5.image} alt=''  className='  '/>
             <Image src={feat.t6.image} alt=''  className='  '/>
             <Image src={feat.t3.image} alt=''  className='  '/>
             <Image src={feat.t4.image} alt=''  className='  '/>
             <Image src={feat.t5.image} alt=''  className='  '/>
             <Image src={feat.t6.image} alt=''  className='  '/>             <Image src={feat.t3.image} alt=''  className='  '/>
             <Image src={feat.t4.image} alt=''  className='  '/>
             <Image src={feat.t5.image} alt=''  className='  '/>
             <Image src={feat.t6.image} alt=''  className='  '/>
             
             
            
     
         </div>
       ))}
    </div>
  )
}



 {/* <div>
             <div>{feat.twenty}</div>
             <div>
                 <div>{feat.global}</div>
                 <div>{feat.globcontent}</div>
             </div>    
          </div> */}