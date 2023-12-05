import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";
import image from "@/public/assets/diversify.png"

export default function BusinessModel() {
  return (
    <Container>
      <div className="grid grid-cols-2 mt-40  gap-8 ">
        <div className="col-span-2 lg:col-span-1 mt-24 bg-red-20 ">
          <h4 className="text-4xl font-[700]   ">Diversified Business Model</h4>
          <p className="mt-4 text-justify leading-9 text-lg ">
            Fatherland, under the visionary leadership of Hareter B. Oralusi,
            generates revenue through various streams such as premium membership
            subscriptions, travel packages, store sales, ticket and event
            services, and advertising. The company`s diversified business model
            ensures financial growth and success.
          </p>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <Image src={image} alt="chess-piece" className="max-h-[] mx-auto" />
        </div>
      </div>
    </Container>
  );
}
