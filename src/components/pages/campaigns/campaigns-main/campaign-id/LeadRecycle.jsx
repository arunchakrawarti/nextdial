"use client";
import React from "react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { Plus, RefreshCw, CalendarCheck, Info } from "lucide-react";

const LeadRecycle = () => {
  return (
    <div className="w-full space-y-6 font-lexend">
      <div className="bg-white rounded-xl p-6 border-light w-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-2">
            <h2 className="heading font-lexend">
              Lead Recycling Within This Campaign
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
          <div className="w-16 h-16 bg-[#F0F5FF] rounded-full flex items-center justify-center mb-4">
            <CalendarCheck className="w-7 h-7 text-[#A3AED0]" />
          </div>
          <p className="text-slate-400 text-base font-normal">
            No lead recycling rules defined for this campaign.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border-light w-full space-y-5">
        <div className="flex items-center gap-3 mb-2">
          <h2 className="heading font-lexend">
            Add New Campaign Lead Recycle
          </h2>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="w-full">
            <Input
              label="STATUS"
              type="select"
              options={[
                "A - Answering Machine",
                "B - Busy",
                "DC - Disconnected",
                "SALE - Sale Made",
              ]}
              defaultValue="A - Answering Machine"
            />
          </div>

          <div className="w-full">
            <Input
              label="ATTEMPT DELAY (SECONDS)"
              type="number"
              placeholder="Enter seconds"
            />
          </div>

          <div className="w-full">
            <Input
              label="ATTEMPT MAXIMUM"
              type="number"
              placeholder="Enter maximum attempts"
            />
          </div>
        </form>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-2.5 bg-[#EDF5FF] text-[#1E3A8A] px-4 py-3 rounded-xl flex-1 text-sm font-medium">
            <Info className="w-4 h-4 text-[#3B82F6] shrink-0" />
            <span>
              * Lead counts taken from active lists in the campaign only.
            </span>
          </div>
          <div className="sm:w-32 w-full shrink-0">
            <Button variant="gradient" icon="add-line" iconPosition="left">
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadRecycle;
