"use client";
import React from "react";

const AgentTalkTimeReport = ({ isExpanded }) => {
  const basicMetrics = [
    { label: "DIAL LEVEL:", val: "1.000" },
    { label: "TRUNK SHORT/FILL:", val: "0 / 0" },
    { label: "FILTER:", val: "NONE" },
    { label: "TIME:", val: "2026-05-26 16:41:28" },

    { label: "DIALABLE LEADS:", val: "0" },
    { label: "CALLS TODAY:", val: "0" },
    { label: "AVG AGENTS:", val: "1.00" },
    { label: "DIAL METHOD:", val: "RATIO" },

    { label: "HOPPER ( min/auto ):", val: "50 / 0" },
    { label: "DROPPED / ANSWERED:", val: "0.000 / 0" },
    { label: "DL DIFF:", val: "0.10" },
    { label: "STATUSES:", val: "NEW" },

    { label: "LEADS IN HOPPER:", val: "0" },
    { label: "DROPPED PERCENT:", val: "0.00%" },
    { label: "DIFF:", val: "10.00%" },
    { label: "ORDER:", val: "DOWN" },
  ];
  const expandedMetrics = [
    { label: "DIAL LEVEL:", val: "1.000" },
    { label: "TRUNK SHORT/FILL:", val: "0 / 0" },
    { label: "FILTER:", val: "NONE" },
    { label: "TIME:", val: "2026-05-26 17:09:34" },

    { label: "MAX LEVEL:", val: "3" },
    { label: "DROPPED MAX:", val: "3%" },
    { label: "TARGET DIFF:", val: "0.0000" },
    { label: "INTENSITY:", val: "0" },

    { label: "DIAL TIMEOUT:", val: "60.0000" },
    { label: "TAPER TIME:", val: "2100" },
    { label: "LOCAL TIME:", val: "24hours" },
    { label: "AVAIL ONLY:", val: "N" },

    { label: "DIALABLE LEADS:", val: "0" },
    { label: "CALLS TODAY:", val: "0" },
    { label: "AVG AGENTS:", val: "1.00" },
    { label: "DIAL METHOD:", val: "RATIO" },

    { label: "HOPPER ( min/auto ):", val: "50 / 0" },
    { label: "DROPPED / ANSWERED:", val: "0.000 / 0" },
    { label: "DL DIFF:", val: "0.10" },
    { label: "STATUSES:", val: "NEW" },

    { label: "LEADS IN HOPPER:", val: "0" },
    { label: "DROPPED PERCENT:", val: "0.00%" },
    { label: "DIFF:", val: "10.00%" },
    { label: "ORDER:", val: "DOWN" },
  ];
  const reportMetrics = isExpanded ? expandedMetrics : basicMetrics;

  return (
    <div className="w-full bg-white border-light rounded-xl p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-1 font-lexend text-[13px]">
        {reportMetrics.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between w-full py-2.5 border-b border-gray-100 last:border-b-0"
          >
            <span className="font-bold text-gray-800 w-[55%]">
              {item.label}
            </span>
            <span className="text-gray-500 font-light w-[45%] text-left">
              {item.val}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentTalkTimeReport;