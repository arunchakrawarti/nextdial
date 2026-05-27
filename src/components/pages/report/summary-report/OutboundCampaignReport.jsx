"use client";

import React from "react";

const OutboundCampaignReport = () => {
  const reportMetrics = [
    { label: "DIAL LEVEL:", val: "1" },
    { label: "TRUNK SHORT/FILL:", val: "0 / 0" },
    { label: "FILTER:", val: "NONE" },
    { label: "TIME:", val: "2026-05-27 11:47:34" },

    { label: "DIALABLE LEADS:", val: "0" },
    { label: "CALLS TODAY:", val: "0" },
    { label: "AVG AGENTS:", val: "1" },
    { label: "DIAL METHOD:", val: "RATIO" },

    { label: "HOPPER LEVEL:", val: "50" },
    { label: "DROPPED / ANSWERED:", val: "0.000 / 0" },
    { label: "DL DIFF:", val: "0.1" },
    { label: "STATUSES:", val: "NEW" },

    { label: "LEADS IN HOPPER:", val: "0" },
    { label: "DROPPED PERCENT:", val: "0%" },
    { label: "DIFF:", val: "10.00%" },
    { label: "ORDER:", val: "DOWN" },
  ];

  return (
    <div className="w-full bg-white border-light rounded-xl mt-5 p-5">
      <div className="mb-4 text-[14px]">
        <a href="#" className="text-blue-700 underline font-semibold">
          outbound
        </a>

        <span className="mx-2 text-gray-500">-</span>

        <a href="#" className="text-purple-700 underline">
          Modify
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-1 font-lexend text-[13px]">
        {reportMetrics.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between w-full py-2.5 border-b border-gray-100"
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

export default OutboundCampaignReport;