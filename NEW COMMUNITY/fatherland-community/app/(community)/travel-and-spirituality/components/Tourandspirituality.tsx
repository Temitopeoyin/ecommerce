"use client";
import React from "react";
import style from "./styles.module.css";
import Image from "next/image";
import jeru from "@/public/herochild2pic.png";

export default function Tourandspirituality() {
  return (
    <div
      className={`${style.hero} w-full lg:w-[90rem] mx-auto lg:h-[44.75rem]`}
    >
      <section className={`${style.hher} lg:h-[44.75rem] mx-auto w-full`}>
        <main
          className={` mx-auto lg:flex justify-around items-center container lg:h-[44.75rem] pt-12 md:pt-0`}
        >
          <div
            className={` mb-12 mxauto rounded-t-[10px] rounded-b-[10px] h[23.125rem] border-[6px] border-[#DA5001] border-t-0 border-b-0 border-r-0 lg:h-[17.25rem]`}
          >
            <p className="text-[#DA5001] px-[2.75rem] mb-[1.188rem] text-xl font-medium leading-5 break-words">
              TOUR & SPIRITUALITY
            </p>
            <div className="lg:w-[29.5rem] lg:h-[6.25rem] px-[2.75rem]">
              <p className="text-[#F8FAFE] text-4xl font-bold leading-10">
                Explore Africa With Fatherland
              </p>
              <p className="text-white text-xl font-normal leading-7">
                Our travel and spirituality feature unveils Afrocentric and
                adventourous travel offers transformative workshops designed to
                awaken your consciousness and elevate your soul.
              </p>
            </div>
          </div>

          <div className="self-end border-[6px]  border-primary border-b-0 border-r-0 border-l-0 rounded-t-[10px] md:w-[25rem]">
            <Image
              src={jeru}
              alt="Banner Image"
              className="object-cover lg:w-[25rem] rounded-t-[10px] "
            />
            <div className="bg-white py-[22px] px-[17px]">
              <div className="bg-[#e1e6f1] w-[76px] h-[28px] rounded-[16.50px] px-[17px] py-[4px] text-[#26499D] text-sm font-normal leading-5 break-words mt-[22px mb-[14px]">
                Africa
              </div>
              <p className="text-[#14202D] text-xl font-normal leading-5 break-words pb-[12px]">
                Bethlehem and Jerusalem
              </p>
              <p className="text-[#666666] text-sm font-normal leading-5 break-words">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor.
              </p>

              <div className="flex justify-between items-center mt-[12px]">
                <span>
                  <p className="text-[#66666] text-xs font-normal leading-5 break-words">
                    Ticket
                  </p>
                  <p className="text-[#14202D] text-2xl font-normal leading-5 break-words">
                    $46700
                  </p>
                </span>
                <button className="text-[#CF0989] rounded-[5px] border-[#CF0989] border text-sm font-semibold break-words py-[9px] px-[22px]">
                  Book Ticket
                </button>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
