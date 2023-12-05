import Container from '@/components/ui/container'
import React from 'react'
import { StaticImageData } from 'next/image'
import image from "@/public/assets/image.png";
// import Image from 'next/image';
import image1 from "@/public/assets/image1.png";
import image2 from "@/public/assets/image2.png";
import image3 from "@/public/assets/image3.png";
import DiscoverItemsCard from './DiscoverItemsCard';

interface Item {
  id: string;
  name: string;
  category: string;
  price: string;
  image: StaticImageData;
  discount?: string;
}

export type ItemsArray = Item[]

const ITEMS = [
  {
    "id": "1",
    "name": "The Monster and His Mistress",
    "category": "Books & Magazines, Ebooks, Fantasy (Ebooks), Fiction (Ebooks)",
    "price": "$0.00",
    "image": image,
    // "discount": "-20%"
  },
  {
    "id": "2",
    "name": "Shekere",
    "category": "Music & Entertainment",
    "price": "$0.00",
    "image": image1,
    "discount": "-20%"
  },
  {
    "id": "3",
    "name": "The Famished Roads",
    "category": "Books and Magazines",
    "price": "$0.00",
    "image": image2,
    "discount": "-20%"
  },
  {
    "id": "4",
    "name": "The Basket Weaver",
    "category": "Art & Collections",
    "price": "$0.00",
    "image": image3,
    "discount": "-20%"
  },
]

export default function DiscoverItems() {
  return (
    <Container>
      <div>
        <h1 className='capitalise  text-muted leading-relaxed font-[700] text-3xl '>Discover Unique <br />Hand Picked items on fatherland  </h1>
        <div className='flex my-10'>
          <div className="bg-secondary h-1 w-20 rounded-full my-auto mt1" />
          <p className='ml-auto my-auto text-secondary hover:underline'>See More</p>
        </div>
        <div className='my-10 flex'>
          <DiscoverItemsCard items={ITEMS} />
        </div>
      </div>
    </Container>
  )
}
