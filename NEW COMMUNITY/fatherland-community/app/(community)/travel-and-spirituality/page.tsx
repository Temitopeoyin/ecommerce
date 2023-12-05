import React from 'react'
import Tourandspirituality from './components/Tourandspirituality'
import Welcome from './components/Welcome'
import Ourpackages from './components/Ourpackages'
import Specialoffers from './components/Specialoffers'
import Destination from './components/Destination'
import Bookaticket from './components/Bookaticket'

export default function page() {
  return (
    <div className='mx-auto max-w-[90rem] bg-[#fcfdff] bg-red500'>
        <Tourandspirituality />
        <Welcome />
        <Ourpackages />
        <Specialoffers />
        <Destination />
        <Bookaticket />
    </div>
  )
}
