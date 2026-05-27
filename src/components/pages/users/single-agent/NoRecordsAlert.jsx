"use client";
import React from "react";
import { AlertCircle } from "lucide-react"; 

const NoRecordsAlert = ({ 
  agentId = "1002", 
  timestamp = "2026-05-27 17:49:36 (M)", 
  timeRange = "2026-05-27 00:00:00 to 2026-05-27 23:59:59" 
}) => {
  return (
    <div className="w-full space-y-4 mt-5">
      
      <div className="w-full bg-white border border-red-200 rounded-xl px-4 py-3.5 flex items-center gap-2.5 shadow-sm">
        <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
        <span className="text-red-700 font-lexend font-bold text-sm uppercase tracking-wider">
          *** No Records Found ***
        </span>
      </div>

      <div className="w-full bg-white border-light rounded-xl px-5 py-4">
        <p className="text-gray-600 font-mono text-[13px] leading-relaxed tracking-tight">
          Agent Days Status Report: <span className="font-bold text-gray-800">{agentId}</span> — {timestamp} — Time range: <span className="text-gray-700 font-medium">{timeRange}</span> <span className="text-red-600 font-bold ml-1">*** NO RECORDS FOUND ***</span>
        </p>
      </div>

    </div>
  );
};

export default NoRecordsAlert;