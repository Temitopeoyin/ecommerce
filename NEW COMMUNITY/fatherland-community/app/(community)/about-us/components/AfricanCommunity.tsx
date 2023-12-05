import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";
// import africanImg from "@/public/assets/africancommunity.png";
import bgImg from "@/public/assets/bg-image.png";
import textBg from "@/public/assets/brush-stroke-yellow.png";
// import { IBM_Plex_Sans } from "next/font/google";

// const ibm = IBM_Plex_Sans({ subsets: ["latin"] });

export default function AfricanCommunity() {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-4  bg-red-10">
        <div className="bg-red-20 my-auto col-span-2 lg:col-span-1 ">
          <div className=" ">
            <h1 className={`text-5xl font-[600] font-[Poppins  relative`}>
              Empowering the <br className="hidden lg:flex" /> African community through technology
            <Image
              src={textBg}
              alt="background image"
              className="absolute bottom-0 w8 aspect-auto bg-red-40 rounded-md  object-cover  -z-20"
            />
            </h1>
            <p className="mt-4 leading-7 space-y-2">
              Fatherland is a pioneering company that specializes in creating
              technologically advanced products and services that celebrate
              African culture. Our goal is to unite the global African
              population by providing them with products and services that
              reflect their intrinsic values.{" "}
              <p className="mt-2">
                Through our innovative approach, we cater to the unique needs of
                our targeted market and offer culturally designed solutions for
                the African community worldwide.
              </p>{" "}
            </p>
          </div>
        </div>
        <div className="relative col-span-2 lg:col-span-1  ">
          <div className="bg-gradient-to-br from-[#ff8800] to-[#7fb432] absolute top-[-.5rem] -z-10 left-[-2rem] h-[15rem] w-[15rem] rounded-full blur-[10rem sm:w-[68.75rem dark:bg-[#946263"></div>
          <div className="bg-primary absolute top-[10rem] -z-20 left-[-2rem] h-[20rem] w-[20rem] rounded-full blur-[10rem] sm:w-[68.75rem dark:bg-[#946263"></div>
          <Image src={bgImg} alt="african-lady" className="w-full" />
        </div>
      </div>
    </Container>
  );
}
