import Container from '@/components/ui/container'
import React from 'react'
import tickets_bg from '@/public/assets/tickets-and-events/tickets-bg.png'
import Image from 'next/image'

export default function GrabTickets() {
  return (
    <Container>
      <div className='w-full bg-red-40 '>
        <div className='w-full mt-0 relative h-96  bg-red-100'>
          <Image src={tickets_bg} alt='' fill className=' object-cover opacity1 z-10 ' />
          <h1 className='z-20'>Grab Your Tickets To <span className='text-secondary'>Spectacular</span>  Events</h1>
          <div className='absolute p-20 w-full h-full  text-white text-center z-20 bg-red-20'>
            <h1 className='z-20 mt20 text-5xl font-[500] leading-snug'>Grab Your Tickets To <span className='text-secondary'>Spectacular</span> <br />  Events</h1>
            <p className='max-w-2xl text-center mx-auto mt-6'>Experience Life`s Highlights by finding your perfect event and securing your tickets to series of Africa-inclined events throughout the entire year!</p>
          </div>
        </div>
        <div className='relative w-full top0  text-black bg-red-20   z-40 h-40'>
          <div className='absolute rounded-lg  -top-10 left-1/2 transform -translate-x-1/2 -translate-y1/2  w-[60rem]  bg-white border border-[#Ff8800] px-10'>
            <h5 className='pt-4 text-[#252525] font-[600] '>Find Your Next Event</h5>
            <div>
              <form action="" className='flex py-10 w-full space-x-4'>
                <div className='flex flex-col space-y-2'>
                  <label htmlFor="event" className='font-[600]' >Search for event</label>
                  <input type="text" id="event" name="event" placeholder='Enter event name' className='px-4 py-2 bg-[#D9D9D94A] rounded-lg' required />
                </div>
                <div className='flex flex-col space-y-2'>
                  <label htmlFor="location" className='font-[600]' >Place</label>
                  <input type="text" id="location" name="location" placeholder='Enter location' className='px-4 py-2 bg-[#D9D9D94A] rounded-lg' required />
                </div>
                <div className='flex flex-col space-y-2'>
                  <label htmlFor="time" className='font-[600]' >Time</label>
                  <input type="text" id="time" name="time" placeholder='Today' className='px-4 py-2 bg-[#D9D9D94A] rounded-lg' required />
                </div>
                <div className='bg-red-20 flex'>
                  <button className='bg-primary text-white px-6 py-2 inline mt-auto rounded-lg'>Search</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </Container>
  )
}
