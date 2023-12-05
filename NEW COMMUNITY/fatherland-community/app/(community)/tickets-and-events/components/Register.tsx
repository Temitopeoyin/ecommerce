import Container from '@/components/ui/container'
import React from 'react'

export default function Register() {
  return (
    <Container>
      <div className='bg-[#282828] text-white my-20 px-8 py-20'>
        <h3 className='text-center text-4xl px-10 '>Register below for latest news and event updates from Fatherland.</h3>
        <form action="" className='mt-10 pb-10 bg-white rounded text-[#282828] text-lg font-[500] grid grid-cols-2 px-6 py-8 gap-x-4 gap-y-6'>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="firstName" className='font-[600] ' >First Name</label>
            <input type="text" id="firstName" name="firstName" placeholder='' className='px-4 py-6 bg-[#D9D9D94A] rounded-lg' required />
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="lastName" className='font-[600]' >Last Name</label>
            <input type="text" id="lastName" name="lastName" placeholder='Enter last name' className='px-4 py-6 bg-[#D9D9D94A] rounded-lg' required />
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="emai" className='font-[600]' >Email Address</label>
            <input type="text" id="emai" name="emai" placeholder='' className='px-4 py-6 bg-[#D9D9D94A] rounded-lg' required />
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="phoneNumber" className='font-[600]' >Phone Number</label>
            <input type="text" id="phoneNumber" name="phoneNumber" placeholder='' className='px-4 py-6 bg-[#D9D9D94A] rounded-lg' required />
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="company" className='font-[600]' >Your Company</label>
            <input type="text" id="company" name="company" placeholder='Enter last name' className='px-4 py-6 bg-[#D9D9D94A] rounded-lg' required />
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="position" className='font-[600]' >Your Position</label>
            <input type="text" id="position" name="position" placeholder='Enter last name' className='px-4 py-6 bg-[#D9D9D94A] rounded-lg' required />
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="signingUpAs" className='font-[600]' >Signing Up as:</label>
            <input type="text" id="signingUpAs" name="signingUpAs" placeholder='Enter last name' className='px-4 py-6 bg-[#D9D9D94A] rounded-lg' required />
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="city" className='font-[600]' >City</label>
            <input type="text" id="city" name="city" placeholder='Enter last name' className='px-4 py-6 bg-[#D9D9D94A] rounded-lg' required />
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="country" className='font-[600]' >Country</label>
            <input type="text" id="country" name="country" placeholder='Enter last name' className='px-4 py-6 bg-[#D9D9D94A] rounded-lg' required />
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="state" className='font-[600]' >State/Province</label>
            <input type="text" id="state" name="state" placeholder='Enter last name' className='px-4 py-6 bg-[#D9D9D94A] rounded-lg' required />
          </div>
          <div className='flex flex-col col-span-2 space-y-2'>
            <label htmlFor="information" className='font-[600]' >Any Other Information that you would like to share with us?</label>
            <textarea  id="information" name="information" placeholder='' className='px-4 py-6 bg-[#D9D9D94A] rounded-lg' required />
          </div>
          
        </form>
      </div>
    </Container>
  )
}
