import React from 'react'
// import Image from 'next/image';

import Mpress from './[pressId]/components/Mpress';
import Education from './[pressId]/components/Education';
import Realestate from './[pressId]/components/Realestate';
import Commerce from './[pressId]/components/Commerce';
import Corporate from './[pressId]/components/Corporate';

// const vamp = <Image src= {Blog5} alt="" />
export default function PressPage() {
  return (
    <section className='max-w-[90rem] bg-white pb-32 '>
        <Mpress />
        <Education />
        <Realestate />
        <Commerce />
        <Corporate />
    
    </section>
     )
}
