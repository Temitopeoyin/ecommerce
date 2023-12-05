// import Container from "@/components/ui/container";
import React from "react";
import { Raleway } from "next/font/google";
// import people from "@/public/assets/people.png";
// import people2 from "@/public/assets/people2.png";

import cultural_learning from "@/public/assets/exclusiveproducts-bg-images/cultural-learning.png";
import tickets_and_events from "@/public/assets/exclusiveproducts-bg-images/ticketsandevent.png";
import african_taste from "@/public/assets/exclusiveproducts-bg-images/african-taste.png";
import spirituality from "@/public/assets/exclusiveproducts-bg-images/spirituality.png";
import store from "@/public/assets/exclusiveproducts-bg-images/fatherland-store.png";
import community from "@/public/assets/exclusiveproducts-bg-images/community-forum.png";

// import Image, { StaticImageData } from "next/image";
import ExclusiveProductsCard from "./ExclusiveProductsCard";
import { StaticImageData } from "next/image";

const raleway = Raleway({ subsets: ["latin"] });


type Product = {
  id: string;
  name: string;
  details: string;
  bgImage: StaticImageData;
};

export type ProductArray = Product[];

const PRODUCTS: ProductArray = [
  {
    id: "1",
    name: "Tickets and Events",
    details:
      "Join Unforgettable Celebration of Art, Music, Culture, Live Shows & many more. Experience Life`s Highlights by finding your perfect event and securing your tickets to series of Africa-inclined events throughout the entire year!",
    bgImage: tickets_and_events,
  },
  {
    id: "2",
    name: "African Taste",
    details:
      "Get Up to 50% Discount off Food & Drinks at Over 50 Restaurants. Join Fatherland Community and enjoy discounted rich flavors of African cuisines in African Restaurants all over the world",
    bgImage: african_taste,
  },
  {
    id: "3",
    name: "Arts and Crafts Store",
    details:
      "Fatherland Store is a destination for handcrafted unique and creative products inspired by Africans",
    bgImage: store,
  },
  {
    id: "4",
    name: "Travel and Spirituality",
    details:
      "Our travel and spirituality feature adventourous travel offers transformative workshops designed to awaken your consciousness and elevate your soul.",
    bgImage: spirituality,
  },
  {
    id: "5",
    name: "Community Forum",
    details:
      "Stay up to date by joining conversations with other members of Fatherland Community.",
    bgImage: community,
  },
  {
    id: "6",
    name: "Explore Cultural Learning",
    details:
      "Browse through recordings of previous live sessions on Africa cultures and values from our world-class instructors & tutors.",
    bgImage: cultural_learning,
  },
];

export default function ExclusiveProducts() {
  const renderProducts = PRODUCTS.map((product) => {
    return (
      <React.Fragment key={product.id}>
        <ExclusiveProductsCard product={product} />
      </React.Fragment>
    );
  });

  return (
    <section className="mt-20 p-20 max-w-7xl mx-auto bg-secondary-foreground bg-red-10">
      <div>
        <h1 className={`${raleway.className} font-[700] text-muted text-3xl `}>
          EXCLUSIVE PRODUCTS & BENEFITS
        </h1>
        <p className="mt-7 text-lg leading-9  max-w-2xl  font-[400]   ">
          By offering services and benefits, our goal is to provide
          opp0rtunities for members from all walks of the life to embrace and
          enjoy the True Africa Experience
        </p>
        <div className="bg-secondary h-[3px] w-28 rounded-full  mt-1" />
      </div>

      <div className="pt-14   bg-red-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 space-y4   gap-4 bg-red-10">
          {renderProducts}
          <div className="col-span1"></div>
        </div>
      </div>
    </section>
  );
}
