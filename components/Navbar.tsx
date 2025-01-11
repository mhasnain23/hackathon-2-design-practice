"use client";

// Components
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import VectorSvg from "./VectorSvg";
import { Input } from "./ui/input";

// Icons
import {
  HeartIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
} from "lucide-react";
// import WishlistSvg from "./Wishlistsvg";

const Navbar = () => {
  return (
    <div className="w-full h-auto font-[Poppins] border-b">
      {/* Offer line sale  */}
      <div className="bg-black w-full lg:h-16 h-32 px-20 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        {/* Shop Now for Mobile */}
        <span className="text-[#FAFAFA] font-bold tracking-tight underline lg:text-lg text-[13px] mt-1 cursor-pointer block lg:hidden">
          Shop Now
        </span>

        {/* Centered Offer Line */}
        <div className="flex-1 h-16 flex items-center justify-center text-center">
          <p className="text-lg font-semibold text-[#FAFAFA] text-center lg:mx-auto">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          {/* Shop Now for Desktop */}
          <span className="text-[#FAFAFA] absolute left-[64%] font-bold tracking-tight underline lg:text-lg text-[10px] cursor-pointer hidden lg:block">
            Shop Now
          </span>
        </div>

        {/* Dropdown Menu */}
        <div className="max-w-[100px]">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="bg-[#000]">
              <Button>
                English <VectorSvg />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Fran ais</DropdownMenuItem>
              <DropdownMenuItem>Espa ol</DropdownMenuItem>
              <DropdownMenuItem>Italiano</DropdownMenuItem>
              <DropdownMenuItem>Portugu s</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Other content */}
      <div className="max-w-7xl mx-auto flex lg:flex-row items-center justify-between pt-10 pb-5 md:px-0 px-4">
        <div className="flex items-center justify-between gap-48">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-black/90">
              Exclusive
            </h2>
          </div>
          <div className="hidden md:flex items-center justify-between gap-[40px]">
            <h2 className="text-[13px] font-medium tracking-tight leading-[1.1] cursor-pointer">
              Home
            </h2>
            <h2 className="text-[13px] font-medium tracking-tight leading-[1.1] cursor-pointer">
              contact
            </h2>
            <h2 className="text-[13px] font-medium tracking-tight leading-[1.1] cursor-pointer">
              about
            </h2>
            <h2 className="text-[13px] font-medium tracking-tight leading-[1.1] cursor-pointer">
              sign up
            </h2>
          </div>
        </div>
        {/* search bar and icons */}
        <div className="relative flex items-center space-x-5">
          <div className="flex items-center justify-center relative">
            <SearchIcon className="w-6 h-6 absolute right-3 text-gray-800" />
            <Input
              type="text"
              placeholder="Search"
              className="pl-10 bg-[#F5F5F5] border-none"
            />
          </div>
          <HeartIcon className="w-6 h-6" />
          <ShoppingCartIcon className="w-6 h-6" />
          <UserIcon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
