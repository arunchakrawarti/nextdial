"use client";

import Link from "next/link";

const StatCard = ({ title, value, icon, href = "#" }) => {
  return (
    <Link href={href}>
      <div className="w-full bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300 cursor-pointer">
        
        {/* Header */}
        <div className="flex items-center gap-3 px-5 pt-5">
          
          {/* Icon */}
          <div className="w-11 h-11 rounded-xl bg-[#F5F2FF] flex items-center justify-center">
            {icon}
          </div>

          {/* Title */}
          <h3 className="font-lexend font-normal text-[19px] leading-7 text-gray-800">
            {title}
          </h3>
        </div>

        {/* Value */}
        <div className="px-5 py-6">
          <span className="font-lexend font-semibold text-[48px] leading-[56px] tracking-normal text-gray-900">
            {value}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default StatCard;