"use client";
import { useState } from "react";
import ShowShiftTable from "./ShowShiftTable";
import AddNewShiftForm from "./AddNewShiftForm";

const ShiftTab = () => {
  const [activeTab, setActiveTab] = useState("show-shift");

  const tabs = [
    {
      id: "show-shift",
      name: "Show Shifts",
      content: <ShowShiftTable/>,
    },
    {
      id: "add-a-new-shift",
      name: "Add A New Shift",
      content: <AddNewShiftForm/>,
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

export default ShiftTab;