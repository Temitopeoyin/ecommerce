"use client";
import React from "react";
// import Image from "next/image";
import style from "./styles.module.css";

export default function Destination() {
  return (
    <div className="mx-auto w-full container">
      <div className="lg:mx-[2rem] my-[6rem] wfull mxauto container border-[10px] border-[#28D744] lg:h-[8.438rem] border-t-0 border-b-0 border-r-0 rounded-t-[10px] rounded-b-[10px]">
        <p className="text-[#28D744] text-xl font-medium lg:leading-5 break-words">
        DESTINATIONS
        </p>
        <p className="lg:w-[36.688rem] w-full text-[#14202D] lg:text-[40px] font-bold lg:leading-[56px] break-words">
        Explore Our Captivating Destinations
        </p>
      </div>

      <main className="lg:flex">
        <div
          className={`upcoming_events_card px-0 hover:border hover:border- 
         active:border-primary cursor-pointer lg:w-[24.25rem] lg:h-[26.188rem] 
         mx-auto container mb-12 ${style.bb} pb-[1.75rem`}
        >
          <div className={`px-[1.063rem space-y-4 mt-[0.875rem `}>
            <p className="text-white text-center pt-[15.5rem] text-xl font-bold leading-4 break-words">
              Badagry Historical & Tourist Places
            </p>
            <p className="text-white text-center pb-[1.75rem] text-xs font-normal leading-5 break-words">
              Discover the Enigmatic History of Badagry, Lagos: Unveiling the
              Stories of Resilience and Heritage, Journey with us as we delve
              into the captivating history of this ancient city, where echoes of
              the past intertwine with the vibrant present.
            </p>
          </div>
        </div>

        <div
          className={`upcoming_events_card px-0 hover:border hover:border- 
         active:border-primary cursor-pointer lg:w-[24.25rem] lg:h-[26.188rem] 
         mx-auto container mb-12 ${style.bb1} pb-[1.75rem`}
        >
          <div className={`px-[1.063rem space-y-4 mt-[0.875rem `}>
            <p className="text-white text-center pt-[15.5rem] text-xl font-bold leading-4 break-words">
              Abeokuta Historical & Tourist Places
            </p>
            <p className="text-white text-center pb-[1.75rem] text-xs font-normal leading-5 break-words">
              The historic city steeped in a tapestry of captivating stories and
              cultural heritage. Prepare to embark on a thrilling exploration of
              the past as we unveil the remarkable history of this enchanting
              city in Ogun State, Nigeria.
            </p>
          </div>
        </div>

        <div
          className={`upcoming_events_card px-0 hover:border hover:border- 
         active:border-primary cursor-pointer lg:w-[24.25rem] lg:h-[26.188rem] 
         mx-auto container mb-12 ${style.bb2} pb-[1.75rem`}
        >
          <div className={`px-[1.063rem space-y-4 mt-[0.875rem `}>
            <p className="text-white text-center pt-[15.5rem] text-xl font-bold leading-4 break-words">
              Lagos Historical & Tourist Places
            </p>
            <p className="text-white text-center pb-[1.75rem] text-xs font-normal leading-5 break-words">
              Venture into the city of Lagos, a city that pulsates with the
              rhythm of history, culture, and diversity. Join us on a
              captivating journey as we explore the vibrant past of this
              metropolis, tracing its roots from humble beginnings to becoming
              one of Africa's most dynamic and cosmopolitan centers..
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
