'use client'
import React from 'react'
import { SPECIAL_OFFER } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PersonIcon } from '@radix-ui/react-icons';
import { BiCalendarEvent, BiLocationPlus } from 'react-icons/bi';
import Link from 'next/link';




export default function page({ params }: { params: { travelId: string } }) {
    const renderTravel = SPECIAL_OFFER.find((special) => special.id === params.travelId);
    console.log(renderTravel);
  return (
    <div className='mxauto max-w-[90rem] pt-[7rem] bg-whit bg-[#fcfdff]'> 
        
        <section className='mx-auto container lg:flex justify-around pb-[3.188rem]'>
        <Image src={renderTravel?.image!!} alt="" className="rounded-t-md" />

        <div className=' lg:w-[24.25rem] bg-white rounded-[8px] pt-[2rem]'>
        <div className='flex'>
        <Image src={renderTravel?.image!!} alt="" className="rounded-t-md w-[54px] h-[48px] mr-[0.875rem] ml-[1.938rem]" /> 
        <div>
        <h1 className='text-[#14202D] text-xl font-normal leading-4 break-words'>{renderTravel?.label}</h1>
        <p className='text-[#666666] text-sm font-normal leading-5 break-words mt-[0.688rem]'>{renderTravel?.state}, <span>{renderTravel?.country}</span></p>
        </div>
        </div>

           <main className='px-[1.938rem] pt-[2rem]'>
           <div className='flex justify-between mb-[1rem]'>
                <p className='text-[#666666] text-sm font-normal leading-5 break-words'>Duration</p>
                <p className='text-[#14202D] text-base font-normal leading-4 break-words'>{renderTravel?.duration}</p>
            </div>

            <div className='flex justify-between mb-[1rem]'>
                <p className='text-[#666666] text-sm font-normal leading-5 break-words'>Start Date</p>
                <p className='text-[#14202D] text-base font-normal leading-4 break-words'>{renderTravel?.start_date}</p>
            </div>

            <div className='flex justify-between mb-[1rem]'>
                <p className='text-[#666666] text-sm font-normal leading-5 break-words'>End Date</p>
                <p className='text-[#14202D] text-base font-normal leading-4 break-words'>{renderTravel?.end_date}</p>
            </div>

                <hr />
                <div className='flex justify-between py-[0.813rem]'>
                <p className='text-[#666666] text-sm font-normal leading-5 break-words'>Ticket Per Adult</p>
                <p className='text-[#14202D] text-base font-normal leading-4 break-words'>${renderTravel?.price}</p>
                </div>
            <hr className='mb-[1rem]'/>

            <div className='flex justify-between py-[0.813rem]'>
                <p className='text-[#666666] text-sm font-normal leading-5 break-words'>Total Price</p>
                <p className='text-[#14202D] text-base font-normal leading-4 break-words'>${renderTravel?.price}</p>
            </div>

            <p className='text-[#14202D] text-xs font-normal leading-5 break-words mb-[11px]'>*With exclusive accomodation that elevate your holiday experience</p>
            <p className='text-[#14202D] text-xs font-normal leading-5 break-words mb-[2rem]'>*The amount paid will be Non Refundable.</p>

            <Link href='/book-a-ticket'><Button className='text-white rounded-[5px] bg-[#FF8800] w-full mb-[2.375rem]'>Book Now</Button></Link>

           </main>

        </div>
</section>
        <section className='container mx-auto'>
           <main className='container mx-auto ml-3'>
           <h1 className='text-[#282828] text-[40px] font-semibold break-words mb-[0.75rem]'>{renderTravel?.label}</h1>
            <p className='flex items-center gap-4 text-[#282828] text-xl font-normal break-words mb-[1.313rem]'><PersonIcon /> {renderTravel?.size}</p>
            <p className='flex items-center gap-4 text-[#282828] text-xl font-normal break-words mb-[1.313rem]'><BiCalendarEvent /> {renderTravel?.start_date} {renderTravel?.end_date}</p>
            <p className='flex items-center gap-4 text-[#282828] text-xl font-normal break-words mb-[3.188rem]'><BiLocationPlus />{renderTravel?.location},{renderTravel?.state},{renderTravel?.country}</p>
           </main>
        </section>

            <section className='mx-auto container pl-[5rem] mb-[9.563rem]'>
            <h1 className='text-[#14202D] text-4xl font-extrabold leading-[58px]'>Overview</h1>
            <p>{renderTravel?.text}</p>
            </section>

    </div>
  )
}
