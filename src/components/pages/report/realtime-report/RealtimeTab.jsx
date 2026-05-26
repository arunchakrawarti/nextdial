// "use client";
// import { useState } from "react";
// import AgentTalkTimeReport from "./AgentTalkTimeReport";
// import ViewMoreTable from "./ViewMoreTable";
// import ServerInfoTable from "./ServerInfoTable";

// const tabData = [
//   { id: "viewMore", label: "VIEW MORE" },
//   { id: "userGroup", label: "USER GROUP" },
//   { id: "serverInfo", label: "SERVER INFO" },
//   { id: "waitingCalls", label: "WAITING CALLS" },
//   { id: "groupStats", label: "IN-GROUP STATS" },
//   { id: "phones", label: "PHONES" },
//   { id: "monitors", label: "MONITORS" },
//   { id: "custPhones", label: "CUSTPHONES" },
//   { id: "custInfo", label: "CUST INFO" },
// ];

// const ReportTabs = () => {
//   const [openTabs, setOpenTabs] = useState({});

//   const toggleTab = (id) => {
//     if (id === "viewMore") {
//       setOpenTabs((prev) => ({
//         ...prev,
//         [id]: !prev[id],
//       }));
//     } else {
//       setOpenTabs((prev) => ({
//         viewMore: prev.viewMore,
//         [id]: !prev[id],
//       }));
//     }
//   };

//   const isCurrentlyExpanded = !!openTabs.viewMore;

//   return (
//     <div className="w-full">
//       <div className="w-full mt-5 border-light bg-light-gray rounded-xl overflow-x-auto">
//         <div className="flex items-center min-w-max gap-2 p-1.5">
//           {tabData.map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => toggleTab(tab.id)}
//               className={`px-4 text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 rounded-xl py-2 ${
//                 openTabs[tab.id]
//                   ? "bg-white text-black shadow-md"
//                   : "text-gray-600 hover:text-black"
//               }`}
//             >
//               {tab.id === "viewMore"
//                 ? openTabs[tab.id]
//                   ? "VIEW LESS"
//                   : "VIEW MORE"
//                 : openTabs[tab.id]
//                   ? `HIDE ${tab.label}`
//                   : `SHOW ${tab.label}`}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="space-y-3 mt-5">
//         <div className="border rounded-lg bg-white">
//           <AgentTalkTimeReport isExpanded={isCurrentlyExpanded} />
//           <ViewMoreTable/>
//         </div>

//         {openTabs.userGroup && (
//           <div className="border rounded-lg p-4 bg-white">
            
//           </div>
//         )}

//         {openTabs.serverInfo && (
//           <div className="border rounded-lg p-4 bg-white">
//             <ServerInfoTable/>
//           </div>
//         )}

//         {openTabs.waitingCalls && (
//           <div className="border rounded-lg p-4 bg-white">
            
//           </div>
//         )}

//         {openTabs.groupStats && (
//           <div className="border rounded-lg p-4 bg-white">
            
//           </div>
//         )}

//         {openTabs.phones && (
//           <div className="border rounded-lg p-4 bg-white">
           
//           </div>
//         )}

//         {openTabs.monitors && (
//           <div className="border rounded-lg p-4 bg-white">
            
//           </div>
//         )}

//         {openTabs.custPhones && (
//           <div className="border rounded-lg p-4 bg-white">
            
//           </div>
//         )}

//         {openTabs.custInfo && (
//           <div className="border rounded-lg p-4 bg-white">
           
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ReportTabs;


"use client";
import { useState } from "react";
import AgentTalkTimeReport from "./AgentTalkTimeReport";
import ViewMoreTable from "./ViewMoreTable";
import ServerInfoTable from "./ServerInfoTable";

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
      <div className="w-full mt-5 border-light bg-light-gray rounded-xl overflow-x-auto">
        <div className="flex items-center min-w-max gap-2 p-1.5">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => toggleTab(tab.id)}
              className={`px-4 text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 rounded-xl py-2 ${
                openTabs[tab.id]
                  ? "bg-white text-black shadow-md"
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
        <div className="border rounded-lg bg-white p-4 space-y-4">
          
          <AgentTalkTimeReport isExpanded={isCurrentlyExpanded} />

          {activeOtherTab ? (
            <>
              {activeOtherTab === "serverInfo" && <ServerInfoTable />}
              
              {activeOtherTab === "userGroup" && (
                <div><ViewMoreTable/></div>
              )}
              {activeOtherTab === "waitingCalls" && (
                <div>{/* यहाँ अपनी WaitingCalls की टेबल लगा लो */}</div>
              )}
              {activeOtherTab === "groupStats" && (
                <div>{/* यहाँ अपनी GroupStats की टेबल लगा लो */}</div>
              )}
              {activeOtherTab === "phones" && (
                <div>{/* यहाँ अपनी Phones की टेबल लगा लो */}</div>
              )}
              {activeOtherTab === "monitors" && (
                <div>{/* यहाँ अपनी Monitors की टेबल लगा लो */}</div>
              )}
              {activeOtherTab === "custPhones" && (
                <div>{/* यहाँ अपनी CustPhones की टेबल लगा लो */}</div>
              )}
              {activeOtherTab === "custInfo" && (
                <div>{/* यहाँ अपनी CustInfo की टेबल लगा लो */}</div>
              )}
            </>
          ) : (
            /* डिफ़ॉल्ट रूप में यह टेबल दिखती रहेगी */
            <ViewMoreTable />
          )}

        </div>
      </div>
    </div>
  );
};

export default ReportTabs;