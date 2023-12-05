"use client"
import React from 'react'
import Image from 'next/image';
import Rounded2 from "@/public/assets/Rounded2.png";
import Date from "@/public/assets/Date.png";
import Rectangle1 from "@/public/assets/Rectangle1.png";
import Blog5 from "@/public/assets/Blog 5.png";
import Blog6 from "@/public/assets/Blog 6.png";
import Blog7 from "@/public/assets/Blog 7.png";

// import { useState } from 'react';



export default function Corporation() {
  // const [corporation, setCorporation] = useState("");
  return (
    <div className="  bg-white mx-auto">
      {/* {corporation.map(())} */}
        <div className='mx-auto h-full max-w-7xl bg-white  my-auto-full'>
          <div>
             <Image className='mx-auto max-w-6xl' 
              src={Rounded2} alt="" />
            </div>
            <p className='bg-amber-100 inline text-[#FF8800] px-10 py-2 font-[550] ml-20 mt-2 rounded-full'>Commerce</p>
            <div className='ml-14 px-2 py-3'><span className='text-green-500 md:text-4xl ml-4 font-[500]'>Fatherland Corporation to raise $35m in public offer</span></div>
             <div className='ml-20 mb5 mt-2'><Image src={Date}  alt="" /></div>
           <div className={`px-20 mt-5 text-lg`}>
                <p className='mt-5'>
                 {}
                </p>
                <p className='mt-5'>
                 The Corporation delivers technology driven programmes and services to the worldwide population targeting over 100 million members.
                 “The Shares are offered at a purchase price of $2.00 per share, up to an aggregate purchase price of $5,000,000. The Offering will terminate upon the sale of 2,500,000 shares, unless terminated earlier, in our sole discretion. The minimum investment is 500 shares, or $1000. The maximum number of shares to be sold in this offering is 2,500,000 shares. The offering is made in reliance upon an exemption from registration under the federal securities laws provided by Section 4(a)(2) of the Securities Act of 1933, as amended, the “Securities Act”, and Rule 504 of Regulation D as promulgated by the United States Securities and Exchange Commission, the “SEC” or the “Commission”, under the Securities Act of 1933. There is currently no public market for our common stock. “Securities are sold to any number and type of investor, and the issuer is not subject to specific disclosure requirement”, as defined in Rule 504 of the Securities Act,” a statement by the company said.
                </p>
                <p className='mt-5'>
                   No fewer than 375 prospective subscribers have indicated interest in the offer. However, the shares offered by Fatherland in the Private Placement Memorandum have neither been registered with nor approved by the United States Securities and Exchange Commission. They also have not been filed with nor reviewed by the Attorney General of any state nor the security regulatory authorities of ant state. Fatherland advised each prospective purchaser of the securities to consult their own tax advisors as to the consequences of purchasing, holding, and disposing of the securities, including, without limitation, the application of U.S. federal tax laws to their situations, as well as any consequences to them under the laws of any other taxing jurisdiction as the corporation has not registered any securities under the Securities Act of 1933, as amended, or any state securities laws.
                </p>
                <p className='mt-5'>
                  “We offer these securities in reliance on certain exemptions from registration contained in the Securities Act and applicable state laws. As a consequence, purchasers may not sell these securities unless they are subsequently registered under the Securities Act and applicable state laws or an exemption from such registration is available. Accordingly, any purchaser must bear the economic risk of investment in these shares for an indefinite period of time,” they added.
                  The statement further stated that each investor must acquire the shares of the common stock for his own account and not for the account of others, for investment purposes only and not with a view to, or for resale, distribution, or fractionalisation thereo
               </p>
            </div>
            <div>
              <p className='font-[500] text-3xl ml-20 mt-9'>Related News</p>
              <div className='mt-1 ml-20' ><Image src={Rectangle1} alt="" /></div>
            </div>
                 
            <div className='flex flex-row'>

             <div className='ml-20 mt-5'>
                <Image src={Blog6} alt="" />
              </div>

              <div className='ml-4 mt-5'>
                <Image src={Blog5} alt="" />
              </div>

              
              <div className='ml-7 mt-5 mb-20'>
                <Image src={Blog7} alt="" />
              </div>
            </div>

        </div>
      </div>
  )
}
