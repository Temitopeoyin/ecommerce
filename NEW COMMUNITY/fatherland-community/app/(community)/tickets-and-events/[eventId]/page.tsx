import { EVENTS } from "@/lib/data";
import Image from "next/image";
import React from "react";
// import Container from "@/components/ui/container";
import { MdCalendarMonth } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Link from "next/link";
export default function EventPage({ params }: { params: { eventId: string } }) {
  const renderEvent = EVENTS.find((item) => item.id === params.eventId);
  console.log(renderEvent);
  const renderPreviousEvents = EVENTS.slice(0, 3).map((event) => (
    <div
      
      key={event.id}
      className="upcoming_events_card hover:border hover:border-[#FF8800] active:border cursor-pointer "
    >
      <Image src={event.image} alt={event.name} className="rounded-t-md" />
      <div className="p-4 space-y-4">
        <Link href={event.id}><p className="font-[600] hover:underline">{event.name}</p></Link>
        <div className="flex space-x-4 text-sm">
          <p className="flex">
            <MdCalendarMonth className="my-auto mr-2" /> {event.date2}
          </p>
          <p className="flex">
            <HiOutlineLocationMarker className="my-auto mr-2" />{" "}
            {event.location2}
          </p>
        </div>
      </div>
      <div className="mx-auto ms-4 mb-4 ">
        <button className="mt-auto text-sm px-3  font-medium bg-[#26D44B] text-white p-[0.5rem] border rounded-md">
          <Link href="#">Buy Tickets</Link>
        </button>
      </div>
    </div>
  ));

  return (
    <div className="mx-auto w-full max-w-[90rem] px-20 bg-white">
      <div className="grid grid-cols-2 gap2 md:gap-[3.25rem] mt-[3rem] max-w-[90rem] bgwhite bg-red500">
        <div className="col-span-2 lg:col-span-1 p-4">
          <Image
            src={renderEvent?.image!!}
            alt="background image"
            className=" aspect-auto bg-red-40 rounded-md object-cover lg:w-[625px] lg:h-[492px]"
          />
        </div>
        <div className="col-span-2 lg:col-span-1 space-y-5 mt-3 my-aut px10 lg:h-[492px]">
          <h2 className="text-4xl font-[600] text-[#282828] lg:w-[35.875rem] lg:h-[102px]">
            {renderEvent?.name}
          </h2>
          <div className="mt-[1.375rem] pb-[px]">
            <p className="flex text-[#282828] font-normal text-sm mb-[1.313rem]">
              <MdCalendarMonth className="my-auto mr-2" />
              {renderEvent?.date}
            </p>{" "}
            <br />
            <p className="flex text-[#282828] font-normal text-sm mb-[2rem]">
              <HiOutlineLocationMarker className="my-auto mr-2" />
              {renderEvent?.location}
            </p>
          </div>
          <div className="lg:pb-[45px]">
            <p className="text-[20px] font-normal leading-[29px] break-words lg:w-[35.875rem] lg:h-[116px] ">
              {renderEvent?.text}
            </p>
          </div>
          <div className="bg-[#ececec] mxauto lg:w-[35.813rem] flex justify-between items-center px-4 rounded-[7px]">
            <div
              className={`text-[#14202D] leading-7 text-sm font-normal py-1`}
            >
              Tickets <br />{" "}
              <span className="text-[32px] text-[#14202D] font-semibold leading-7">
                {renderEvent?.price}
              </span>
            </div>
            <div className="">
              <button className="mt-auto text-sm px-3  font-medium bg-[#26D44B] text-white p-[0.5rem] border rounded-md">
                <Link href="">Buy Tickets</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-3 md:mx-auto mb-8 md:mb-[7rem] max-w-[90rem] bg-yellow300 mt8 md:mt-[6.375rem]">
        <p className="mb-4 text-2xl	leading-7 font-medium text-[#14202D]">
          Tags
        </p>
        <div className="mx-auto flex flex-wrap gap-4">
          {renderEvent?.tags.map((tag, i) => (
            <Link
              href={tag.href}
              key={i}
              className="text-[#FD6906] px-4 bg-[#fff0de] text-center mxauto py-[1rem] rounded-full font-normal text-xl leading-7 px2 text-wrap"
            >
              {tag.label}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h5
          className={`text-[2.5rem] font-extrabold leading-[3.625rem] pb-[2.813rem] text-[#14202D] max-w-[77.625rem]`}
        >
          Similar Events
        </h5>
        <div className="grid md:grid-cols-3 gap-x-6 gap-y-12 max-w-7xl bg-gray600 mb-[10.813rem]">
          {renderPreviousEvents}
        </div>
      </div>
    </div>
  );
}
