"use client";
import { useState } from "react";
import SystemStatuseTable from "./SystemStatuseTable";
import StatusCategories from "./StatusCategories";
import QcStatus from "./QcStatus";

const SystemTab = () => {
  const [activeTab, setActiveTab] = useState("system-Statuses");

  const tabs = [
    {
      id: "system-Statuses",
      name: "System Statuses",
      content:<SystemStatuseTable/>,
    },
    {
      id: "status-Categories",
      name: "Status Categories",
      content:<StatusCategories/>,
    },
    {
      id: "qc-status-codes",
      name: "QC Status Codes",
      content:<QcStatus/>,
    }
  ];

  return (
    <div>
      <div className="w-full bg-white border border-light overflow-x-auto rounded-xl">
        <div className="flex items-center min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-[15px] text-primary whitespace-nowrap transition-all duration-200
                ${
                  activeTab === tab.id
                    ? "font-semibold underline underline-offset-4"
                    : "hover:underline hover:underline-offset-4"
                }
              `}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>
      <div>
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default SystemTab;