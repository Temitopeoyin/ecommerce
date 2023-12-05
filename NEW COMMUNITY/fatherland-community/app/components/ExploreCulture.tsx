import Container from "@/components/ui/container";
import React from "react";
// import videoPlaceholder from "@/public/assets/video-placeholder.png";
// import Image from "next/image";
import VideoCard from "./VideoCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function ExploreCulture() {
  return (
    <section className="bg-secondary-foreground max-w-7xl mx-auto  mt-8 py-24 ">
      <Container>
        <div className="px20 text-muted">
          <h1 className="font-[700] text-4xl ">Explore Culture</h1>
          <h3 className="mt-4 text-2xl ">Records at Your Fingertips</h3>
          <div className="bg-secondary h-1 w-40 rounded-full my-10" />
          <div className="flex overflow-x-auto space-x-5 -mr-10 scrollbar-hide ">
            <VideoCard />
            <VideoCard />
            {/* <VideoCard />
            <VideoCard />
            <VideoCard /> */}
          </div>

          <div className="mt-24 flex justify-between max-w-md mx-auto text-whit text-lg    bg-emerald-10">
            <IoIosArrowBack className="my-auto w-10 h-10 bg-white p-2  rounded-md hover:bg-primary hover:text-white cursor-pointer " />
            <div className="flex rounded-md  font-medium">
              <p className="px-4 py-2 bg-whit hover: bg-primary hover:text-white cursor-pointer rounded-l-md">1</p>
              <p className="px-4 py-2 bg-white hover:bg-primary hover:text-white cursor-pointer ">2</p>
              <p className="px-4 py-2 bg-white hover:bg-primary hover:text-white cursor-pointer ">3</p>
              <p className="px-4 py-2 bg-white hover:bg-primary hover:text-white cursor-pointer rounded-r-md">4</p>
            </div>
            <IoIosArrowForward className="my-auto w-10 h-10 bg-whit p-2 rounded-md hover: bg-primary hover: text-white cursor-pointer " />
          </div>
        </div>
      </Container>
    </section>
  );
}
