"use client";
import { useState } from "react";
import ShowShiftTable from "../shift/ShowShiftTable";
import AddNewShiftForm from "../shift/AddNewShiftForm";


const PhoneTab = () => {
  const [activeTab, setActiveTab] = useState("show-phone");

  const tabs = [
    {
      id: "show-phone",
      name: "Show Phone",
      content: <ShowShiftTable/>,
    },
    {
      id: "add-a-new-phone",
      name: "Add A New Phone",
      content: <AddNewShiftForm/>,
    },
    {
      id: "copy-an-existing-phone",
      name: "copy-an-existing-phone",
      content: <AddNewShiftForm/>,
    },
    {
      id: "phone-alist-list",
      name: "Phone Alias List",
      content: <AddNewShiftForm/>,
    },
    {
      id: "add-a-new-phone-alias",
      name: "Add A New Phone Alias",
      content: <AddNewShiftForm/>,
    },
    {
      id: "group-alias-list",
      name: "Group Alias List",
      content: <AddNewShiftForm/>,
    },
    {
      id: "add-a-new-group-alias",
      name: "Add A Group Alias Alias",
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

export default PhoneTab;