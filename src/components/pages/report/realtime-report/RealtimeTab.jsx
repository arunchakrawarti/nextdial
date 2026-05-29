"use client";
import { useState } from "react";
import AgentTalkTimeReport from "./AgentTalkTimeReport";
import ViewMoreTable from "./ViewMoreTable";
import ServerInfoTable from "./ServerInfoTable";
import UserGroupTable from "./UserGroupTable";
import PhoneTable from "./PhoneTable";
import MonitorTable from "./MonitorTable";
import CustPhoneTable from "./CustPhoneTable";

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
  const [openTabs, setOpenTabs] = useState({});

  const toggleTab = (id) => {
    if (id === "viewMore") {
      setOpenTabs((prev) => ({
        ...prev,
        [id]: !prev[id],
      }));
    } else {
     
      setOpenTabs((prev) => ({
        viewMore: prev.viewMore,
        [id]: !prev[id],
      }));
    }
  };

  const isCurrentlyExpanded = !!openTabs.viewMore;
  const activeOtherTab = Object.keys(openTabs).find(
    (key) => key !== "viewMore" && openTabs[key]
  );

  return (
    <div className="w-full">
      <div className="w-full mt-5 border-light rounded-xl overflow-x-auto">
        <div className="flex items-center min-w-max gap-2 p-1.5">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => toggleTab(tab.id)}
              className={`px-4 text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 rounded-xl py-2 ${
                openTabs[tab.id]
                  ? "bg-primary text-black shadow-md"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {tab.id === "viewMore"
                ? openTabs[tab.id]
                  ? "VIEW LESS"
                  : "VIEW MORE"
                : openTabs[tab.id]
                  ? `HIDE ${tab.label}`
                  : `SHOW ${tab.label}`}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <div className="border-light rounded-lg bg-white space-y-4">
          
          <AgentTalkTimeReport isExpanded={isCurrentlyExpanded} />
          {activeOtherTab ? (
            <>
              {activeOtherTab === "serverInfo" && <ServerInfoTable />}
              
              {activeOtherTab === "userGroup" && (
                <div><UserGroupTable/></div>
              )}
              {activeOtherTab === "waitingCalls" && (
                <div><ViewMoreTable/></div>
              )}
              {activeOtherTab === "groupStats" && (
                <div><ViewMoreTable/></div>
              )}
              {activeOtherTab === "phones" && (
                <div><PhoneTable/></div>
              )}
              {activeOtherTab === "monitors" && (
                <div><MonitorTable/></div>
              )}
              {activeOtherTab === "custPhones" && (
                <div><CustPhoneTable/></div>
              )}
              {activeOtherTab === "custInfo" && (
                <div><ViewMoreTable/></div>
              )}
            </>
          ) : (
            <ViewMoreTable />
          )}

        </div>
      </div>
    </div>
  );
};

export default ReportTabs;