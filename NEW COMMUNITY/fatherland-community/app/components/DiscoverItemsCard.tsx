import React from 'react'
import Image from 'next/image'
// import image from "@/public/assets/image.png";
// import image1 from "@/public/assets/image1.png";
// import image2 from "@/public/assets/image2.png";
// import image3 from "@/public/assets/image3.png";
import { ItemsArray } from './DiscoverItems';

export default function DiscoverItemsCard({ items }: { items : ItemsArray}) {

  const renderItems = items.map(item => {
    return (
      <div key={item.id} className='unique_items_card rounded-md min-w-[300px] cursor-pointer '>
        <Image className='w-80' src={item.image} alt='item' />
        <div className='mt-2 p-2 min-h-[6rem] '>
          <h5 className='text-[#282828] font-[700] text-lg  '>{item.name}</h5>
          <p className='text-sm mt-1 '>{item.category}</p>
        </div>
        <p className='px-2 py-4 text-secondary '>{item.price}</p>
      </div>
    )
  })
  
  return (
    <div className='flex space-x-4  overflow-x-scroll hide-scrollbar no-scrollbar overflow-x:hidden'>
      {renderItems}
    </div>
  )
}
