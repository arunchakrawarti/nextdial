"use client";

import Button from "../common/Button";

export default function Header({ onMenuClick }) {

  return (
    <header className="sticky top-0 z-30 w-full bg-white">
      
      <div className="flex items-center justify-between gap-3 px-3 sm:px-4 md:px-6 py-3 md:py-4">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-2 flex-1 min-w-0 overflow-hidden text-sm font-medium text-gray-600">

          {/* MOBILE MENU BUTTON */}
          <Button
            onClick={onMenuClick}
            className="mr-1 flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg border border-gray-800 text-black lg:hidden"
          >
            <i className="ri-menu-2-line text-lg sm:text-xl"></i>
          </Button>

          {/* BREADCRUMB */}
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar whitespace-nowrap">

            <span className="cursor-pointer hover:text-violet-600 transition-all duration-300 font-lexend text-gray-700 font-bold shrink-0">
              Home
            </span>

            <i className="ri-arrow-right-s-line text-gray-700 shrink-0 font-bold"></i>

            <span className="cursor-pointer hover:text-violet-600 transition-all duration-300 font-lexend text-gray-700 font-bold shrink-0">
              Timeclock
            </span>

            <i className="ri-arrow-right-s-line text-gray-700 shrink-0 font-bold"></i>

            <span className="cursor-pointer hover:text-violet-600 transition-all duration-300 font-lexend text-gray-700 font-bold shrink-0">
              Chat
            </span>

            <i className="ri-arrow-right-s-line text-gray-700 shrink-0 font-bold"></i>

            <span className="text-violet-600 font-bold shrink-0 font-lexend">
              Logout (6666)
            </span>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">

          {/* DATE */}
          <div className="hidden lg:flex items-center gap-2 text-gray-500 font-semibold">
            <i className="ri-time-line text-lg text-gray-700"></i>

            <span className="text-gray-700 whitespace-nowrap text-sm font-lexend">
              May 12, 2026 6:11:14 PM
            </span>
          </div>

          {/* USER */}
          <div className="flex items-center gap-2 sm:gap-3">

            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-violet-600 text-white font-semibold shrink-0">
              6
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <span className="text-gray-700 font-medium text-sm font-lexend">
                6666
              </span>

              <i className="ri-arrow-down-s-line text-gray-700"></i>
            </div>

          </div>

        </div>

      </div>

    </header>
  );
}