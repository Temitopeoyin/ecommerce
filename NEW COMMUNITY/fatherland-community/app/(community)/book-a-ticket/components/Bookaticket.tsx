'use client'
import React from 'react'
import no2 from "@/public/no2.png";
// import Link from "next/link";
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import no1 from '@/public/no1.png'
import special from '@/public/special 1.png'
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

export default function Bookaticket() {

  const [count, setCount] = useState(0)

const plus = ()=>{
    
    setCount(count+1)
  }
  const minus = () =>{
    setCount(count-1)
    if (count == 0) {
      setCount(0)
    }
  }

  return (
    <div className="pt-[5.563rem bg-[#fcfdff]">
      <div className="bg-[#2B3449] mx-auto mb-[3.813rem]">
        <p className="text-white text-[40px] font-bold leading-[56px] break-words mx-auto container ps-[5rem] py-[6.5rem]">
          Book a Ticket
        </p>

      </div>

      <section className="lg:flex justify-around max-w-7xl mx-auto">
        <div className="bg-green500 rounded-[15px] px2 max-w-[50rem mxauto mb-12">
          <main className="bg-white bg-red500 rounded-[15px] px2 max-w-[50rem mxauto mt-[42px">
            <div className="flex items-center py-[2.044rem] px-[2.25rem]">
              <Image src={no1} alt="" className="mr-[1.438rem]" />
              <p className="text-[#14202D] text-2xl font-normal break-words pb-[1.813rem">
                Contact Details
              </p>
              
            </div>
            <p className='mx-auto container pl-12 pb-[3.125rem] text-[#14202D] text-base font-normal leading-5'>We'll use this information to send you confirmation and updates about your booking </p>
            <form action="" className="mxauto px-[2.25rem] pb-[2.914rem]">
            <div className="lg:flex justify-between pb-[2.688rem] gap-4 mx-auto">
                <div>
                  <label htmlFor="" className="">
                    First Name
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    className="w-full lg:w-[22rem] h-[65px] bg-[#f4f4f4  bg-[#f4f4f4] rounded-[6px] mb-[2.688rem] lg:mb-0"
                  />
                </div>
                <div>
                  <label htmlFor="" className="">
                    Last Name
                  </label>{" "}
                  <br />
                  <input
                    type="password"
                    className=" w-full lg:w-[22rem] h-[65px] bg-[#f4f4f4  bg-[#f4f4f4] rounded-[6px]"
                  />
                </div>
              </div>
              <label htmlFor="" className="">
                Email Address
              </label>{" "}
              <br />
              <input
                type="text"
                className="bg-[#f4f4f4] w-full h-[65px] mb-[2.688rem] rounded-[6px]"
              />
              <label htmlFor="" className="">
                Nationality
              </label>{" "}
              <br />
              <input
                type="text"
                className="bg-[#f4f4f4] w-full h-[65px] mb-[2.688rem] rounded-[6px]"
              />
              
              <label htmlFor="" className="">
                Phone Number
              </label>{" "}
              <br />
              <input
                type="text"
                className="bg-[#f4f4f4] w-full h-[65px] mb-[2.688rem] rounded-[6px]"
              />
            <label htmlFor="" className="">
                Date of Birth
              </label>{" "}
              <br />
              <input
                type="text"
                className="bg-[#f4f4f4] w-full h-[65px] mb-[2.688rem] rounded-[6px]"
              />
                  <label htmlFor="" className=''>Gender</label> <br/>
                <select name="" id="" className='w-full bg-[#f4f4f4] h-[65px] px-[0.999rem] mb-[2.688rem] rounded-[6px]'>
                    <option value="" className='px-[2rem'>Male</option>
                    <option value="" className='px-[0.999rem'>Female</option>

                </select>

            </form>
          </main>

          <main className="bg-white bg-red500 rounded-[15px] px2 max-w-[800px mxauto mb12 mt-[42px]">
            <div className="flex items-center py-[2.044rem] px-[2.25rem]">
              <Image src={no2} alt="" className="" />
              <p className="text-[#14202D] text-2xl font-normal break-words pl-7">
                Passport Details
              </p>
            </div>
            <p className='mx-auto container pl-12 pb-[3.125rem] text-[#14202D] text-base font-normal leading-5'>Tell us your Passport Details</p>
            <form action="" className="mxauto px-[2.25rem] pb-[2.914rem]">
              <label htmlFor="" className="">
                Passport Number
              </label>{" "}
              <br />
              <input
                type="text"
                className="bg-[#f4f4f4] w-full h-[65px] mb-[2.688rem] rounded-[6px]"
              />
              <label htmlFor="" className="">
                Passport Expiry
              </label>{" "}
              <br />
              <input
                type="text"
                className="bg-[#f4f4f4] w-full h-[65px] mb-[2.688rem] rounded-[6px]"
              />
              <label htmlFor="" className="">
                Passport Issuing Authority
              </label>{" "}
              <br />
              <input
                type="text"
                className="bg-[#f4f4f4] w-full h-[65px] rounded-[6px] lg:w-[724px"
              />

              <div className="flex justify-center mt-[4.906rem] ">
                <Button className='font-semibold break-words text-base bg-[#FF8800] px-[3rem] py-[0.563rem]'>Book</Button>
              </div>
            </form>
          </main>
        </div>

        <div className=' lg:w-[24.25rem] bg-white rounded-[8px] pt-[2rem] lg:h-[26.5rem]'>
        <div className='flex'>
        <Image src={special} alt="" className="rounded-t-md w-[54px] h-[48px] mr-[0.875rem] ml-[1.938rem]" /> 
        <div>
        <h1 className='text-[#14202D] text-xl font-normal leading-4 break-words'>7 days holiday to Badagry</h1>
        <p className='text-[#666666] text-sm font-normal leading-5 break-words mt-[0.688rem]'>Lagos State, Nigeria</p>
        </div>
        </div>

           <main className='px-[1.938rem] pt-[2rem]'>
           <div className='flex justify-between mb-[1rem]'>
                <p className='text-[#666666] text-sm font-normal leading-5 break-words'>Duration</p>
                <p className='text-[#14202D] text-base font-normal leading-4 break-words'>7 Days</p>
            </div>

            <div className='flex justify-between mb-[1rem]'>
                <p className='text-[#666666] text-sm font-normal leading-5 break-words'>Start Date</p>
                <p className='text-[#14202D] text-base font-normal leading-4 break-words'>Wed, 17 Jun 2023 11:00am</p>
            </div>

            <div className='flex justify-between mb-[1rem]'>
                <p className='text-[#666666] text-sm font-normal leading-5 break-words'>End Date</p>
                <p className='text-[#14202D] text-base font-normal leading-4 break-words'>Wed, 24 Jun 2023</p>
            </div>

                <hr />
                <div className='flex justify-between py-[0.813rem] items-center'>
                    <p className='text-[#666666] text-sm font-normal leading-5 break-words'>Number of Person</p>
                    <p><button className='px-[4px] py-[4px] bg-gray-400' onClick={plus}><PlusIcon /></button>
                    <span className='px-[1.313rem] text-base font-normal leading-5'>{count}</span>
                    <button className='px-[4px] py-[4px] bg-gray-400' onClick={minus}><MinusIcon /></button></p>
                </div>
                <div className='flex justify-between py-[0.813rem]'>
                <p className='text-[#666666] text-sm font-normal leading-5 break-words'>Ticket</p>
                <p className='text-[#14202D] text-base font-normal leading-4 break-words'>$5900</p>
                </div>
            <hr className='mb-[1rem]'/>

            <div className='flex justify-between py-[0.813rem]'>
               
                <p className='text-[#666666] text-sm font-normal leading-5 break-words'>Total Price</p>
                <p className='text-[#14202D] text-base font-normal leading-4 break-words'>$5900</p>
            </div>

            <p className='text-[#14202D] text-xs font-normal leading-5 break-words mb-[2rem]'>*The amount paid will be Non Refundable.</p>

           </main>

        </div>

      </section>
    </div>

  )
}
