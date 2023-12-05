import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
// import { ProductArray } from "./ExclusiveProducts";
import Image, { StaticImageData } from "next/image";
// import people from "@/public/assets/people.png";

type Product = {
  id: string;
  name: string;
  details: string;
  bgImage: StaticImageData;
};

interface ProductProps {
  product: Product
}
export default function ExclusiveProductsCard({product}: ProductProps) {

  return <div className="">
  <div
    key={product.id}
    className={`space-y2 mt4 w-[22rem h-[16.5rem h-full aspect-[4/3] py-4 px-4 text-white  rounded-lg  bg-red-30  relative`}
  >
    <Image
      src={product.bgImage}
      alt="background image"
      fill
      className=" aspect-[4/3] rounded-md w-full object-cover  -z-20"
    />
    <h4 className="text-xl font-[600] mt-20 ">{product.name}</h4>
    <div className="bg-secondary h-1 w-20 rounded-full  mt-1" />
    <p className="mt-4 text-justify text-xs ">{product.details}</p>
    <p className="text-secondary mt-4  hover:underline cursor-pointer font-[600] w-auto inline-flex   bg-red-30">
      Learn More <MdOutlineArrowForwardIos className="my-auto ml-2  " />{" "}
    </p>
  </div>

  </div>;
}
