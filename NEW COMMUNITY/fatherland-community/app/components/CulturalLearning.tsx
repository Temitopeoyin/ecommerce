// import Container from "@/components/ui/container";
import person from "@/public/assets/lady-image.png";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

export default function CulturalLearning() {
  return (
    <div className="cultural_learning_bg my-20 px-10 lg:px-20 mx-auto max-w-7xl h40 grid grid-cols-2 gap-x-5   bg-red-10">
        <div className="bg-red-20 my-auto col-span-2 lg:col-span-1 ">
          <h3 className="text-5xl font-[700] ">Explore <span className="text-secondary">Cultural</span> Learning Platform</h3>
          <p className="text-[#252525] font-[700]  text-lg mt-10  ">Powered by Fatherland Community</p>
          <p className="text-[#55525D] mt-4 ">Browse through recordings of previous live sessions on Africa cultures and values from our world-class instructors & tutors.</p>
          <Button size="lg" className="mt-10">Get Started</Button>
        </div>

        <div className="col-span-2 lg:col-span-1  mt-10 lg:mt-0 mx-auto bg-emerald-10">
          <Image className="" src={person} alt="person" />
        </div>
    </div>
  );
}
