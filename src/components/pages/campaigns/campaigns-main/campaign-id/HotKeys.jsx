"use client";
import React from "react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { Plus, BriefcaseBusiness } from "lucide-react";

const HotKeys = () => {
  return (
    <div className="w-full space-y-6 font-lexend">
      <div className="bg-white rounded-2xl p-4 border-light w-full">
        <div className="mb-4">
          <h2 className="font-bold text-dark text-lg uppercase text-left">
            CUSTOM HOT KEYS WITHIN THIS CAMPAIGN
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
          <div className="w-16 h-16  rounded-full flex items-center justify-center mb-4">
            <BriefcaseBusiness className="w-7 h-7 text-[#A3AED0]" />
          </div>

          <p className="text-gray-400 text-base font-normal">
            No custom hot keys found for this campaign.
          </p>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6 border-light w-full">
        <div className="mb-6">
          <h2 className="font-bold text-dark text-lg tracking-wide uppercase text-left">
            ADD NEW CUSTOM CAMPAIGN HOT KEY
          </h2>
        </div>

        <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 items-end">
          <div className="w-full">
            <Input
              label="Hotkey"
              type="select"
              options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]}
              defaultValue="1"
            />
          </div>

          <div className="w-full">
            <Input
              label="Status"
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
             <Button variant="gradient" icon="add-line" iconPosition="left">
              Add
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HotKeys;
