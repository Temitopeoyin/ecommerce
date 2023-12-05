"use client"

import { Button } from '@/components/ui/button'
import Container from '@/components/ui/container'
import React from 'react'

export default function JoinFamily() {
  return (
    <Container>
      <div className=' join_family text-white space-y-6  my-40 p-20 text-center  rounded-lg  '>
        <h4 className='text-5xl font-[700] '>Join our Global Family</h4>
        <p>Our passion lies in leveraging technology to craft transformative experiences<br /> that enhance the lives and communities we serve.</p>
        <Button variant="accent" size="lg">View Job Opportunities</Button>
      </div>
    </Container>
  )
}
