"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const accordionData = [
  {
    id: 1,
    title: "Allowed In-Groups Using A Status Group Override",
    content:
      "This is the content for Allowed In-Groups. You can place your forms, tables, or list items here.",
  },
  {
    id: 2,
    title: "Campaign Lists Using A Status Group Override",
    content:
      "This is the content for Campaign Lists. Add any dynamic panel or layout details here.",
  },
];
const CampaignStatusAccordion = () => {
  const [openSections, setOpenSections] = useState([1]);

  const toggleSection = (id) => {
    if (openSections.includes(id)) {
      setOpenSections(openSections.filter((item) => item !== id));
    } else {
      setOpenSections([...openSections, id]);
    }
  };

  return (
    <div className="rounded-xl w-full space-y-3">
      {accordionData.map((section) => {
        const isOpen = openSections.includes(section.id);

        return (
          <div
            key={section.id}
            className="bg-white rounded-xl border border-light overflow-hidden transition-all duration-300 mt-5"
          >
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-50 transition"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isOpen ? "bg-indigo-500" : "bg-slate-300"
                  }`}
                />
                <span
                  className={`font-medium text-[15px] transition-colors duration-300 ${
                    isOpen ? "text-indigo-600" : "text-dark"
                  }`}
                >
                  {section.title}
                </span>
              </div>

              <ChevronDown
                className={`w-5 h-5 transition-all duration-300 ${
                  isOpen
                    ? "rotate-180 text-indigo-600"
                    : "text-slate-400"
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] border-t border-slate-100"
                  : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 py-4 bg-slate-50">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CampaignStatusAccordion;