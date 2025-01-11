"use client";

import { Badge, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
}

export function ProductCard({ products }: { products: any }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {products.map((item: ProductCardProps, index: any) => (
        <Card
          key={index}
          className="relative lg:w-[270px] h-[360px]overflow-hidden group border-none rounded-sm"
        >
          <div className="absolute top-3 left-3 z-10">
            <Button variant="destructive" className="text-sm font-medium">
              -{item.discountPercentage}%
            </Button>
          </div>
          <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
              <Heart className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
              <Eye className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          <CardContent className="p-0">
            <div className="bg-[#F5F5F5] aspect-square relative flex items-center justify-center">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-[172px] h-[152px] object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl font-bold text-red-600">
                  ${item.discountedPrice}
                </span>
                <span className="text-md text-gray-500 line-through">
                  ${item.originalPrice}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={cn(
                        "w-6 h-6",
                        i < item.rating ? "text-yellow-400" : "text-gray-300"
                      )}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  ({item.reviewCount})
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default ProductCard;
