"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import AddNewCampaign from "./AddNewCampaign";
import CampaignStatusesTable from "./Statuses";
import HotKeys from "./HotKeys";
import LeadRecycle from "./LeadRecycle";
import AutoAltNumberDialing from "./AutoAltNumberDialing";
import ListMix from "./ListMix";
import Survey from "./Survey";
import PauseCode from "./PauseCode";
import AcCid from "./AcCid";

const tabData = [
  { id: "viewMore", label: "DETAILS" },
  { id: "userGroup", label: "STATUSES" },
  { id: "serverInfo", label: "HOTKEYS" },
  { id: "waitingCalls", label: "LEAD RECYCLING" },
  { id: "groupStats", label: "AUTO ALT DIAL" },
  { id: "phones", label: "LIST MIX" },
  { id: "monitors", label: "SURVEY" },
  { id: "custPhones", label: "PAUSE CODES" },
  { id: "custInfo", label: "AC CID" },
  { id: "realtime", label: "REAL-TIME" },
];

const ReportTabs = () => {
  const [activeTab, setActiveTab] = useState("viewMore");
  const router = useRouter();

  const handleTabClick = (tab) => {
    if (tab.id === "realtime") {
      router.push("/report/realtime-report"); 
      return;
    }

    setActiveTab(tab.id);
  };

  return (
    <div className="w-full bg-white mt-5 font-sans">
      {/* Tabs */}
      <div className="w-full bg-white p-2 shadow-sm backdrop-blur-md overflow-x-auto">
        <div className="flex items-center min-w-max gap-1">
          {tabData.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab)}
                className={`px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-white shadow-md shadow-blue-500/20 scale-[1.02]"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-5">
        {activeTab === "viewMore" && <AddNewCampaign />}

        {activeTab === "userGroup" && <CampaignStatusesTable />}

        {activeTab === "serverInfo" && <HotKeys />}

        {activeTab === "waitingCalls" && <LeadRecycle />}

        {activeTab === "groupStats" && <AutoAltNumberDialing />}

        {activeTab === "phones" && <ListMix />}

        {activeTab === "monitors" && <Survey />}

        {activeTab === "custPhones" && <PauseCode />}

        {activeTab === "custInfo" && <AcCid />}
      </div>
    </div>
  );
};

export default ReportTabs;