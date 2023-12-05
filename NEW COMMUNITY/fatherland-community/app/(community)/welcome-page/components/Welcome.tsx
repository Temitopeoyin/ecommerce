"use client";
import React from "react";
import Image from "next/image";
import welcome1 from "@/public/welcome1.png";
// import grop from "@/public/Group abt.png";
import { Button } from "@/components/ui/button";
import style from './styles.module.css'

export default function Welcome() {
  return (
    <div className="mx-auto ">
      <main className="mx-auto container justify-around lg:flex items-center mt-[4.188rem] mb-[2.5rem]">
        <div className="">
          <p className="lg:w-[36rem] text-[14202d] font-bold text-[40px] leading-56px]">
            Welcome to a world of{" "}
            <span className="text-[#da5001]">Extraordinary Afrocentric</span>{" "}
            Experiences
          </p>
          <p className="lg:w-[33.063rem] text-[22px] font-normal leading-8 break-words">
            Get started on Fatherland Community and learn how it works with
            resources provided for you. Fatherland Community aimed to meet
            people’s economic, recreational, educational, and entertainment
            needs by creating community hubs, cultural, art, spiritual, and
            tourist destinations.
          </p>
        </div>

        <Image src={welcome1} alt="" />
      </main>
          <div className={`mb-[11.313rem] ${style.bkg} pt-[9.625rem] pb-[2.688rem] ps-[5.938rem] lg:w-[90rem]`}>
              <Button className=" bg-[#FF8800] hover:bg-[#FF8800] px-[2.188rem] py-[0.688rem]">Explore Brands & Benefits</Button>
          </div>
    </div>
  );
}
