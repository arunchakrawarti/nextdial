"use client";

import Button from "../common/Button";
import SearchBox from "@/components/atoms/SearchBox";
import { Bell, Search } from "lucide-react";

export default function Header({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-30 w-full bg-white ">

      <div className="flex flex-wrap items-center justify-between gap-[1rem] px-[1rem] sm:px-[1.25rem] lg:px-[1.5rem] py-[1rem]">

        <div className="flex items-center gap-[0.75rem] min-w-0 flex-1">

          
          <Button
            onClick={onMenuClick}
            className="flex h-[2.75rem] w-[2.75rem] shrink-0 items-center justify-center rounded-[0.75rem] border border-[#ECECEE] bg-white text-black lg:hidden"
          >
            <i className="ri-menu-2-line text-[1.25rem]"></i>
          </Button>

         
          <div className="min-w-0">
            <h2 className="truncate font-lexend font-semibold text-[1rem] sm:text-[1.25rem] lg:text-[1.5rem] leading-[1.5rem] lg:leading-[2rem] text-black">
              Hello Robert 👋🏻
            </h2>

            <p className="font-lexend font-light text-[0.75rem] sm:text-[0.875rem] leading-[1.25rem] text-[#A2A1A8]">
              Good Morning
            </p>
          </div>
        </div>

       
        <div className="flex items-center gap-[0.5rem] sm:gap-[1rem] w-full sm:w-auto justify-end">

         
          <div className="hidden md:block w-full sm:w-[16rem] lg:w-[20rem]">
            <SearchBox
              name="search"
              iconLeft={Search}
              placeholder="Search"
              className="w-full"
            />
          </div>

         
          <button className="flex md:hidden w-[2.75rem] h-[2.75rem] rounded-[0.75rem] border border-[#ECECEE] items-center justify-center bg-white">
            <Search
              size={18}
              className="text-black"
            />
          </button>

          
          <button className="w-[2.75rem] h-[2.75rem] sm:w-[3rem] sm:h-[3rem] rounded-[0.75rem] border border-[#ECECEE] flex items-center justify-center bg-white shrink-0">
            <Bell
              size={18}
              className="text-black"
            />
          </button>

          
          <div className="flex items-center gap-[0.5rem] sm:gap-[0.75rem] px-[0.5rem] sm:px-[0.5rem] py-[0.4rem] sm:py-[0.2rem] rounded-[0.75rem] border border-[#ECECEE] bg-white cursor-pointer shrink-0">

            
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="w-[2.25rem] h-[2.25rem] sm:w-[2.5rem] sm:h-[2.5rem] rounded-[0.5rem] object-cover"
            />

           
            <div className="hidden sm:block">
              <h4 className="font-lexend font-medium text-[0.8125rem] sm:text-[0.875rem] leading-[1.25rem] text-black">
                Robert Allen
              </h4>

              <p className="font-lexend font-light text-[0.6875rem] sm:text-[0.75rem] leading-[1rem] text-[#A2A1A8]">
                HR Manager
              </p>
            </div>

            <i className="ri-arrow-down-s-line text-[1.125rem] sm:text-[1.25rem] text-[#16151C]"></i>
          </div>

        </div>
      </div>
    </header>
  );
}