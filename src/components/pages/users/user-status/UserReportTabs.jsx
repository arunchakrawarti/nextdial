"use client";
import React from "react";
import Link from "next/link";
import { User, LayoutGrid, Calendar, Clock } from "lucide-react";

const UserReportTabs = () => {
  const navItems = [
    {
      id: 1,
      label: "Agent Time Sheet",
      path: "/users/time-sheet",
      icon: <Clock size={18} className="text-primary" />,
    },
    {
      id: 2,
      label: "User Status",
      path: "/users/user-status",
      icon: <User size={18} className="text-primary" />,
    },
    {
      id: 3,
      label: "Modify User",
      path: "/users/show-user/modify-user",
      icon: <LayoutGrid size={18} className="text-primary" />,
    },
    {
      id: 4,
      label: "User multiple day status detail report",
      path: "/users/single-agent",
      icon: <Calendar size={18} className="text-primary" />,
    },
  ];

  return (
    <div className="w-full">
      <div className="overflow-x-auto w-full scrollbar-hide">
        <div className="flex items-center bg-white border border-gray-200 rounded-xl shadow-sm min-w-max">
          
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.path || "#"}
              className="
                flex items-center gap-2
                px-5 py-3
                text-sm sm:text-[15px]
                font-medium text-gray-600
                whitespace-nowrap
                hover:bg-[#f8f9ff] hover:text-[#5a52cd]
                transition-colors duration-200
                border-r border-gray-100 last:border-r-0
              "
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}

        </div>
      </div>
    </div>
  );
};

export default UserReportTabs;