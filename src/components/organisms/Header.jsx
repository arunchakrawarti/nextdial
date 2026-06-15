"use client";

import Button from "../common/Button";
import SearchBox from "@/components/atoms/SearchBox";
import { Bell, Search } from "lucide-react";

export default function Header({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-30 w-full bg-white">
      <div className="flex items-center justify-between gap-3 px-4 sm:px-5 lg:px-6 py-4">
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <Button
            onClick={onMenuClick}
            className="flex lg:hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-light bg-white text-black"
          >
            <i className="ri-menu-2-line text-xl"></i>
          </Button>
          <div className="min-w-0">
            <h2 className="truncate font-lexend font-semibold text-base sm:text-xl lg:text-2xl text-black">
              Hello Robert 👋🏻
            </h2>
            <p className="font-lexend font-light text-xs sm:text-sm text-[#A2A1A8]">
              Good Morning
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <div className="hidden lg:block w-[320px] xl:w-[380px]">
            <SearchBox
              name="search"
              iconLeft={Search}
              placeholder="Search here..."
              className="w-full"
            />
          </div>
          <button className="h-11 w-11 sm:h-13 sm:w-12 rounded-xl border-light flex items-center justify-center bg-white shrink-0">
            <Bell
              size={18}
              className="text-black"
            />
          </button>
          <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-1 rounded-xl  border-light bg-white cursor-pointer shrink-0">

            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg object-cover shrink-0"
            />

            <div className="hidden sm:block min-w-0">
              <h4 className="truncate font-lexend font-medium text-sm text-black">
                Robert Allen
              </h4>

              <p className="truncate font-lexend font-light text-xs text-[#A2A1A8]">
                HR Manager
              </p>
            </div>

            <i className="ri-arrow-down-s-line text-lg sm:text-xl text-[#16151C] shrink-0"></i>
          </div>

        </div>
      </div>
      <div className="block lg:hidden px-4 pb-4">
        <SearchBox
          name="search"
          iconLeft={Search}
          placeholder="Search here..."
          className="w-full"
        />
      </div>
    </header>
  );
}