"use client";
import { useState } from "react";
import AddNewCampaign from "./AddNewCampaign";
import CampaignStatusesTable from "./Statuses";

const tabData = [
  { id: "viewMore", label: "VIEW MORE" },
  { id: "userGroup", label: "USER GROUP" },
  { id: "serverInfo", label: "SERVER INFO" },
  { id: "waitingCalls", label: "WAITING CALLS" },
  { id: "groupStats", label: "IN-GROUP STATS" },
  { id: "phones", label: "PHONES" },
  { id: "monitors", label: "MONITORS" },
  { id: "custPhones", label: "CUSTPHONES" },
  { id: "custInfo", label: "CUST INFO" },
];

const ReportTabs = () => {
  const [activeTab, setActiveTab] = useState("viewMore");

  return (
    <div className="w-full bg-white mt-5 font-sans">
      <div className="w-full bg-white p-2 shadow-sm backdrop-blur-md overflow-x-auto">
        <div className="flex items-center min-w-max gap-1">
          {tabData.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
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

      <div className="bg-white rounded-2xl shadow-sm mt-5">

        {activeTab === "viewMore" && (
          <AddNewCampaign />
        )}

        {activeTab === "userGroup" && (
          <CampaignStatusesTable />
        )}

        {activeTab === "serverInfo" && (
          <div className="p-8 border border-dashed border-gray-300 rounded-xl text-center text-gray-500">
            🖥️ [TODO: ServerInfoTable Component]
          </div>
        )}

        {activeTab === "waitingCalls" && (
          <div className="p-8 border border-dashed border-gray-300 rounded-xl text-center text-gray-500">
            📞 [TODO: Waiting Calls]
          </div>
        )}

        {activeTab === "groupStats" && (
          <div className="p-8 border border-dashed border-gray-300 rounded-xl text-center text-gray-500">
            📈 [TODO: In-Group Stats]
          </div>
        )}

        {activeTab === "phones" && (
          <div className="p-8 border border-dashed border-gray-300 rounded-xl text-center text-gray-500">
            ☎️ [TODO: PhoneTable Component]
          </div>
        )}

        {activeTab === "monitors" && (
          <div className="p-8 border border-dashed border-gray-300 rounded-xl text-center text-gray-500">
            🖥️ [TODO: MonitorTable Component]
          </div>
        )}

        {activeTab === "custPhones" && (
          <div className="p-8 border border-dashed border-gray-300 rounded-xl text-center text-gray-500">
            📱 [TODO: CustPhoneTable Component]
          </div>
        )}

        {activeTab === "custInfo" && (
          <div className="p-8 border border-dashed border-gray-300 rounded-xl text-center text-gray-500">
            ℹ️ [TODO: Cust Info]
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportTabs;