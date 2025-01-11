import React from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center justify-between gap-10">
      <Sidebar />
      <div>
        <Image
          src={"/hero.png"}
          alt={"hero"}
          width={890}
          height={344}
          className="w-full rounded object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
