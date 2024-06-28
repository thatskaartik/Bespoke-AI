import HeroSec from "@/components/HeroSec";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" w-full h-screen flex flex-row">
      <div className=" w-1/5 overflow-hidden">
        <Navbar />
      </div>
      <div className=" w-4/5 overflow-hidden">
        <HeroSec />
      </div>
    </div>
  );
}
