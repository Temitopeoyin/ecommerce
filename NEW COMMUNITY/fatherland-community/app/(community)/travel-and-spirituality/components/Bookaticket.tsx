"use client";
import React from "react";
import style from "./styles.module.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Bookaticket() {
  return (
    <div
      className={`mxauto wfull containe ${style.tourft} mb-[7.063rem] max-w-[90rem]`}
    >
      <div
        className={`text-center text-white text-5xl font-extrabold leading-[58px] break-words lg:pt-[6.5rem]`}
      >
        {" "}
        Book a Ticket Now
      </div>
      <div className="flex justify-center lg:mt-[9.563rem]">
        <Button className="text-center bg-0 border border-white text-[15px] font-semibold break-words mb-[4.688rem]">
          {" "}
          <Link href='/book-a-ticket'>Making a Booking</Link>
        </Button>
      </div>
    </div>
  );
}
