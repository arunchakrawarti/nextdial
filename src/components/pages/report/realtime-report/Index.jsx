"use client";
import React, { useState } from "react";
import { RefreshCw, Settings2 } from "lucide-react";
import Button from "@/components/common/Button";
import RealtimeTab from "./RealtimeTab";
import Reportoption from "./Reportoption";
import RealTimeStats from "./RealTimeStats";

const MainrealTime = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="w-full bg-light-gray rounded-xl border-light px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          <div className="flex items-center gap-4 shrink-0">
            <h1 className="heading font-lexend">
              Real-Time Main Report
            </h1>

            <div className="hidden lg:block h-8 w-px bg-gray-300" />
          </div>
          
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <Button variant="danger" onClick={() => setIsOpen(true)}>
              <Settings2 size={16} />
              <span className="hidden sm:inline">
                Choose Report Display Options
              </span>
              <span className="sm:hidden">Options</span>
            </Button>

            <Button variant="success">
              <RefreshCw size={16} />
              RELOAD NOW
            </Button>

            <Button href="/campaigns/campaigns-main" variant="success">
              MODIFY
            </Button>

            <Button href="/report/summary-report" variant="success">
              SUMMARY
            </Button>
          </div>
        </div>
      </div>

      <RealtimeTab />
      <RealTimeStats/>

      <Reportoption isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default MainrealTime;