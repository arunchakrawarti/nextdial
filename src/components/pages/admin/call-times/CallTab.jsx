// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import CallTimesTable from "./CallTimesTable";

// const CallTab = () => {
//   const pathname = usePathname();

//   const tabs = [
//     { name: "Show Call Times", href: "/admin/call-times" },
//     { name: "Add A New Call Time", href: "/users/user-status" },
//     { name: "Show State Call Times", href: "/users/time-sheet" },
//     { name: "Add A New State Call Time", href: "/users/days-status" },
//     { name: "Holiday", href: "/users/days-status" },
//     { name: "Add Holiday", href: "/users/days-status" },
//   ];

//   return (
//     <div>
//       <div className="w-full bg-white border border-light overflow-x-auto rounded-xl">
//         <div className="flex items-center min-w-max">
//           {tabs.map((tab) => (
//             <Link
//               key={tab.href}
//               href={tab.href}
//               className={`px-6 py-3 text-[15px] text-primary whitespace-nowrap transition-all duration-200
//         ${
//           pathname === tab.href
//             ? "font-semibold underline underline-offset-4"
//             : "hover:underline hover:underline-offset-4"
//         }
//       `}
//             >
//               {tab.name}
//             </Link>
//           ))}
//         </div>
//       </div>
//       <CallTimesTable />
//     </div>
//   );
// };

// export default CallTab;



"use client";
import { useState } from "react";
import CallTimesTable from "./CallTimesTable";
import AddNewCallTimeForm from "./AddNewCallTimeForm";
import ShowStateTable from "./ShowStateTable";
import AddNewStateCallTimeForm from "./AddNewStateCallTimeForm";
import HolidaysTable from "./HolidaysTable";
import AddNewHolidayForm from "./AddNewHolidayForm";

const CallTab = () => {
  const [activeTab, setActiveTab] = useState("show-call-times");

  const tabs = [
    {
      id: "show-call-times",
      name: "Show Call Times",
      content: <CallTimesTable />,
    },
    {
      id: "add-call-time",
      name: "Add A New Call Time",
      content: <AddNewCallTimeForm />,
    },
    {
      id: "show-state-call-times",
      name: "Show State Call Times",
      content: <ShowStateTable/>,
    },
    {
      id: "add-state-call-time",
      name: "Add A New State Call Time",
      content: <AddNewStateCallTimeForm/>,
    },
    {
      id: "holiday",
      name: "Holiday",
      content: <HolidaysTable/>,
    },
    {
      id: "add-holiday",
      name: "Add Holiday",
      content: <AddNewHolidayForm/>,
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

export default CallTab;