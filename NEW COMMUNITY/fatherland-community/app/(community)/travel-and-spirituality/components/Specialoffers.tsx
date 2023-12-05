"use client";
import React from "react";
import { SPECIAL_OFFER } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Specialoffers() {
  const renderOffer = SPECIAL_OFFER.map((offer) => (
    <div>
      <div
        key={offer.id}
        className=" upcoming_events_card px-0 hover:border hover:border-  active:border-primary cursor-pointer lg:w-[24.25rem] lg:h-[26.188rem] mx-auto container mb-12"
      >
        <Image src={offer.image} alt={offer.label} className="rounded-t-md w-full object-cover lg:w-[24.25rem" />
            <div className="mx-[1.063rem] py-[4px] bg-[#e1e6f1] text-[#26499D] text-sm font-normal leading-5 break-words w-[109px] rounded-[16.50px] text-center mb-[0.75rem] mt-[1.438rem]">{offer.state}</div>
        <div className="px-[1.063rem] space-y-4 mt-[0.875rem]">
          <Link href={`/travel-and-spirituality/${offer.id}`}><p className="hover:underline font-[400] text-xl leading-4 break-words text-[#14202D] pb-[0.75rem">{offer.label}</p></Link>
          <div className="mb-[0.813rem]">
            <p className="text-[13px] font-normal text-[#666666] leading-5 break-words pb-[2px]">Duration: <span className="pl-2">{offer.duration}</span></p>
            <p className="text-[13px] font-normal text-[#666666] leading-5 break-words">Group Size:<span className="pl-2">{offer.size}</span></p>
          </div>
          <div className="mt-auto flex justify-between items-center pb-[1.938rem]">
            <div>
                <div className="flex flex-col">
                <span className="text-[#e1e6f1] text-xs font-normal leading-5 break-words">Ticket</span> <span className="text-[#14202D] text-2xl font-normal leading-5 break-words">${offer.price}<sub className="pl-1 text-[#14202D] text-xs font-normal leading-5 break-words">{offer.size2}</sub></span>
                </div>
            </div>
            <Button className="bg-white border border-[#0BA1BC] text-[#0BA1BC]">Buy Tickets</Button>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="mx-auto w-full container">
      <div className="lg:mx-[2rem] my-[6rem] wfull mxauto container border-[10px] border-[#28D744] lg:h-[8.438rem] border-t-0 border-b-0 border-r-0 rounded-t-[10px] rounded-b-[10px]">
        <p className="text-[#28D744] text-xl font-medium lg:leading-5 break-words">
          Special Offers
        </p>
        <p className="lg:w-[36.688rem] w-full text-[#14202D] lg:text-[40px] font-bold lg:leading-[56px] break-words">
          Curated Spiritual Experiences, tailored for you
        </p>
      </div>

        <div className="lg:flex justify-around mx-auto containe">
        {renderOffer}
        </div>
    </div>
  );
}
