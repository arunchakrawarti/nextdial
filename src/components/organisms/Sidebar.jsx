"use client";
import Image from "next/image";
import { SideBarData } from "../../config/SideBarData";
import NavigationLink from "./NavigationLink";

const SideBar = ({ isMobile = false, isOpen = true, onClose }) => {
  return (
    <>
      {isMobile && isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50
          w-[260px]
          bg-white
          border-r border-gray-200
          transition-all duration-300
          transform
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <div className="h-full flex flex-col">
          <div className="flex justify-center mt-3 border-b border-gray-300 pb-2">
            <Image
          src="/img/nextdial.jpeg"
          height={20}
          width={180}
          alt="next.png"
          />
          </div>
          <ul className="flex-1 overflow-y-auto no-scrollbar px-4 py-6 space-y-2">
            {SideBarData[0].items.map((item, index) => (
              <NavigationLink key={index} {...item} />
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;