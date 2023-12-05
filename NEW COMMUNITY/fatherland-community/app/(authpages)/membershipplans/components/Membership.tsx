'use client'
import React from 'react'
import styles from './styles.module.css'
import { DotFilledIcon} from '@radix-ui/react-icons'



export default function Membership() {
  return (
    <div className='px-2 lg:px-0 container mb-[6.438rem] pt-[8.938rem] mx-auto'>

    <div className='bg-red300 mx-auto mb-[3.813rem]'>
        <p className='text-[#14202D] text-5xl font-bold leading-[56px] break-words text-center pb-[1.313rem]'>Membership Plans</p>
        <p className='text-[#14202D] text-xl font-normal leading-7 break-words text-center'>Select the membership plan that suits your community best</p>
    </div>
    
    <div className='flex justify-center'>
    <select name="" id="" className='lg:w-[45.188rem max-w-[718px] h-[4.063rem] bg-[#D9D9D947] text-[#282828] text-base font-medium break-words w-full outline-0 mx-auto'>
    <option value="" className=''>country</option>
    <option value="" className=''>1</option>
    <option value="" className=''>2</option>
    <option value="" className=''>3</option>
    <option value="" className=''>4</option>
    </select>
    </div>

<main className='flex justify-center max-w4xl items-center lg:ml-12'>
    
<section className='grid md:grid-cols-2 mx-auto w-full max-w-4xl container'>
    <div className={`w-full lg:w-[23.5rem] border-8 rounded-tr-[6px] rounded-lr-[6px] bg-white mt-[4.563rem] 
    ${styles.b1} border-b-0 border-l0 border-r0`}>

        <div className={`mx-auto px-8`}>
            <p className='text-[#333333] text-2xl font-bold break-words pb-[2.625rem] pt-[1.438rem]'>Basic</p>
            <p className='text-[#3AC840] text-xl font-bold break-words'>Free</p>
        </div>
        <div className="container mx-auto py-4">
        <hr className="border-t border-gray-300"/>
        </div>

        <div className='flex items-center mx-auto ps-7 lg:ps-0lg:justify-center mb-[8px]'>
            <DotFilledIcon className='text-[#FF8800]'/>
            <p className='text-[#333333] text-sm font-normal leading-5 break-words'>Reconnect to your African Roots and Heritage.</p>
        </div>
        <div className='flex itemscenter mx-auto ps-7 lg:ps-0lg:justify-center'>
            <DotFilledIcon className='text-[#FF8800]'/>
            <p className='text-[#333333] text-sm font-normal leading-5 break-words'>Access Regular Networking and Community Events.</p>
        </div>

        <div className='flex justify-center mb-[2.5rem]'>
        <button className='text-[#28D744] text-base font-semibold break-words border py-[11px] px-[12px] mt-[4.125rem] border-[#28D744]'>Join Now</button>
        </div>

    </div>


<div className={`w-full lg:w-[23.5rem] border-8 rounded-tr-[6px] rounded-lr-[6px] bg-white mt-[4.563rem] ${styles.b2} border-b-0 border-l0 border-r0`}>

    <div className={`mx-auto px-8`}>
        <p className='text-[#333333] text-2xl font-bold break-words pb-[2.625rem] pt-[1.438rem]'>Basic</p>
        <p className='text-[#3AC840] text-xl font-bold break-words'>Free</p>
    </div>
    <div className="container mx-auto py-4">
    <hr className="border-t border-gray-300"/>
    </div>

    <div className='flex items-center mx-auto ps-7 lg:ps-0lg:justify-center mb-[8px]'>
        <DotFilledIcon className='text-[#FF8800]'/>
        <p className='text-[#333333] text-sm font-normal leading-5 break-words'>Reconnect to your African Roots and Heritage.</p>
    </div>
    <div className='flex itemscenter mx-auto ps-7 lg:ps-0lg:justify-center'>
        <DotFilledIcon className='text-[#FF8800]'/>
        <p className='text-[#333333] text-sm font-normal leading-5 break-words'>Access Regular Networking and Community Events.</p>
    </div>

    <div className='flex justify-center mb-[2.5rem]'>
    <button className='text-[#28D744] text-base font-semibold break-words border py-[11px] px-[12px] mt-[4.125rem] border-[#28D744]'>Join Now</button>
    </div>


    </div>
    </section>
</main>
</div>
  )
}
