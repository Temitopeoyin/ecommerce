'use client' 

import React from 'react'
import Image from 'next/image'
import no1 from '@/public/no1.png'
import card1 from '@/public/card1.png'
import card2 from '@/public/card2.png'

export default function Join() {
  return (
    <div className='mxauto pt-[5.563rem] max-w[90rem]'>

    <div className='bg-red300 mx-auto mb-[3.813rem]'>
        <p className='text-[#14202D] text-4xl font-bold leading-[56px] break-words text-center pb-[1.313rem]'>Join Fatherland Community</p>
        <p className='text-[#14202D] text-xl font-normal leading-7 break-words text-center'>We will use the information entered here for your membership card</p>
    </div>

        <section className='lg:flex justify-around max-w-7xl mx-auto'>

        <main className='bg-white bg-red500 rounded-[15px] px2 max-w-[50rem mxauto mb-12'>
            <div className='flex items-center py-[2.044rem] px-[2.25rem]'>
            <Image src={no1} alt="" className=''/> 
            <p className='text-[#14202D] text-2xl font-normal break-words pl-7'>Create Your Account</p>
            </div>


            <form action="" className='mxauto px-[2.25rem] pb-[2.914rem]'>
                <div className='lg:flex justify-around pb-[2.688rem] gap-4 mx-auto'>
               <div>
               <label htmlFor="" className=''>First Name</label> <br/>
                <input type="text" className='w-full lg:w-[20rem] h-[65px] bg-[#f4f4f4  bg-[#f4f4f4] rounded-[6px] mb-[2.688rem] lg:mb-0'/>
               </div>
                <div>
                <label htmlFor="" className=''>Last Name</label> <br />
                <input type="text" className=' w-full lg:w-[20rem] h-[65px] bg-[#f4f4f4  bg-[#f4f4f4] rounded-[6px]'/>
                </div>
                </div>

                <label htmlFor="" className=''>Email Address</label> <br />
                <input type="text" className='bg-[#f4f4f4] w-full h-[65px] mb-[2.688rem] rounded-[6px]' />

                <label htmlFor="" className=''>Phone Number</label> <br />
                <input type="text" className='bg-[#f4f4f4] w-full h-[65px] mb-[2.688rem] rounded-[6px]' />

                <label htmlFor="" className=''>Date of Birth</label> <br />
                <input type="text" className='bg-[#f4f4f4] w-full h-[65px] mb-[2.688rem] rounded-[6px]' />

                <div className='lg:flex justify-between mx-auto gap-4 pb-[2.688rem]'>
               <div>
               <label htmlFor="" className=''>Country</label> <br/>
                <input type="text" className='w-full lg:w-[20rem] h-[65px] bg-[#f4f4f4  bg-[#f4f4f4] rounded-[6px]  mb-[2.688rem] lg:mb-0'/>
               </div>
                <div>
                <label htmlFor="" className=''>CIty/State/Province</label> <br />
                <input type="text" className=' w-full lg:w-[20rem] h-[65px] bg-[#f4f4f4 bg-[#f4f4f4] rounded-[6px]'/>
                </div>
                </div>

                <label htmlFor="" className=''>Select preferred community hub</label> <br/>
                <select name="" id="" className='w-full bg-[#f4f4f4] h-[65px] px-[0.999rem] mb-[2.688rem] rounded-[6px]'>
                    <option value="" className='px-[2rem'>Fatherland Lagos</option>
                    <option value="" className='px-[0.999rem'>2</option>
                    <option value="" className='px-[0.999rem'>3</option>
                    <option value="" className='px-[0.999rem'>4</option>
                    <option value="" className='px-[0.999rem'>5</option>
                </select>

                <label htmlFor="" className=''>Password</label> <br />
                <input type="Password" className='bg-[#f4f4f4] w-full h-[65px] mb-[2.688rem] rounded-[6px]' />

                <label htmlFor="" className=''>Confirm Password</label> <br />
                <input type="password" className='bg-[#f4f4f4] w-full h-[65px] mb-[2.688rem] rounded-[6px]' />
                <div className='flex justify-center'>
                <button className=' py-[0.646rem] px-[1.375rem] rounded-[5px] bg-[#FF8800] text-white text-base font-semibold break-words mx-auto'>
                    Continue
                </button>
                </div>
            </form>

        </main>


            <div className=''>
                <p className=' pb-[3px] text-[#14202D] text-xl font-normal leading-7 text-center'>Your Membership Card</p>
                <p className='text-[#14202D] text-sm font-normal leading-7 w-full lg:w-[26.5rem] mb-[3.625rem] '>Your membership card will look like this. It's important that the name on your
                     membership card is correct, as they will
                     be required to gain access to community hubs in your location</p>


                <Image src={card1} alt="" className='mb-[2.5rem] lg:w-[357px] mx-auto'/>
                <Image src={card2} alt="" className='lg:w-[357px] mb-[2.5rem] mx-auto'/>


            </div>


        </section>





    </div>
  )
}
