"use client";

import Link from "next/link";

const StatCard = ({
  title,
  value,
  icon,
  percentage = "12%",
  increase = true,
  updateDate = "July 16, 2023",
  href = "#",
}) => {
  return (
    <Link href={href}>
      <div className="w-full bg-white rounded-[1rem] border-light overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-md">

        <div className="p-4">
         
          <div className="flex items-center gap-4 mb-[1.5rem]">
            
            <div className="w-[3.25rem] h-[3.25rem] rounded-[0.75rem] bg-[#F5F2FF] flex items-center justify-center">
              {icon}
            </div>
      
            <h3 className="font-lexend font-light text-[0.975rem] text-black">
              {title}
            </h3>
          </div>

          <div className="flex items-center justify-between">

            <h2 className="font-lexend font-semibold text-[2.5rem] text-black">
              {value}
            </h2>

            <div
              className={`flex items-center gap-[0.25rem] px-[0.75rem] py-[0.375rem] rounded-[0.5rem]
              ${
                increase
                  ? "bg-[#ECFDF3] text-[#12B76A]"
                  : "bg-[#FEF3F2] text-[#F04438]"
              }`}
            >
              <span className="text-[0.75rem]">
                {increase ? "▲" : "▼"}
              </span>

              <span className="font-lexend font-medium text-[0.875rem]">
                {percentage}
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-light px-[1.25rem] py-[1rem]">
          <p className="font-lexend text-[0.95rem] text-gray-500">
            Update: {updateDate}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default StatCard;