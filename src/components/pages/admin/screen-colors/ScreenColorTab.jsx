"use client";
import { useState } from "react";
import ScreenColorTable from "./ScreenColorTable";
import AddScreenColor from "./AddScreenColor";
import SystemSetting from "../system-settings/SystemSetting";

const ScreenColorTab = () => {
  const [activeTab, setActiveTab] = useState("screen-colors");

  const tabs = [
    {
      id: "screen-colors",
      name: "Screen Colors",
      content:<ScreenColorTable/>,
    },
    {
      id: "add-a-screen-colors",
      name: "Add A Screen colors",
      content:<AddScreenColor/>,
    },
    {
      id: "change-active-screen-colors",
      name: "Change Active Screen Colors",
      content:<SystemSetting/>,
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

export default ScreenColorTab;