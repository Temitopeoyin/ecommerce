import React from 'react'
import Welcome from './components/Welcome'
// import Join from '@/app/(authpages)/membershipplans/components/Join'
import Imagecollection from './components/Imagecollection'
import Join from './components/Join'
import Joinorstart from './components/Joinorstart'

export default function page() {
  return (
    <div className='mx-auto max-w-[90rem] bg-white'>
        <Welcome />
        <Imagecollection />
        <Join />
        <Joinorstart />
    </div>
  )
}
