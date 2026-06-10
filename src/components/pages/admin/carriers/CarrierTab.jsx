"use client";
import { useState } from "react";
import CarrierTable from "./CarrierTable";
import AddNewCarrier from "./AddNewCarrier";
import AddCopiedCarrier from "./AddCopiedCarrier";


const CarrierTab = () => {
  const [activeTab, setActiveTab] = useState("show-carriers");

  const tabs = [
    {
      id: "show-carriers",
      name: "Show Carries",
      content: <CarrierTable/>,
    },
    {
      id: "add-a-new-carriers",
      name: "Add A New Carrier",
      content: <AddNewCarrier/>,
    },
    {
      id: "copy-a-carrier",
      name: "Copy A Carrier",
      content: <AddCopiedCarrier/>,
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

export default CarrierTab;