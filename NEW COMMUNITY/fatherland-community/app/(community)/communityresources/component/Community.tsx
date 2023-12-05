'use client'
import React from 'react'
import style from './styles.module.css'
import { Montserrat } from 'next/font/google'
import { COMMUNITY } from '@/lib/data'

const momserat = Montserrat({
   subsets: ['latin'],
  //  weight:['700']
})


export default function Community() {
  const renderCummunity = COMMUNITY.find((comune => comune.id))
  console.log (renderCummunity)
  return (
    <div >
        <div className={`${style.backg} pr-10`}> 
             <div className={`${momserat.className} font-[700] px-40 text text-center text-2xl text-white pt-20`}> {renderCummunity?.text}</div>
                
            <div className={`${momserat.className} font-[400] px-32  py-8 text-white text-center`} > {renderCummunity?.content}</div>
        </div>
    </div>
  )
}
