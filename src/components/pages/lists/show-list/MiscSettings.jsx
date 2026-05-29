"use client";
import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const MiscSettings = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border-light overflow-hidden mt-5">
        <div className="px-4 py-2.5 border-b border-slate-200">
          <h3 className="text-xs font-bold text-dark uppercase tracking-wider">
            Misc Settings
          </h3>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 items-center">
          <Input
            label="Inventory Report:"
            type="select"
            options={["Y", "N"]}
          />

          <Input
            label="Time Zone Setting:"
            type="select"
            options={["COUNTRY_AND_AREA_CODE", "POSTAL_CODE", "LOCAL_TIME"]}
          />
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <Button variant="gradient" className="px-10">
          SUBMIT
        </Button>
      </div>
    </div>
  );
};

export default MiscSettings;