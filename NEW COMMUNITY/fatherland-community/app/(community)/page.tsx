// import { Button } from "@/components/ui/button";
// import Image from "next/image";
import Hero from "../components/Hero";
import FatherlandConcept from "../components/FatherlandConcept";
// import ExploreCulture from "../components/ExploreCulture";
// import CulturalLearning from "../components/CulturalLearning";
import ExclusiveProducts from "../components/ExclusiveProducts";
// import AfricanAuthenticStore from "../components/AfricanAuthenticStore";
// import DiscoverItems from "../components/DiscoverItems";
import JoinConversation from "../components/JoinConversation";

export default function Home() {
  return (
    <main className=" bg-red-20">
      <Hero />
      <FatherlandConcept />
      <ExclusiveProducts />
      <JoinConversation />
      {/* <ExploreCulture /> */}
      {/* <CulturalLearning /> */}
      {/* <AfricanAuthenticStore /> */}
      {/* <DiscoverItems /> */}
    </main>
  );
}
