"use client";

import Link from "next/link";

const StatCard = ({ title, value, icon, href = "#" }) => {
  return (
    <Link href={href}>
      <div className="w-full bg-white rounded-xl overflow-hidden border-2 border-border-light  cursor-pointer">
        
        <div className="flex items-center gap-3 px-5 pt-5">
        
          <div className="w-11 h-11 rounded-xl bg-[#F5F2FF] flex items-center justify-center">
            {icon}
          </div>
          <h3 className="font-lexend font-light text-[16px] text-gray-800">
            {title}
          </h3>
        </div>

        {/* Value */}
        <div className="px-5 py-3">
          <span className="font-lexend font-semibold text-[40px]  text-gray-900">
            {value}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default StatCard;