"use client";
import { useState } from "react";
import MusicTable from "./MusicTable";
import AddMusichold from "./AddMusichold";

const MusicHoldTab = () => {
  const [activeTab, setActiveTab] = useState("show-moh-entries");

  const tabs = [
    {
      id: "show-moh-entries",
      name: "Show Moh Entries",
      content:<MusicTable/>,
    },
    {
      id: "add-a-new-moh-entry",
      name: "Add A New Moh Entry",
      content:<AddMusichold/>,
    },
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

export default MusicHoldTab;