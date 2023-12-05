'use client'
import styles from './styles.module.css'
import React from 'react'
import { DotFilledIcon} from '@radix-ui/react-icons'
import { FaCheck,FaMinus } from 'react-icons/fa'
export default function Table() {

const data=[
    {
        id:'1',
        text:'Reconnect to your African Roots, Heritage and Family Tree',
        basic:<FaCheck className="text-[#649b66] flex justify-center"/>,
        premium:<FaCheck className="text-[#649b66] flex justify-center"/>,
    },
    {
        id:'2',
        text:'Get Latest Updates on News, History, and Celebration of African Descent Stories',
        basic:<FaCheck className="text-[#649b66] flex justify-center"/>,
        premium:<FaCheck className="text-[#649b66] flex justify-center"/>,
    },
    {
        id:'3',
        text:'Volunteering Opportunity with Fatherland Foundation Children Program',
        basic:<FaCheck className="text-[#649b66] flex justify-center"/>,
        premium:<FaCheck className="text-[#649b66] flex justify-center"/>,
    },
    {
        id:'4',
        text:'Access Regular Networking and Community Events.',
        basic:<FaCheck className="text-[#649b66] flex justify-center"/>,
        premium:<FaCheck className="text-[#649b66] flex justify-center"/>,
    },
    {
        id:'5',
        text:'Join Conversation on Fatherland Community and Social Media',
        basic:<FaCheck className="text-[#649b66] flex justify-center"/>,
        premium:<FaCheck className="text-[#649b66] flex justify-center"/>,
    },
    {
        id:'6',
        text:'Discounted Tickets to Spectacular Events Worldwide',
        basic:<FaCheck className="text-[#649b66] flex justify-center"/>,
        premium:<FaCheck className="text-[#649b66] flex justify-center"/>,
    },
    {
        id:'7',
        text:'Generous Discounts on Fatherland Properties around the World.',
        basic:<FaCheck className="text-[#649b66] flex justify-center"/>,
        premium:<FaCheck className="text-[#649b66] flex justify-center"/>,
    },
    {
        id:'8',
        text:'Connect with millions of other Ancestry members to ask for help, share ideas, make discoveries and possibly discover living relatives you never knew you had',
        basic:<FaMinus className="text-[#649b66] flex justify-center"/>,
        premium:<FaCheck className="text-[#649b66] flex justify-center"/>,
    },
    {
        id:'9',
        text:'Learn about your ancestors in more than 80 countries outside the U.S., including the UK, Ireland, Canada, Germany, Australia, France, Denmark, Norway, Sweden and more',
        basic:<FaMinus className="text-[#649b66] flex justify-center"/>,
        premium:<FaCheck className="text-[#649b66] flex justify-center"/>,
    },
    {
        id:'10',
        text:'Enjoy unlimited access to more than 3 billion international birth, marriage, death, census, military, church and other records',
        basic:<FaMinus className="text-[#649b66] flex justify-center"/>,
        premium:<FaCheck className="text-[#649b66] flex justify-center"/>,
    },
    {
        id:'11',
        text:'Free Access to Fatherland Recreational Centers around the World.',
        basic:<FaMinus className="text-[#649b66] flex justify-center"/>,
        premium:<FaCheck className="text-[#649b66] flex justify-center"/>,
    },
    {
        id:'12',
        text:'Enjoy Great Discounts Offers on Spiritual and Cultural Tours.',
        basic:<FaMinus className="text-[#649b66] flex justify-center"/>,
        premium:<FaCheck className="text-[#649b66] flex justify-center"/>,
    },
    {
        id:'13',
        text:'Up to 50% Discount on any product purchased at Fatherland Store, Handcrafted, Vintage, and Craft Marketplace.',
        basic:<FaMinus className="text-[#649b66] flex justify-center"/>,
        premium:<FaCheck className="text-[#649b66] flex justify-center"/>,
    },
    {
        id:'14',
        text:'Access the most Extensive Collection of Family History Records.',
        basic:<FaMinus className="text-[#649b66] flex justify-center"/>,
        premium:<FaCheck className="text-[#649b66] flex justify-center"/>,
    },
    {
        id:'15',
        text:'Access discounted rich flavours of African cuisines in African Restaurants Worldwide.',
        basic:<FaMinus className="text-[#649b66] flex justify-center"/>,
        premium:<FaCheck className="text-[#649b66] flex justify-center"/>,
    },
    {
        id:'16',
        text:'Get One-on-One Live Coaching on Traditions and Spirituality.',
        basic:<FaMinus className="text-[#649b66] flex justify-center"/>,
        premium:<FaCheck className="text-[#649b66] flex justify-center"/>,
    },
    {
        id:'17',
        text:'Enjoy the Best of Afrobeat and Podcast from the Best Black Creator',
        basic:<FaMinus className="text-[#649b66] flex justify-center"/>,
        premium:<FaCheck className="text-[#649b66] flex justify-center"/>,
    },
    {
        id:'18',
        text:'All Access Family Plan',
        basic:<FaMinus className="text-[#649b66] flex justify-center"/>,
        premium:<FaCheck className="text-[#649b66] flex justify-center"/>,
    },
]



  return (
    <div className='mx-auto container max-w-5xl mb-[10rem]'>
        <table className="table-auto">
  <thead>
    <tr>
      <th className='border2'></th>
      <th className={`border ${styles.b11} px-[7.563rem] py-[1.688rem]`}>Basic</th>
      <th className={`border-2 ${styles.b22} px-[7.43rem] py-[1.688rem] rounded-tr-[6px]`}>Premium </th>
    </tr>
  </thead>
  <tbody>
  {data.map((eve, i) => (
                <tr key={i}>
                <td className={`border-2 px-[2rem] py-[1rem] border-t-0 border-l-0 border-r-0 flex`}> <DotFilledIcon className='text-[#FF8800] mt-1 pr-1 text-xl'/> <p>{eve.text}</p></td>
                <td className={`border-2 px-[7.563rem] text-center`}>{eve.basic}</td>
                <td className={`border-2 px-[7.563rem] py-[1.688rem`}>{eve.premium}</td>
              </tr>
              ))}

<tr>
      <th className='border2'></th>
      <th className={`border mx-auto py-[1.688rem] border-b-0 `}><button className='mx-auto px-[0.75rem] py-[0.74rem] text-[#DA5001] text-base font-semibold break-words bg-transparent outline-0 border border-[#DA5001]'>Join Now</button></th>
      <th className={`border mx-auto border-b-0`}><button className='mx-auto px-[0.75rem] py-[0.74rem] text-[#DA5001] text-base font-semibold break-words bg-transparent outline-0 border border-[#DA5001]'>Join Now</button></th>
    </tr>

  </tbody>
</table>
    </div>
  )
}
