"use client";
import Image from "next/image";
import React from "react";
import no2 from "@/public/no2.png";
import Link from "next/link";
import style from "./styles.module.css";
export default function Creditcardinfo() {
  return (
    <div className="pt-[5.563rem] bg-[#fcfdff]">
      <div className="bg-red300 mx-auto mb-[3.813rem]">
        <p className="text-[#14202D] text-4xl font-bold leading-[56px] break-words text-center pb-[1.313rem]">
          Payment Details
        </p>
        <p className="text-[#14202D] text-xl font-normal leading-7 break-words text-center">
          Enter your credit card details and billing information
        </p>
      </div>

      <section className="lg:flex justify-around max-w-7xl mx-auto">
        <div className="bg-green500 rounded-[15px] px2 max-w-[50rem mxauto mb-12">
          <main className="bg-white bg-red500 rounded-[15px] px2 max-w-[50rem mxauto mt-[42px">
            <div className="flex items-center py-[2.044rem] px-[2.25rem]">
              <Image src={no2} alt="" className="" />
              <p className="text-[#14202D] text-2xl font-normal break-words pl-7">
                Credit Card Information
              </p>
            </div>

            <form action="" className="mxauto px-[2.25rem] pb-[2.914rem]">
              <label htmlFor="" className="">
                Card Name
              </label>{" "}
              <br />
              <input
                type="text"
                className="bg-[#f4f4f4] w-full h-[65px] mb-[2.688rem] rounded-[6px]"
              />
              <label htmlFor="" className="">
                Card Number
              </label>{" "}
              <br />
              <input
                type="text"
                className="bg-[#f4f4f4] w-full h-[65px] mb-[2.688rem] rounded-[6px]"
              />
              <div className="lg:flex justify-between pb-[2.688rem] gap-4 mx-auto">
                <div>
                  <label htmlFor="" className="">
                    Exp Date
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    className="w-full lg:w-[22rem] h-[65px] bg-[#f4f4f4  bg-[#f4f4f4] rounded-[6px] mb-[2.688rem] lg:mb-0"
                  />
                </div>
                <div>
                  <label htmlFor="" className="">
                    CVV
                  </label>{" "}
                  <br />
                  <input
                    type="password"
                    className=" w-full lg:w-[22rem] h-[65px] bg-[#f4f4f4  bg-[#f4f4f4] rounded-[6px]"
                  />
                </div>
              </div>
            </form>
          </main>

          <main className="bg-white bg-red500 rounded-[15px] px2 max-w-[800px mxauto mb12 mt-[42px]">
            <div className="flex items-center py-[2.044rem] px-[2.25rem]">
              <Image src={no2} alt="" className="" />
              <p className="text-[#14202D] text-2xl font-normal break-words pl-7">
                Delivery & Billing
              </p>
            </div>

            <form action="" className="mxauto px-[2.25rem] pb-[2.914rem]">
              <label htmlFor="" className="">
                Address 1
              </label>{" "}
              <br />
              <input
                type="text"
                className="bg-[#f4f4f4] w-full h-[65px] mb-[2.688rem] rounded-[6px]"
              />
              <label htmlFor="" className="">
                City
              </label>{" "}
              <br />
              <input
                type="text"
                className="bg-[#f4f4f4] w-full h-[65px] mb-[2.688rem] rounded-[6px]"
              />
              <label htmlFor="" className="">
                Country
              </label>{" "}
              <br />
              <input
                type="text"
                className="bg-[#f4f4f4] w-full h-[65px] mb-[2.688rem] rounded-[6px] lg:w-[724px"
              />
              <p className="lg:w-[724px] text-base mx-auto font-normal leading-[21px] break-words">
                By Clicking “join Fatherland Community” You confirm that you
                have read, understood and accepted the
                <Link href="" className="text-[#DA5001] pl-1 hover:underline">
                  terms and conditions
                </Link>{" "}
                of Fatherland community
              </p>
              <div className="flex justify-center mt-[48px] ">
                <button className="font-semibold break-words text-base bg-[#FF8800] px-[10px] py-[9px] rounded-[5px] text-white">
                  Join Fatherland community
                </button>
              </div>
            </form>
          </main>
        </div>

        <div className=" lg:w-[388px] bg-white rounded-[8px] max-h-[309px] mb-12">
          <p className="text-[#14202D] text-xl font-normal leading-5 break-words pt-[27px] ps-[23px]">
            Summary
          </p>

          <div className="flex justify-between items-center px-[23px] pt-[23px]">
            <p className="text-[#666666] text-sm font-normal leading-5 break-words">
              Plan Name
            </p>
            <p className="text-[@14202D] text-sm font-normal leading-5 break-words">
              Standard
            </p>
          </div>

          <div className="flex justify-between items-center px-[23px] pt-[23px]">
            <p className="text-[#666666] text-sm font-normal leading-5 break-words">
              Monthly Fee
            </p>
            <p className="text-[@14202D] text-sm font-normal leading-5 break-words">
              $29.99
            </p>
          </div>

          <div className="flex justify-between items-center px-[23px] pt-[23px]">
            <p className="text-[#666666] text-sm font-normal leading-5 break-words">
              Extra Charges
            </p>
            <p className="text-[@14202D] text-sm font-normal leading-5 break-words">
              $0.00
            </p>
          </div>

          <div className="px-[23px] mt-[23px]">
            {" "}
            <hr />
          </div>

          <div className="flex justify-between items-center px-[23px] pt-[11px]">
            <p className="text-[#666666] text-sm font-normal leading-5 break-words">
              Total
            </p>
            <p className="text-[@14202D] text-sm font-normal leading-5 break-words">
              $251.88
            </p>
          </div>

          <div className="px-[23px] mt-[11px]">
            {" "}
            <hr />
          </div>

          <div className="flex px-[23px] pt-[15px] pb-[37px]">
            <div className="pr-2">
              <label className={`${style.switch}`}>
                <input type="checkbox" className={`ml-2`}/>
                <span className={`${style.slider} ${style.round}`}></span>
              </label>
            </div>

            <span className="text-[@14202D] text-sm font-normal leading-5 break-words">
              I want to be charged annaully
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
