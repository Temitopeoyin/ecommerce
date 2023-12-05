'use clinet'
import React from 'react'
import style from './styles.module.css'
import { Button } from '@/components/ui/button'

export default function Joinorstart() {
  return (
    <div className={`max-w-[90rem] mb-[13.75rem] ${style.ft} `}>
      <main className={`${style.hher}`}>
      <div className=' lg:ps-[6.813rem] pb-[5.625rem] pt-[5.125rem] mx-auto'>
            <p className='text-white text-[40px] font-bold leading-[56px] break-words lg:w-[40.813rem] pb-[0.402rem]'>Join or Start Conversations with Other Community Members</p>
            <p className='text-white text-base font-normal leading-6 break-words lg:w-[35.688rem] pb-[1.813rem]'>Make friends and Talk about Anything, Join Conversations on Fatherland Community and Social Media </p>
            <Button className='px-[1.313rem] py-[0.688rem]'> Join a Conversation</Button>
        </div>
      </main>



    </div>
  )
}
