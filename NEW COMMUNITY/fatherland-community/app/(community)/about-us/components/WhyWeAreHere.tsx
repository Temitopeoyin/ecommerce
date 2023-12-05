import Container from '@/components/ui/container'
import React from 'react'
import icon1 from "@/public/assets/icon1.png"
import icon2 from "@/public/assets/icon2.png"
import icon3 from "@/public/assets/icon3.png"
import Image from 'next/image'

// import Image, { StaticImageData } from "next/image";

const data = [
  {
    id: "1",
    name: "Uniting",
    content: "Powering the future by connecting African minds and ideas",
    icon: icon1 
  },
  {
    id: "2",
    name: "Creativity",
    content: "Revolutionaries African creatives for unleashing boundless potential",
    icon: icon2 
  },
  {
    id: "3",
    name: "Technology",
    content: "We harness the power of technological advancement to create opportunities",
    icon: icon3 
  },
]

export default function WhyWeAreHere() {

  const renderCard = data.map(item => {
    return (
      <div key={item.id} className='w-80  p-8 we_are_here_card  bg-red-10'>
        <Image src={item.icon} alt='icon' className='w-20' />
        <h5 className='mt-4 text-xl font-[700]  '>{item.name}</h5>
        <p className='mt-4 text-sm '>{item.content}</p>
      </div>
    )
  })
  
  return (
    <Container>
      <h4 className='text-center mt-20 text-5xl text-muted font-[800] capitalize'>Why We are Here</h4>
      <div className='mt-10 grid grid-cols-3 mb-10'>
        {renderCard}
      </div>
    </Container>
  )
}
