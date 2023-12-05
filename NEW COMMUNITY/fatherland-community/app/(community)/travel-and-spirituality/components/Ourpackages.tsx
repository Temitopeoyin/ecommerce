'use client'
import React from 'react'
import Image from 'next/image'
import lady from '@/public/Rectangle 5707.png'
import { DividerVerticalIcon } from '@radix-ui/react-icons'


export default function Ourpackages() {
  return (
    <div className='bg-[#fcf1e5] mx-auto w-full lg:h-[59.438rem'>

        <section className='mx-auto w-full containe' >
            <div className='w-full mx-auto container'>
                <p className='lg:mx-[6.063rem] pt-[2.875rem] text-[#1402D] text-center lg:text-start lg:text-[40px] font-bold lg:leading-[50px] lg:pb-[4rem] break-words lg:w-[58.313rem] w-full'>
                    Our package includes <span className='text-[#DA5001] pr-2'>quality</span>
                    accommodation on <span  className='text-[#DA5001] pr-2'>excellent</span> local guide for every trip of travel
                </p>
            </div>

        <div className='mx-[6.063rem] lg:flex justify-between'>
            <Image src={lady} alt="" className='lg:pb-24'/>


            <div className=' pt-12 lg:pt-0'>
                <p className='text-black text-xl font-normal leading-5 break-words lg:px-[9.563rem] lg:py-[2.375rem] rounded-[7px]  bg-white'>Wonderful Cultural Experience</p>
                <div className='flex lg:justify-between justify-around lg:px-20 px-0 text-primary'>
                    <div className=''>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    </div>
                    <div>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    </div>
                </div>
                <p className='text-black text-xl font-normal leading-5 break-words lg:px-[9.563rem] lg:py-[2.375rem] rounded-[7px]  bg-white'>Impressive Historical Locations</p>
                <div className='flex lg:justify-between justify-around lg:px-20 px-0 text-primary'>
                    <div>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    </div>
                    <div>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    </div>
                </div>
                <div className='text-black text-xl font-normal leading-5 break-words lg:px-[9.563rem] lg:py-[2.375rem] rounded-[7px] py3 px12  bg-white'>Value of Guided Travel</div>
                <div className='flex lg:justify-between justify-around lg:px-20 px-0 text-primary'>
                    <div>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    </div>
                    <div>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    </div>
                </div>
                <p className='text-black text-xl font-normal leading-5 break-words lg:px-[9.563rem] lg:py-[2.375rem] rounded-[7px]  bg-white'>Easy & Convenient Booking</p>
                <div className='flex lg:justify-between justify-around lg:px-20 px-0 text-primary'>
                    <div>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    </div>
                    <div>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    </div>
                </div>
                <p className='text-black text-xl font-normal leading-5 break-words lg:px-[9.563rem] lg:py-[2.375rem] rounded-[7px]  bg-white'>Expert Tour Managers</p>
                <div className='flex lg:justify-between justify-around lg:px-20 px-0 text-primary'>
                    <div>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    </div>
                    <div>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    </div>
                </div>
                <p className='w-full text-black text-xl font-normal leading-5 break-words lg:px-[9.563rem] lg:py-[2.375rem] rounded-[7px]  bg-white'>Private Airport Transfers</p>
                <div className='flex lg:justify-between justify-around lg:px-20 px-0 text-primary'>
                    <div>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    <span className='hidden lg:block'><DividerVerticalIcon /></span>
                    <span className='hidden lg:block'><DividerVerticalIcon /></span>  
                    <span className='hidden lg:block'><DividerVerticalIcon /></span>
                    <span className='hidden lg:block'><DividerVerticalIcon /></span>
                    </div>
                    <div>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    <span className='hidden lg:block'><DividerVerticalIcon /></span>
                    <span className='hidden lg:block'><DividerVerticalIcon /></span>  
                    <span className='hidden lg:block'><DividerVerticalIcon /></span>
                    <span className='hidden lg:block'><DividerVerticalIcon /></span>
                    </div>
                </div>
            </div>







        </div>
        </section>

    </div>
  )
}
