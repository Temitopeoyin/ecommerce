import Container from '@/components/ui/container'
import people3 from "@/public/assets/people3.png";
import Image from 'next/image';
import React from 'react'

export default function AfricanAuthenticStore() {
  return (
    <Container>
      <div className='bg-primary grid grid-cols-2 my-10 pb-14 gap-8 text-white'>
        <Image className="bg-red-20 col-span-2 lg:col-span-1 mx-auto lg:mr-auto" src={people3} alt='people'  />
        <div className='mx-auto my-10 px-6 lg:my-auto col-span-2 lg:col-span-1 bg-red-20'>
          <h3 className='text-lg  text-secondar'>African Authentic Store</h3>
          <p className='text-2xl font-[700] '>An Afrocentric Marketplace for unique and handcrafted items</p>
        </div>
      </div>
    </Container>
  )
}
