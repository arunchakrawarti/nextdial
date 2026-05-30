"use client";
import React from "react";
import Link from "next/link";
import LoadLeadsForm from "./LoadLeadsForm";

const LoadNewTab = () => {
  const navItems = [
    {
      id: 1,
      label: "Report",
      path: "/",
    },
    {
      id: 2,
      label: "Users",
      path: "/users/show-user",
    },
    {
      id: 3,
      label: "Campaigns",
      path: "campaigns/campaigns-main",
    },
    {
      id: 4,
      label: "Lists",
      path: "/list/show-lists",
    },
    {
      id: 4,
      label: "Scripts",
      path: "/users/time-sheet",
    },
    {
      id: 4,
      label: "Filters",
      path: "/users/time-sheet",
    },
    {
      id: 4,
      label: "Inbound",
      path: "/users/time-sheet",
    },
    {
      id: 4,
      label: "User Group",
      path: "/users/time-sheet",
    },
    {
      id: 4,
      label: "Agent Remote",
      path: "/users/time-sheet",
    },
    {
      id: 4,
      label: "Admin",
      path: "/users/time-sheet",
    },
  ];

  return (
    <div className="w-full">
      <div className="overflow-x-auto w-full scrollbar-hide">
        <div className="flex justify-between items-center bg-white border-light rounded-xl shadow-sm min-w-max">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.path || "#"}
              className="
                px-5 py-3
                text-sm sm:text-[15px]
                font-medium text-gray-600
                whitespace-nowrap
                hover:bg-[#f8f9ff] hover:text-[#5a52cd]
                transition-colors duration-200
                border-r border-gray-100 last:border-r-0
              "
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <LoadLeadsForm/>
    </div>
  );
};

export default LoadNewTab;
