"use client";
import { useState } from "react";
import StatusGroupTable from "./StatusGroupTable";
import AddStatusGroup from "./AddStatusGroup";

const StatusGroupTab = () => {
  const [activeTab, setActiveTab] = useState("status-group");

  const tabs = [
    {
      id: "status-group",
      name: "Status Group",
      content:<StatusGroupTable/>,
    },
    {
      id: "add-a-status-group",
      name: "Add A Status Group",
      content:<AddStatusGroup/>,
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

export default StatusGroupTab;