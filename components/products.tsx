import Image from "next/image";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "lucide-react";
import ProductCard from "./ProductCard";

const products = [
  {
    title: "HAVIT HV-G92 Gamepad",
    originalPrice: 1160,
    discountedPrice: 960,
    discountPercentage: 35,
    rating: 5,
    reviewCount: 80,
    imageUrl: "/gameproduct.png",
  },
  {
    title: "AK-900 Wired Keyboard",
    originalPrice: 160,
    discountedPrice: 120,
    discountPercentage: 40,
    rating: 4,
    reviewCount: 75,
    imageUrl: "/keyboard.png",
  },
];
const ProductSection = () => {
  return (
    <div className="max-w-7xl mx-auto h-full flex flex-col items-center justify-center py-32">
      <div className="w-full flex items-center justify-between lg:p-0 p-4">
        {/* for today's sale  */}
        <div className="block">
          <div className="flex items-center gap-5">
            <Image
              src={"/rectangle.png"}
              alt="rectangle"
              width={20}
              height={40}
              className="object-cover rounded-sm"
            />
            <h1 className="text-[16px] font-semibold tracking-normal">
              Today's
            </h1>
          </div>
          <div className="flex items-center gap-20 mt-14 py-2">
            <h2 className="text-4xl font-bold">Flash Sales</h2>
            {/* a sale timer here that show limited time sale */}
          </div>
        </div>
        {/* for slider arrow icon */}
        <div>arrow icons</div>
      </div>
      <div className="w-full py-8">
        <ProductCard products={products} />
      </div>
    </div>
  );
};

export default ProductSection;
