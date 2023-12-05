import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";
import objectivesImg from "@/public/assets/objextivesImg.png";

export default function Objectives() {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-4 pt-16 bg-white">
        <div className="col-span-2 lg:col-span-1 p-4">
          <Image
            src={objectivesImg}
            alt="background image"
            className=" aspect-auto bg-red-40 rounded-md  object-cover  "
          />
        </div>
        <div className="col-span-2 lg:col-span-1 space-y-5 mt-10 my-aut px10">
          <h3 className="text-primary text-2xl font-[700] ">Our Objectives</h3>
          <h2 className="capitalize text-4xl font-[700] ">
            Unlocking the full potential of black purchasing power
          </h2>
          <p className="leading-8">
            With the rapid growth of the African community and their increasing
            purchasing power, we take pride in being the foremost brand that
            utilizes technology to tap into the opportunities within the local
            and global black community.
          </p>
        </div>
      </div>
    </Container>
  );
}
