import { Button } from '@/components/ui/button'
import Container from '@/components/ui/container'
import { EVENTS } from '@/lib/data'
import Image from 'next/image'
import React from 'react'
import { MdCalendarMonth } from 'react-icons/md'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import Link from 'next/link'

export default function UpcomingEvents() {

  const renderEvents = EVENTS.map(event => ( 
    <div key={event.name} className='upcoming_events_card hover:border hover:border-primary active:border active:border-primary cursor-pointer'>
      <Image src={event.image} alt={event.name} className='rounded-t-md' />
      <div className='p-4 space-y-4'>
         <Link href={`/tickets-and-events/${event.id}`}><p className='font-[600] hover:underline'>{event.name}</p></Link>
        <div className='flex space-x-4 text-sm'>
          <p className='flex'><MdCalendarMonth className='my-auto mr-2' /> {event.date}</p>
          <p className='flex'><HiOutlineLocationMarker className='my-auto mr-2' /> {event.location}</p>
        </div>
        <div  className='mt-auto'>
          <Button>Buy Tickets</Button>
        </div>
      </div>
    </div>
  ))

  const renderPreviousEvents = EVENTS.slice(0, 3).map(event => (
    <div key={event.name} className='upcoming_events_card hover:border hover:border-primary active:border active:border-primary cursor-pointer '>
      <Image src={event.image} alt={event.name} className='rounded-t-md' />
      <div className='p-4 space-y-4'>
      <Link href={`/tickets-and-events/${event.id}`}><p className='font-[600] hover:underline'>{event.name}</p></Link>
        <div className='flex space-x-4 text-sm'>
          <p className='flex'><MdCalendarMonth className='my-auto mr-2' /> {event.date}</p>
          <p className='flex'><HiOutlineLocationMarker className='my-auto mr-2' /> {event.location}</p>
        </div>
      </div>
    </div>
  ))
  
  return (
    <Container>
      <div className='mt-20 px-8'>
        <h5 className="text-4xl font-[700]  py-5 ">Upcoming Events</h5>
        <div className='grid grid-cols-3 gap-x-6 gap-y-12'>
          {renderEvents}
        </div>
        <h5 className="text-4xl font-[700] mt-20 py-5 ">Previous Events & Webinars</h5>
        <div className='grid grid-cols-3 gap-x-6 gap-y-12'>
          {renderPreviousEvents}
        </div>
      </div>
    </Container>
  )
}
