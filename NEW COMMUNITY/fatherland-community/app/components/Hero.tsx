import React from "react";
// import heroBackground from "@/public/assets/hero-background.svg";
// import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";

import Images from "@/public/data/HeroGallery";
import { Button } from "@/components/ui/button";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export default function Hero() {
  return (
    <section className="bg-red-10 py[7rem] pt-[4rem] pb-[5rem]   hero_background max-w-7xl mx-auto ">
      <div className="hero_backgroun pt5 bg-red-20">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10  px-4 sm:px-6 lg:px-20 py20  bg-red-20">
          <div className="grid gap-10 lg:py20">
            <article className="text-white my-auto">
              <h1
                className={`hero-heading ${raleway.className} font-extrabold text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-[15rem]`}>
                The #1 Global Afrocentric Community
              </h1>
              <Button
                // variant="outlineAccent"
                size="lg"
                className="font-[700] mt-14 ">
                <Link href=".">Join Fatherland Now</Link>{" "}
              </Button>
            </article>
          </div>

          <div className="h-fit lg:pb-20 bg-red200">
            <ul className="grid grid-cols-4  sm:grid-cols-4 md:grid-cols-5 gap-3 md:gap-5">
              {Images.map((image) => (
                <li key={image.id} className="">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="md:my-1 lg:my-1 w-32 md md :w-24 lg:w-40"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
