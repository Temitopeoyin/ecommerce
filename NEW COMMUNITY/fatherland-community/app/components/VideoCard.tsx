import Image from 'next/image'
import React from 'react'
import videoPlaceholder from '@/public/assets/video-placeholder.png'
import play from '@/public/assets/videoplay2.png'
import { AiOutlineClockCircle } from 'react-icons/ai'

export default function VideoCard() {
  return (
    <section className='w-[40rem]    bg-red-20'>
      <div className='relative'>
        <Image className='rounded-lg aspect-video object-cover w-[40rem ' src={videoPlaceholder} alt='video-playback' />
        <Image className='absolute inset-0 mx-auto my-auto cursor-not-allowed hover:bg-opacity-10 ' src={play} alt="play" />

      </div>
      <div className='mt-10'>
        <p className='text-muted text-xl font-[700] max-w-md'>Discover Unique Hand Picked Items On Fatherland Store </p>
        <div className='flex mt-4 space-x-4'>
          <p className='bg-white rounded-full text-sm px-4 py-2 border border-primary cursor-pointer'>Art and History</p>
          <p className='bg-white rounded-full text-sm px-4 py-2 border border-primary cursor-pointer  flex space-x-10'><AiOutlineClockCircle className="my-auto mr-1" /> 15:50 mins</p>
        </div>
      </div>

    </section>
  )
} 
