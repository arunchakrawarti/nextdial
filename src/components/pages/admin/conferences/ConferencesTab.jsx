"use client";
import { useState } from "react";
import ConferencesTable from "./ConferencesTable";
import AddNewConferences from "./AddNewConferences";
import ShowConferenceTable from "./ShowConferenceTable";
import AddVicidialConference from "./AddVicidialConference";
import ConfBridgeTable from "./ConfBridgeTable";
import AddConfBridge from "./AddConfBridge";

const ConferencesTab = () => {
  const [activeTab, setActiveTab] = useState("show-conferences");

  const tabs = [
    {
      id: "show-conferences",
      name: "Show Conferences",
      content:<ConferencesTable/>,
    },
    {
      id: "add-a-new-conferences",
      name: "Add A New Conferences",
      content:<AddNewConferences/>,
    },
    {
      id: "show-vicidial-conferences",
      name: "Show Vicidial Conferences",
      content:<ShowConferenceTable/>,
    },
    {
      id: "add-a-new-vicidial-conferences",
      name: "Add A New Vicidial Conferences",
      content:<AddVicidialConference/>,
    },
    {
      id: "show-confbridges",
      name: "Show ConfBridges",
      content:<ConfBridgeTable/>,
    },
    {
      id: "add-confbridge",
      name: "Add Confbridge",
      content:<AddConfBridge/>,
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

export default ConferencesTab;